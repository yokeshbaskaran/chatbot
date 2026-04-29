import { MdOutlineAttachFile } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { useAppContext } from "../../context/AppContext";

const ChatInput = () => {
  const {
    userText,
    setUserText,
    sendMessage,
    createNewChat,
    loading,
    activeChatID,
    newChatRef,
  } = useAppContext();

  const handleSendmsg = () => {
    if (!userText.trim()) return alert("Ask anything to chat!");

    //  AUTO CREATE CHAT (IMPORTANT)
    if (!activeChatID) {
      createNewChat();
      setTimeout(() => sendMessage(userText), 100);
    } else {
      sendMessage(userText);
      setUserText("");
    }
  };

  return (
    <div className="px-5 flex flex-col items-center">
      <div
        className={`w-[85%] px-2 py-2 border  ${userText ? "border-[#29AF33] shadow-md" : "border-[#9D9E9E]"} rounded-lg`}
      >
        <div className="flex items-center">
          <span>
            <MdOutlineAttachFile size={20} />
          </span>

          <div className="w-full px-2 text-[#8C8D8E]">
            <input
              type="text"
              ref={newChatRef}
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
              placeholder="Chat with me!"
              className="w-full px-2 outline-0 text-black"
            />
          </div>

          <button
            onClick={handleSendmsg}
            disabled={loading}
            className={`ml-auto p-2 ${userText ? "bg-[#29AF33]" : "bg-[#E5E7EB]"} rounded`}
          >
            <LuSend color={userText ? "white" : "#8C8D8E"} size={18} />
          </button>
        </div>
        <p className="pt-2 text-[#8C8D8E]">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>

      {/* Disclaimer  */}
      <span className="my-2 text-sm">
        AI can make mistakes. Consider checking important information.
      </span>
    </div>
  );
};

export default ChatInput;
