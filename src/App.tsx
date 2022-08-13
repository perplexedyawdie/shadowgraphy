import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SilhouetteCinema from './Components/SilhouetteCinema';
import Tricks from './Components/Tricks';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="tricks" element={<Tricks />} />
        <Route path="cinema" element={<SilhouetteCinema />} />
      </Routes>
    </>
  );
}

export default App;
