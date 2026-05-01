import { MdOutlineAttachFile } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { useAppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";

const ChatInput = () => {
  const { userInput, setUserInput, newChatRef, handleUserInput, loading } =
    useAppContext();

  const { chatId } = useParams();
  // console.log("chatID from useParams:", chatId);

  return (
    <div className="px-5 flex flex-col items-center">
      <div
        className={`max-md:w-[90%] w-150 mx-auto px-2 py-2 border bg-bg-hover  shadow-md ${userInput ? "border-primary" : "border-border-strong"} rounded-4xl`}
      >
        <div className="px-2 flex items-center">
          <span>
            <MdOutlineAttachFile size={20} color="#00a6f4" />
          </span>

          <div className="w-full px-2 text-[#8C8D8E]">
            <input
              ref={newChatRef}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              type="text"
              placeholder="Chat with me!"
              className="w-full px-2 outline-0 text-text outline-none"
            />
          </div>

          <button
            disabled={loading}
            onClick={() => handleUserInput(Number(chatId))}
            className={`ml-auto p-2 ${userInput ? "text-white bg-primary" : "text-text-muted bg-bg opacity-50"} rounded cursor-pointer`}
          >
            <LuSend size={18} />
          </button>
        </div>
      </div>

      {/* Disclaimer  */}
      <span className="mt-4 my-2 text-text-muted text-center text-sm">
        AI can make mistakes. Consider checking important information.
      </span>
    </div>
  );
};

export default ChatInput;
