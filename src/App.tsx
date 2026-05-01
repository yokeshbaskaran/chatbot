import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import ChatArea from "./layouts/HomeLayout/ChatArea";
import ChatMessage from "./layouts/HomeLayout/ChatMessage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ChatArea />} />
          <Route path="/chat/:chatId" element={<ChatMessage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
