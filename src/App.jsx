import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NoPage from "./NoPage";
import ProjectsExt from "./ProjectsExt";
import AboutmeExt from "./AboutmeExt";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<ProjectsExt />} />
        <Route path="about-me" element={<AboutmeExt />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
