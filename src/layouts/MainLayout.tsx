import Sidebar from "./SideLayout/Sidebar";
import Homepage from "./HomeLayout/Homepage";
import { useAppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const MainLayout = () => {
  const { openSideBar, setOpenSideBar } = useAppContext();

  return (
    <div className="flex h-screen">
      <div
        className={`fixed md:relative z-100 ${openSideBar ? "md:w-68 md:flex md:flex-col" : "hidden"}`}
      >
        <Sidebar />
      </div>

      {openSideBar && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed z-40 inset-0 bg-black/30 md:hidden"
            onClick={() => setOpenSideBar(false)}
          />
        </>
      )}

      <div className="flex-1 flex flex-col">
        <Homepage />
      </div>
    </div>
  );
};

export default MainLayout;
