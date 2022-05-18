import { Route, Routes } from "react-router-dom";

import Contact from "../pages/Contact";
import Homepage from "../pages/Homepage";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

const AppRoutes = () => {

  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRoutes;