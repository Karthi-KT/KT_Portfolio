
import ReactDOM from "react-dom/client"; // Ensure correct import
import App from "./App.jsx"; // Ensure the correct path and extension
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../theme.jsx"; 

const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
