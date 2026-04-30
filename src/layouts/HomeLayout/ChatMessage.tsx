import UserMessage from "../../components/UserMessage";
import AiMessage from "../../components/AiMessage";
import { useAppContext } from "../../context/AppContext";

const ChatMessage = () => {
  const { chats, activeChatId } = useAppContext();

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  return (
    <div>
      {activeChat?.messages.map((message) =>
        message.sender === "user" ? (
          <UserMessage key={message.id} text={message.text} />
        ) : (
          <AiMessage key={message.id} text={message.text} />
        ),
      )}
    </div>
  );
};

export default ChatMessage;
