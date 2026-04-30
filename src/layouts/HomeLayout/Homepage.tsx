import TopBar from "./TopBar";
import ChatArea from "./ChatArea";
import ChatInput from "./ChatInput";
import { useAppContext } from "../../context/AppContext";
import ChatMessage from "./ChatMessage";

const Home = () => {
  const { chats } = useAppContext();

  return (
    <>
      <div className="h-screen bg-bg flex flex-col overflow-hidden">
        {/* Topbar */}
        <div className="border-b border-border shrink-0">
          <TopBar />
        </div>

        {/* Chat Area */}
        <div className="flex-1 max-md:w-[95%] max-md:mx-auto overflow-y-auto">
          {chats?.length > 0 ? <ChatMessage /> : <ChatArea />}
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
