import { useState } from "react";
import Chat from "../../components/Chat";
import { useAppContext } from "../../context/AppContext";
import DeletePopup from "../../components/DeleteChat";
import { useNavigate } from "react-router-dom";

const ChatLists = () => {
  const { chats, setChats, pathToHome } = useAppContext();

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const navigate = useNavigate();
  const handleChatNavigate = (id: number) => {
    navigate(`/chat/${id}`);
  };

  const editChatTitle = (id: number, newTitle: string) => {
    setChats((prev) =>
      prev.map((chat) => {
        if (chat.id === id) {
          return {
            ...chat,
            title: newTitle,
          };
        }

        return chat;
      }),
    );
  };

  const deleteChat = (id: number) => {
    setChats((prev) => prev.filter((chat) => chat.id !== id));

    pathToHome();
  };

  return (
    <div className="flex flex-col gap-1 py-2">
      {chats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => handleChatNavigate(chat.id)}
          className={`my-1 flex-1 overflow-y-auto space-y-2 cursor-pointer  
          }`}
        >
          <Chat
            id={chat.id}
            title={chat.title}
            updatedAt={chat.updatedAt}
            onDelete={(id) => setDeleteId(id)}
            onEdit={editChatTitle}
          />
        </div>
      ))}

      {deleteId && (
        <DeletePopup
          title={chats.find((c) => c.id === deleteId)?.title || ""}
          onCancel={() => setDeleteId(null)}
          onConfirm={() => {
            deleteChat(deleteId);
            setDeleteId(null);
          }}
        />
      )}
    </div>
  );
};

export default ChatLists;
