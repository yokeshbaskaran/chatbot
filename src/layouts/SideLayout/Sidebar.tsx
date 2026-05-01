import { IoMdAdd } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";
// import ChatLists from "./ChatLists";
import UserProfile from "../../components/UserProfile";
import { useAppContext } from "../../context/AppContext";
import ChatLists from "./ChatLists";
import UserOptions from "../../components/UserOptions";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = () => {
  const { setOpenSideBar, handleNewChatRef, openUserProfile, pathToHome } =
    useAppContext();

  return (
    <>
      <section className="w-68 h-screen px-2 py-3 bg-bg border flex flex-col border-border overflow-hidden">
        {/* 1. Top part - logo + New Chat  */}
        <div className="shrink-0">
          {/* Logo */}
          <div className="flex items-start gap-2">
            <div onClick={pathToHome} className="cursor-pointer">
              <img src="/logo.png" alt="app logo" width={28} height={28} />
            </div>

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
          <motion.div
            whileHover={{
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.92,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={handleNewChatRef}
            className="my-4 px-1 py-1 bg-primary text-text hover:opacity-90 rounded flex items-center cursor-pointer"
          >
            <span className="px-1 py-2">
              <IoMdAdd size={20} />
            </span>
            <span className="text-text">New Chat</span>
          </motion.div>

          {/* Divider */}
          <div className="border border-b border-border"></div>
        </div>

        {/* 2. Chat Lists */}
        <div className="flex-1 overflow-y-auto">
          <ChatLists />
        </div>

        {/* 3. User profile  */}
        <div className="shrink-0">
          <AnimatePresence>
            {openUserProfile && <UserOptions />}
          </AnimatePresence>

          <UserProfile />
        </div>
      </section>
    </>
  );
};

export default Sidebar;
