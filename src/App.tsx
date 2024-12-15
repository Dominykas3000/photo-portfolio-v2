import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import ProjectPage from "./pages/Project";
import About from "./pages/About";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/project-page/:id" element={<ProjectPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
