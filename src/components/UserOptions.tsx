import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

const UserOptions = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 15,
        scale: 0.95,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="z-20 w-64 border rounded-xl border-border absolute bottom-21 left-2 shadow-lg bg-bg overflow-hidden"
    >
      <div className="flex flex-col gap-1">
        <div className="p-2 flex items-center gap-2 cursor-pointer hover:opacity-75">
          <FiUser size={20} color="#00a6f4" />
          <h2 className="text-text capitalize">my account</h2>
        </div>

        <div className="border border-border"></div>

        <div className="p-2 flex items-center gap-2 cursor-pointer hover:opacity-75">
          <IoSettingsOutline size={20} color="#00a6f4" />
          <h2 className="text-text capitalize">settings</h2>
        </div>

        <div className="border border-border"></div>

        <div className="p-2 flex items-center gap-2 cursor-pointer hover:opacity-75">
          <MdLogout size={20} color="#00a6f4" />
          <h2 className="text-text capitalize">logout</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default UserOptions;
