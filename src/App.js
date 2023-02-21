
import './App.css';
import './css/header.css'

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
