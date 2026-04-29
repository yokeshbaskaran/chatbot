import Sidebar from "./SideLayout/Sidebar";
import Homepage from "./HomeLayout/Homepage";

const MainLayout = () => {
  return (
    <div className="yokiii flex h-screen">
      <div className={`w-64 hidden md:flex flex-col`}>
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Homepage />
      </div>
    </div>
  );
};

export default MainLayout;
