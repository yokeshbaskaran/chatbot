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
        <div className="flex-1 overflow-y-auto">
          <div className="yoki">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
            </span>
          </div>
          <ChatArea />
        </div>

        {/* Bottom Input */}
        <div className="shrink-0 bg-bg">
          <ChatInput />
        </div>
      </div>
      {/* <div className="h-screen yokiii bg-bg">
      <div className="fixed w-full">
        <TopBar />
      </div>
      <ChatArea />
      <ChatArea /> 
      <ChatInput />
    </div> */}
    </>
  );
};

export default Home;
