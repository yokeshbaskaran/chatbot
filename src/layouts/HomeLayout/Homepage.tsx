import TopBar from "./TopBar";
import ChatInput from "./ChatInput";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-screen bg-bg flex flex-col overflow-hidden">
        {/* 1. Top - Navbar */}
        <div className="border-b border-border shrink-0">
          <TopBar />
        </div>

        {/* 2. Middle - Chat Area */}
        <div className="flex-1 overflow-y-auto">
          {/* {chats?.length > 0 ? <ChatMessage /> : <ChatArea />} */}
          <Outlet />
        </div>

        {/* 3. Bottom - Chat Input */}
        <div className="shrink-0 bg-bg">
          <ChatInput />
        </div>
      </div>
    </>
  );
};

export default Home;
