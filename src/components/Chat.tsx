import { useEffect, useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FormatTime } from "../utils/FormatDate";

type ChatProps = {
  id: number;
  title: string;
  updatedAt: number;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
};

const Chat = ({ id, title, updatedAt, onDelete, onEdit }: ChatProps) => {
  const [chatText, setChatText] = useState(title);
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEdit) {
      inputRef.current?.focus();
    }
  }, [isEdit]);

  const handleChatEdit = () => {
    setIsEdit(true);
  };

  const handleBlur = () => {
    setIsEdit(false);
    onEdit(id, chatText);
  };

  const handleChatDelete = () => {
    onDelete(id);
  };

  return (
    <>
      <div className="group flex justify-between items-start px-2 py-3 rounded-lg bg-bg-soft hover:bg-bg-hover cursor-pointer">
        <div className="flex flex-col items-start text-text">
          {isEdit ? (
            <input
              type="text"
              className="w-8/12 px-1 outline-primary"
              ref={inputRef}
              onBlur={handleBlur}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleBlur();
              }}
              value={chatText}
              onChange={(e) => setChatText(e.target.value)}
            />
          ) : (
            <p>
              {chatText.length > 10 ? chatText.slice(0, 15) + "..." : chatText}
            </p>
          )}

          <span className="px-0 text-sm text-text-muted">
            {FormatTime(updatedAt)}
          </span>
        </div>

        <div className="group-hover:flex hidden items-center gap-3">
          <button onClick={handleChatEdit} className="cursor-pointer">
            <FaRegEdit size={20} color="green" />
          </button>

          <button onClick={handleChatDelete} className="cursor-pointer">
            <RiDeleteBinLine size={20} color="red" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
