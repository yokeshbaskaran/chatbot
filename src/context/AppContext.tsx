import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateAIResponse, type AIMsgType } from "../utils/AiRespone";

type AppContextType = {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  openSideBar: boolean;
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  newChatRef: React.RefObject<HTMLInputElement | null>;
  handleNewChatRef: () => void;
  handleUserInput: (id?: number) => Promise<void>;
  chats: NewChatType[];
  loading: boolean;
  pathToHome: () => void;
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

  const [openSideBar, setOpenSideBar] = useState<boolean>(false); //toggle Sidebar
  const [loading, setLoading] = useState(false); //spinner in ai respone typing(generating)

  // store all chats conservation and fetch from localstorage also.
  const [chats, setChats] = useState<NewChatType[]>(() => {
    const savedChats = localStorage.getItem("chats");
    return savedChats ? JSON.parse(savedChats) : [];
  });

  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  const navigate = useNavigate();
  // route to Homepage for new chat
  const pathToHome = () => {
    navigate("/");
  };

  //new chat -useRef()
  const newChatRef = useRef<HTMLInputElement | null>(null);
  const handleNewChatRef = () => {
    newChatRef.current?.focus();
    setOpenSideBar(false);
    pathToHome();
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
  const handleUserInput = async (chatsID?: number) => {
    if (!userInput.trim()) return;

    //swap values
    const currentUserInput = userInput;
    setUserInput("");

    try {
      setLoading(true);

      //Create new chat if not already has chat.
      if (!chatsID) {
        const chatID = createNewChat(currentUserInput);

        const response = await generateAIResponse([
          { role: "user", content: currentUserInput },
        ]);

        addAIMsg(chatID, response);
        navigate(`/chat/${chatID}`);
      }
      //Exisiting chat
      else {
        //add latest user msgs
        addUserMsg(chatsID, currentUserInput);

        const currentChat = chats.find((chat) => chat.id === chatsID);

        const formattedMsg: AIMsgType[] =
          currentChat?.messages.map((msg) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.text,
          })) || [];

        // adding latest msg
        formattedMsg.push({
          role: "user",
          content: currentUserInput,
        });

        const response = await generateAIResponse(formattedMsg);

        addAIMsg(chatsID, response);
      }
    } catch (error) {
      console.log("Error in handleUserInput", error);
    } finally {
      setLoading(false);
    }
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
    //spinner
    loading,
    pathToHome,
  };

  return (
    <>
      <AppContext.Provider value={contextValues}>
        {children}
      </AppContext.Provider>
    </>
  );
};
