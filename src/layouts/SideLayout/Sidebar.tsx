import { IoMdAdd } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";
// import ChatLists from "./ChatLists";
import UserProfile from "../../components/UserProfile";
import { useAppContext } from "../../context/AppContext";

const Sidebar = () => {
  const { setOpenSideBar } = useAppContext();

  return (
    <>
      <section className="fixed top-0 left-0 h-screen w-68 bg-bg border flex flex-col border-border">
        <div className="w-full px-2 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="cursor-pointer">
              <img src="./logo.png" alt="app logo" width={28} height={28} />
            </span>

            <div className="w-full text-text flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                Chat<span className="text-blue-400">AI</span>{" "}
                <span className="font-normal text-base hidden md:inline">
                  - Your Chat Buddy
                </span>
              </h2>

              {/* Sidebar close before "md" */}
              <div className="md:hidden" onClick={() => setOpenSideBar(false)}>
                <RiCloseLargeLine size={18} />
              </div>
            </div>
          </div>

          {/* New Chat */}
          <div className="my-4 px-1 py-1 bg-primary text-text hover:opacity-90 rounded flex items-center cursor-pointer">
            <span className="px-1 py-2">
              <IoMdAdd size={20} />
            </span>
            <span>New Chat</span>
          </div>

          {/* Divider */}
          <div className="border border-b border-border"></div>

          {/* Chat Lists */}
          {/* <ChatLists /> */}
        </div>

        {/* Divider */}

        {/* USER profile  */}
        <UserProfile />
      </section>
    </>
  );
};

export default Sidebar;
