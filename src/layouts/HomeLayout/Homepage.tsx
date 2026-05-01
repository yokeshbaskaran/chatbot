import TopBar from "./TopBar";
import ChatInput from "./ChatInput";
import { Outlet } from "react-router-dom";

const Home = () => {
  // const { chats } = useAppContext();

  return (
    <>
      <div className="h-screen bg-bg flex flex-col overflow-hidden">
        {/* Topbar */}
        <div className="border-b border-border shrink-0">
          <TopBar />
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto">
          {/* {chats?.length > 0 ? <ChatMessage /> : <ChatArea />} */}
          <Outlet />
        </div>

        {/* Bottom Input */}
        <div className="shrink-0 bg-bg">
          <ChatInput />
        </div>
      </div>
    </>
  );
};

export default Home;
