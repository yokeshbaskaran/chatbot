// import { createContext, useContext, useEffect, useRef, useState } from "react";

// type MessageType = {
//   id: number;
//   text: string;
//   sender: "user" | "ai";
//   createdAt: number;
// };

// type NewChatType = {
//   id: number;
//   title: string;
//   messages: MessageType[];
//   createdAt: number;
//   updatedAt: number;
// };

// type AppContextType = {
//   sidebar: boolean;
//   onClickSideBar: () => void;
//   userText: string;
//   setUserText: React.Dispatch<React.SetStateAction<string>>;
//   createNewChat: () => void;
//   sendMessage: (text: string) => Promise<void>;
//   chats: NewChatType[];
//   activeChatID: number | null;
//   setActiveChatID: (id: number) => void;
//   deleteChat: (id: number) => void;
//   editChatTitle: (id: number, title: string) => void;
//   loading: boolean;
//   newChatRef: React.RefObject<HTMLInputElement | null>;
//   formatTime: (id: number) => string;
// };

// const AppContext = createContext({} as AppContextType);
// export const useAppContext = () => useContext(AppContext);

// export const AppContextProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [sidebar, setSidebar] = useState(true);
//   const [userText, setUserText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const newChatRef = useRef<HTMLInputElement>(null);

//   const [chats, setChats] = useState<NewChatType[]>(() => {
//     const stored = localStorage.getItem("chats");
//     return stored ? JSON.parse(stored) : [];
//   });

//   // console.log("chats in appcone", chats);

//   const [activeChatID, setActiveChatID] = useState<number | null>(null);

//   const onClickSideBar = () => setSidebar((prev) => !prev);

//   // persist chats
//   useEffect(() => {
//     localStorage.setItem("chats", JSON.stringify(chats));
//   }, [chats]);

//   // create chat
//   const createNewChat = () => {
//     const now = Date.now();

//     const newChat: NewChatType = {
//       id: now,
//       title: "New Chat",
//       messages: [],
//       createdAt: now,
//       updatedAt: now,
//     };

//     setChats((prev) => [...prev, newChat]);
//     setActiveChatID(newChat.id);
//   };

//   //   delete chat
//   const deleteChat = (id: number) => {
//     setChats((prev) => prev.filter((chat) => chat.id !== id));

//     if (activeChatID === id) {
//       setActiveChatID(null);
//     }
//   };

//   //  edit chat title
//   const editChatTitle = (id: number, title: string) => {
//     if (!title.trim()) return;

//     setChats((prev) =>
//       prev.map((chat) =>
//         chat.id === id
//           ? { ...chat, title, updatedAt: Date.now() } // update time
//           : chat,
//       ),
//     );
//   };

//   //  API CALL (with full history)
//   const query = async (messages: MessageType[]): Promise<string> => {
//     try {
//       setLoading(true);

//       // const response = await fetch(
//       //   "https://router.huggingface.co/v1/chat/completions",
//       //   {
//       //     method: "POST",
//       //     headers: {
//       //       Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
//       //       "Content-Type": "application/json",
//       //     },
//       //     body: JSON.stringify({
//       //       model: "deepseek-ai/DeepSeek-V4-Pro:novita",
//       //       messages: messages.map((m) => ({
//       //         role: m.sender === "user" ? "user" : "assistant",
//       //         content: m.text,
//       //       })),
//       //     }),
//       //   },
//       // );

//       const response = await fetch(
//         "https://openrouter.ai/api/v1/chat/completions",
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             model: "google/gemma-2-9b-it:free",
//             messages: [
//               {
//                 role: "user",
//                 content: "What is the meaning of life?",
//               },
//             ],
//           }),
//         },
//       );

//       if (!response.ok) {
//         const err = await response.text();
//         console.error("API ERROR:", err);
//         return "API Error";
//       }

//       const result = await response.json();
//       return result?.choices?.[0]?.message?.content || "No response";
//     } catch (err) {
//       console.error(err);
//       return "Error fetching response";
//     } finally {
//       setLoading(false);
//     }
//   };

//   //  main function
//   const sendMessage = async (text: string) => {
//     if (!activeChatID || !text.trim() || loading) return;

//     const activeChat = chats.find((c) => c.id === activeChatID);
//     if (!activeChat) return;

//     const userMsg: MessageType = {
//       id: Date.now(),
//       text,
//       sender: "user",
//       createdAt: Date.now(),
//     };

//     //   add user message
//     setChats((prev) =>
//       prev.map((chat) =>
//         chat.id === activeChatID
//           ? {
//               ...chat,
//               messages: [...chat.messages, userMsg],
//               title:
//                 chat.messages.length === 0 ? text.slice(0, 20) : chat.title,
//               updatedAt: Date.now(),
//             }
//           : chat,
//       ),
//     );

//     setUserText("");

//     //  send full history
//     const updatedMessages = [...activeChat.messages, userMsg];
//     const aiText = await query(updatedMessages);

//     const aiMsg: MessageType = {
//       id: Date.now() + 1,
//       text: aiText,
//       sender: "ai",
//       createdAt: Date.now(),
//     };

//     //   add AI response
//     setChats((prev) =>
//       prev.map((chat) =>
//         chat.id === activeChatID
//           ? { ...chat, messages: [...chat.messages, aiMsg] }
//           : chat,
//       ),
//     );
//   };

//   // formats the time
//   const formatTime = (timestamp?: number) => {
//     if (!timestamp) return "—"; // fallback

//     const date = new Date(timestamp);

//     if (isNaN(date.getTime())) return "—"; // invalid safety

//     const now = new Date();

//     const isToday = date.toDateString() === now.toDateString();

//     if (isToday) {
//       return date.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       });
//     }

//     return date.toLocaleDateString();
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         sidebar,
//         onClickSideBar,
//         userText,
//         setUserText,
//         createNewChat,
//         sendMessage,
//         chats,
//         activeChatID,
//         setActiveChatID,
//         deleteChat,
//         editChatTitle,
//         loading,
//         newChatRef,
//         formatTime,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

import { createContext, useContext, useEffect, useRef, useState } from "react";

type AppContextType = {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  openSideBar: boolean;
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  newChatRef: React.RefObject<HTMLInputElement | null>;
  handleNewChatRef: () => void;
  handleUserInput: () => void;
  chats: NewChatType[];
  activeChatId: number | null;
  loading: boolean;
};

type AppContextProviderType = {
  children: React.ReactNode;
};

type MessageType = {
  id: number;
  text: string;
  sender: "user" | "ai";
  createdAt: number;
};

type NewChatType = {
  id: number;
  title: string;
  messages: MessageType[];
  createdAt: number;
  updatedAt: number;
};

const AppContext = createContext({} as AppContextType);

export function useAppContext() {
  return useContext(AppContext);
}

export const AppContextProvider = ({ children }: AppContextProviderType) => {
  const [userInput, setUserInput] = useState<string>(""); //user input text in chatbox
  // const [aiResponse, setAiResponse] = useState<string>(""); //text from ai response
  const [openSideBar, setOpenSideBar] = useState<boolean>(false); //toggle Sidebar
  const [loading, setLoading] = useState(false); //spinner

  const [chats, setChats] = useState<NewChatType[]>([]);
  const [activeChatId, setActiveChatId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  // console.log("chats:", chats);
  // console.log("activeChatId:", activeChatId);

  //new chat -useRef()
  const newChatRef = useRef<HTMLInputElement | null>(null);
  const handleNewChatRef = () => {
    newChatRef.current?.focus();
    setOpenSideBar(false);
  };

  // create new chat
  const createNewChat = (userMessage: string) => {
    const chatnewID = Date.now();
    //creating chat
    const newChat: NewChatType = {
      id: chatnewID,
      title: userMessage.slice(0, 15),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      messages: [
        {
          id: Date.now(),
          text: userMessage,
          sender: "user",
          createdAt: Date.now(),
        },
      ],
    };

    setChats((prev) => [newChat, ...prev]);
    setActiveChatId(newChat.id);

    return chatnewID;
  };

  // adding ai response
  const addAIMsg = (id: number, aiText: string) => {
    setChats((prev) =>
      prev.map((chat) => {
        if (chat.id !== id) return chat;

        return {
          ...chat,
          updatedAt: Date.now(),
          messages: [
            ...chat.messages,
            {
              id: Date.now(),
              text: aiText,
              sender: "ai",
              createdAt: Date.now(),
            },
          ],
        };
      }),
    );
  };

  // adding user message
  const addUserMsg = (id: number, userText: string) => {
    setChats((prev) =>
      prev.map((chat) => {
        if (chat.id !== id) return chat;

        return {
          ...chat,
          updatedAt: Date.now(),
          messages: [
            ...chat.messages,
            {
              id: Date.now(),
              text: userText,
              sender: "user",
              createdAt: Date.now(),
            },
          ],
        };
      }),
    );
  };

  //user input in chatbox
  const handleUserInput = () => {
    if (!userInput.trim()) return;

    if (!activeChatId) {
      setLoading(true);
      const chatID = createNewChat(userInput);

      setTimeout(() => {
        addAIMsg(chatID, "Hello, I am AI!");
        setLoading(false);
      }, 1000);
    } else {
      addUserMsg(activeChatId, userInput);
      setLoading(true);

      setTimeout(() => {
        addAIMsg(activeChatId, "Another respone from am AI!");
        setLoading(false);
      }, 1000);
    }

    setUserInput("");
  };

  const contextValues = {
    //sidebar
    openSideBar,
    setOpenSideBar,
    //home - chat
    userInput,
    setUserInput,
    //ref in chatbox and sidebar
    newChatRef,
    handleNewChatRef,
    //userinput //convo
    handleUserInput,
    // chats
    chats,
    activeChatId,
    loading,
  };

  return (
    <>
      <AppContext.Provider value={contextValues}>
        {children}
      </AppContext.Provider>
    </>
  );
};
