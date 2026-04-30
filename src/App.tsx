import "./App.css";
import { AppContextProvider } from "./context/AppContext.tsx";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <div>
      <AppContextProvider>
        <MainLayout />
      </AppContextProvider>
    </div>
  );
};

export default App;
