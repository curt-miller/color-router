import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Red from "./components/Red";
import Orange from "./components/Orange";
import Yellow from "./components/Yellow";
import Green from "./components/Green";
import Blue from "./components/Blue";
import Indigo from "./components/Indigo";
import Violet from "./components/Violet";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const routeColors = {
    "/": "#262628",
    "/red": "#dc1616",
    "/orange": "#dd7213",
    "/yellow": "#e5e90b",
    "/green": "#08a916",
    "/blue": "#1055c4",
    "/indigo": "#5a3a92",
    "/violet": "#ca27ca",
  };
  
  const currentColor = routeColors[location.pathname] || "black";

  return (
    <>
      <div id="container">
        {/* color go here */}
        <h1 className="title" style={{ color: currentColor }}>
          Look, I used React Router.
        </h1>
        <div id="navbar">
          <Link className="links" to="/" style={{ verticalAlign: "baseline" }}>🏠</Link>
          <Link className="links" to="/red">RED</Link>
          <Link className="links" to="/orange">ORANGE</Link>
          <Link className="links" to="/yellow">YELLOW</Link>
          <Link className="links" to="/green">GREEN</Link>
          <Link className="links" to="/blue">BLUE</Link>
          <Link className="links" to="/indigo">INDIGO</Link>
          <Link className="links" to="/violet">VIOLET</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/red" element={<Red/>} />
            <Route path="/orange" element={<Orange/>} />
            <Route path="/yellow" element={<Yellow/>} />
            <Route path="/green" element={<Green/>} />
            <Route path="/blue" element={<Blue/>} />
            <Route path="/indigo" element={<Indigo/>} />
            <Route path="/violet" element={<Violet/>} />
          </Routes>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
