import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Learning from './pages/Learning';
import Community from './pages/Community';
import Contacts from './pages/Contacts';
import Header from './component/Header/Header';
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/learning" element={<Learning />} />
  <Route path="/community" element={<Community />} />
  <Route path="/contacts" element={<Contacts />} />
</Routes>

    </>
  );
};

export default App;
