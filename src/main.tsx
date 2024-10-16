import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Header from "./components/Header.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <App />
  </BrowserRouter>,
);
