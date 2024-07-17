import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/header.css";
import "./styles/index.css";
import { AppProvider } from "./contexts/app-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
