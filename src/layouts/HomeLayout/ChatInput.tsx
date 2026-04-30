import { MdOutlineAttachFile } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { useState } from "react";

const ChatInput = () => {
  const [userChatInput, setUserChatInput] = useState<string>("");

  const handleSubmit = () => {
    if (!userChatInput.trim()) {
      return;
    }
    console.log("input", userChatInput);
    setUserChatInput("");
  };

  return (
    <div className="px-5 flex flex-col items-center">
      <div
        className={`md:w-[60%] mx-auto px-2 py-2 border bg-bg-hover ${userChatInput ? "border-primary shadow-2xl" : "border-[#9D9E9E]"} rounded-4xl`}
      >
        <div className="px-2 flex items-center">
          <span>
            <MdOutlineAttachFile size={20} color="white" />
          </span>

          <div className="w-full px-2 text-[#8C8D8E]">
            <input
              value={userChatInput}
              onChange={(e) => setUserChatInput(e.target.value)}
              type="text"
              placeholder="Chat with me!"
              className="w-full px-2 outline-0 text-text outline-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            className={`ml-auto p-2 ${userChatInput ? "text-white bg-primary" : "text-text-muted bg-bg opacity-50"} rounded cursor-pointer`}
          >
            <LuSend size={18} />
          </button>
        </div>
      </div>

      {/* Disclaimer  */}
      <span className="my-2 text-text-muted text-sm">
        AI can make mistakes. Consider checking important information.
      </span>
    </div>
  );
};

export default ChatInput;
