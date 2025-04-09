import "./App.css";
import TaskPage from "./pages/TaskPage";
import { store } from "./store";
import { Provider } from "react-redux";
import { toggleDarkMode } from "./utils/toggleDarkMode";
import ThemeProvider, { useTheme } from "./context/ThemeProvider";
import NavBar from "./components/NavBar";

function App() {
  
  return (
    <Provider store={store}>
      <ThemeProvider>
       
        <TaskPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
