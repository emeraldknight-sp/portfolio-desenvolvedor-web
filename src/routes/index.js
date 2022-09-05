import { Route, Routes } from "react-router-dom";

import Homepage from "../pages/Home/";
// import Projects from "../pages/Projects/";
// import Tecnologies from "../pages/Tecnologies";
// import About from "../pages/About/";
// import Contact from "../pages/Contact";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/projects" element={<Projects />} />
      <Route path="/tecnologies" element={<Tecnologies />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  )
}

export default Root;