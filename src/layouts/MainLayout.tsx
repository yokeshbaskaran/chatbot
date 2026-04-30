import Sidebar from "./SideLayout/Sidebar";
import Homepage from "./HomeLayout/Homepage";
import { useAppContext } from "../context/AppContext";

const MainLayout = () => {
  const { openSideBar, setOpenSideBar } = useAppContext();

  return (
    <div className="flex h-screen">
      <div
        className={`z-50 ${openSideBar ? "md:w-68 md:flex md:flex-col" : "hidden"}`}
      >
        <Sidebar />
      </div>

      {openSideBar && (
        <>
          <div
            className="fixed inset-0 bg-black/30 md:hidden"
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
