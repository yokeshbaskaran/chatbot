import { TbDots } from "react-icons/tb";
import { LuCircleUser } from "react-icons/lu";

const UserProfile = () => {
  return (
    <>
      <div className="mt-auto flex items-center gap-2 px-3 py-5 transition-colors  hover:bg-bg-hover cursor-pointer rounded">
        <div className="flex items-center gap-2">
          <div className="mx-1">
            <LuCircleUser size={25} color="#00a6f4" />
          </div>

          <div className="flex flex-col">
            <h2 className="text-base text-text font-medium"> Username </h2>
            <span className="text-text-muted text-sm">useremail.com </span>
          </div>
        </div>

        <div className="ml-auto">
          <TbDots size={18} />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
