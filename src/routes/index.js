import { Route, Routes } from "react-router-dom";

import About from "../pages/About/";
import Contact from "../pages/Contact";
import Homepage from "../pages/Home/";
import Projects from "../pages/Projects/";

const Root = () => {
  return (
    <Routes>
      <Route path="/me" element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Root;