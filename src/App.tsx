import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import ProjectPage from "./pages/Project";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/project-page/:id" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;