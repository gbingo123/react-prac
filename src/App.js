import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Review from "./routes/Review";
import About from "./About/Home";

import {Route, Routes} from "react-router-dom";
function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Review" element={<Review />} />
    <Route path="/About" element={<About/>} />
   </Routes>
   </>
  );
}

export default App;
