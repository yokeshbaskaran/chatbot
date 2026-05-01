import { RiMenuUnfold3Line, RiMenuUnfold4Line } from "react-icons/ri";

import { useAppContext } from "../../context/AppContext";

import DarkMode from "../../utils/DarkMode";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { openSideBar, setOpenSideBar, pathToHome } = useAppContext();

  //toggling sidebar
  const handleSidebarToggle = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <>
      <div className="h-14 px-3 py-5 border-b border-border flex items-center bg-bg">
        {/* Sidebar Menu */}
        <div
          onClick={handleSidebarToggle}
          className="px-2 py-2 cursor-pointer hover:bg-bg-hover text-text transition-colors"
        >
          {openSideBar ? (
            <RiMenuUnfold4Line size={20} />
          ) : (
            <RiMenuUnfold3Line size={20} />
          )}
        </div>

        {/* Logo in topbar  */}
        <div
          onClick={pathToHome}
          className="flex  gap-2 ml-2 px-2 py-1 cursor-pointer rounded hover:bg-bg-hover transition-colors"
        >
          <h2 className="text-xl text-text font-semibold flex items-center gap-0">
            Chat <span className="text-blue-400 font-bold">AI</span>
          </h2>
        </div>

        {/* Dark mode toggle  */}
        <div className="ml-auto">
          <DarkMode />
        </div>
      </div>
    </>
  );
};

export default Navbar;
