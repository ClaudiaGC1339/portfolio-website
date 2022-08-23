import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Components/About";
import Home from "../Pages/Home.js";
import Portfolio from "../Components/Portfolio";
import Skills from "../Components/Skills";
import NavBar from "../Components/Navbar";

function App() {
  return (
    <div className="App-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
