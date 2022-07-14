import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout/index.js'
import Sidebar from '../Components/Sidebar';
import HeroSection from '../Components/Hero';
import NavBar from '../Components/Navbar';



function App() {
  return (
    <div>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<Layout/>} />
      <Route index element={<HeroSection/>}/>
    </Routes>
    <Sidebar></Sidebar>
    </div>
    
  );
}

export default App;
