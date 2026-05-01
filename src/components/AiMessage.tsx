import { FormatTime } from "../utils/FormatDate";
import { VscRobot } from "react-icons/vsc";
import ReactMarkdown from "react-markdown";
type AIMessageType = {
  text: string;
  time: number;
};

const AiMessage = ({ text, time }: AIMessageType) => {
  return (
    <>
      <div className="px-3 py-3 flex items-start gap-2 bg-bg-hover">
        <div className="p-2 bg-bg rounded">
          <VscRobot size={15} color="#6b7280" />
        </div>

        <div className="px-2 flex flex-col items-start gap-3">
          <div className="flex items-center gap-4">
            <h2 className="text-primary-hover font-bold text-base">AI Model</h2>
            <span className="text-text-muted">{FormatTime(time)}</span>
          </div>
          {/* <p className="text-text whitespace-pre-wrap wrap-break-word">
            {text}
          </p> */}
          <div className="prose prose-invert max-w-none text-text wrap-break-word">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiMessage;
