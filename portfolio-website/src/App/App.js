import "./App.css";
import React from "react";
import { Route, Routes} from "react-router-dom";
// import HeroSection from "../Components/Hero";
import AboutMe from "../Pages/About me.js";
import About from '../Components/About/index'
import Home from '../Pages/Home.js'

function App() {
  return (
    <div className="App-container">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        {/* <Route path="/skills" element={<Skills/>}/> */}
        {/* <Route path="/contact" element={<Contact/>}/ */}
      </Routes>
    </div>
  );
}

export default App;
