import { useAppContext } from "../context/AppContext";

const AiMessage = ({ text }: { text: string }) => {
  // const { loading } = useAppContext();

  return (
    <>
      <div className="px-3 py-3 flex items-start gap-2 bg-bg-hover">
        <div className="p-2 bg-bg rounded">
          <img src="./logo.png" alt="app-logo" width={17} />
        </div>

        <div className="px-2 flex flex-col items-start gap-3">
          <div className="flex items-center gap-4">
            <h2 className="text-text font-bold text-base">AI Model</h2>
            <span className="text-text-muted">11:00 PM</span>
          </div>
          <p className="text-text">{text}</p>
        </div>
      </div>
    </>
  );
};

export default AiMessage;
