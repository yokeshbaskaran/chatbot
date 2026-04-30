import { FaRegUser } from "react-icons/fa6";

const UserMessage = () => {
  return (
    <>
      <div className="px-3 py-3 flex items-start gap-2 bg-bg">
        <div className="p-2 bg-primary-light rounded">
          <FaRegUser size={15} color="#00a6f4" />
        </div>

        <div className="px-2 flex flex-col items-start gap-3">
          <div className="flex items-center gap-4">
            <h2 className="text-primary-hover font-bold text-base">You</h2>
            <span className="text-text-muted">11:00 PM</span>
          </div>
          <p className="text-text">
            Lorem ipsum dolor sit amet consectetur adipisicing sapiente iure
            officiis nisi, ut voluptas harum ullam fuga dolorem amet eius.
          </p>
        </div>
      </div>
    </>
  );
};

export default UserMessage;
