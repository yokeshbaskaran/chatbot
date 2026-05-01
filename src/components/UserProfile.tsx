import { TbDots } from "react-icons/tb";
import { LuCircleUser } from "react-icons/lu";
import { useAppContext } from "../context/AppContext";

const UserProfile = () => {
  const { setOpenUserProfile } = useAppContext();
  return (
    <>
      <div className="mt-auto flex items-center gap-2 px-3 py-4 transition-colors border-t-2 border-border rounded">
        <div className="flex items-center gap-2">
          <div className="mx-1">
            <LuCircleUser size={25} color="#00a6f4" />
          </div>

          <div className="flex flex-col">
            <h2 className="text-base text-text font-medium"> Username </h2>
            <span className="text-text-muted text-sm">useremail.com </span>
          </div>
        </div>

        <div
          onClick={() => setOpenUserProfile((prev) => !prev)}
          className="p-2 ml-auto cursor-pointer hover:bg-bg-hover rounded"
        >
          <TbDots size={18} color="#00a6f4" />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
