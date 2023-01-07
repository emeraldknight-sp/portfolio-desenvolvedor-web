import { Route, Routes } from "react-router-dom";

import { Homepage } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Tools } from "../pages/Tools";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
