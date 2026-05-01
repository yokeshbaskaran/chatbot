import UserMessage from "../../components/UserMessage";
import AiMessage from "../../components/AiMessage";
import { useAppContext } from "../../context/AppContext";
import { UserTyping } from "../../utils/Loader";
import { useParams } from "react-router-dom";

const ChatMessage = () => {
  const { chats, loading } = useAppContext();

  const { chatId } = useParams();
  // console.log("chatid from usePARAMS:", chatID);

  const activeChat = chats.find((chat) => chat.id === Number(chatId));

  return (
    <>
      <div className="mb-5">
        {activeChat?.messages.map((message) =>
          message.sender === "user" ? (
            <UserMessage
              key={message.id}
              text={message.text}
              time={message.createdAt}
            />
          ) : (
            <AiMessage
              key={message.id}
              text={message.text}
              time={message.createdAt}
            />
          ),
        )}
        {loading ? <LoadingAIResponse /> : ""}
      </div>
    </>
  );
};

export default ChatMessage;

export const LoadingAIResponse = () => {
  return (
    <div>
      <div className="px-3 py-3 flex items-start gap-2 bg-bg-hover">
        <div className="p-2 bg-bg rounded">
          <img src="/logo.png" alt="app-logo" width={17} />
        </div>

        <div className="px-2 flex flex-col items-start gap-3">
          <div className="flex items-center gap-4">
            <h2 className="text-text font-semibold text-base">AI Model</h2>
            <span className="text-text-muted"></span>
          </div>
          <div className="my-2">
            <UserTyping />
          </div>
        </div>
      </div>
    </div>
  );
};
