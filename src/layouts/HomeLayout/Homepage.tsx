import TopBar from "./TopBar";
import ChatArea from "./ChatArea";
import ChatInput from "./ChatInput";

const Home = () => {
  return (
    <>
      <div className="h-screen bg-bg flex flex-col overflow-hidden">
        {/* Topbar */}
        <div className="border-b border-border shrink-0">
          <TopBar />
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto shadow-primary shadow-xl">
          <ChatArea />
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
