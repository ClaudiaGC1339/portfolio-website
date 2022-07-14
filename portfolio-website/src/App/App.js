import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout/index.js'
import Sidebar from '../Components/Sidebar';
import HeroSection from '../Components/Hero';



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Layout/>} />
    </Routes>
    <Sidebar></Sidebar>
    <HeroSection></HeroSection>
    </div>
    
  );
}

export default App;
