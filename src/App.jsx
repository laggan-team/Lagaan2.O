import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/body";
import Players from "./components/Players";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import About from "./components/About";

const App = () => {
  return (
    <Router basename="/Lagaan2.O/">
      <div className="relative w-full min-h-screen text-white overflow-hidden bg-black">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('ground1.jpg')" }}
        />

        {/* DARK OVERLAY - Classes fixed to remove errors */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

        <div className="relative z-10">
          <Navbar />

          {/* ROUTES - यहाँ से पेज बदलेगा */}
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/players" element={<Players />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
