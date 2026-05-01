import { TbDots } from "react-icons/tb";

const UserProfile = () => {
  return (
    <>
      <div className="mt-auto flex items-center gap-2 px-3 py-5 transition-colors  hover:bg-gray-100 cursor-pointer rounded">
        <div className="flex items-center gap-2">
          <img src="/icon.png" alt="logo" className="size-8 mx-1" />

          <div className="flex flex-col">
            <h2 className="text-base font-medium"> Username </h2>
            <span className="text-[#747474] text-sm">useremail.com </span>
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
