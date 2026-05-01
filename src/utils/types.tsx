// AppContext 

export type AppContextType = {
    userInput: string;
    setUserInput: React.Dispatch<React.SetStateAction<string>>;
    openSideBar: boolean;
    setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
    newChatRef: React.RefObject<HTMLInputElement | null>;
    handleNewChatRef: () => void;
    handleUserInput: (id?: number) => Promise<void>;

    chats: NewChatType[];
    setChats: React.Dispatch<React.SetStateAction<NewChatType[]>>;
    loading: boolean;
    pathToHome: () => void;
    openUserProfile: boolean;
    setOpenUserProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AppContextProviderType = {
    children: React.ReactNode;
};

export type MessageType = {
    id: number;
    text: string;
    sender: "user" | "ai";
    createdAt: number;
};

export type NewChatType = {
    id: number;
    title: string;
    messages: MessageType[];
    createdAt: number;
    updatedAt: number;
};