
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Import all your pages (Yours and Sagarika's)
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage/SearchPage';
import WindowCleaning from './pages/WindowCleaning/WindowCleaning';

// 2. Import Shared Components
import Header from './Shared/Header/Header';
import Footer from './Shared/footer';

export default function App() {
  return (
    <BrowserRouter>
      
      {/* Header goes at the top of every page */}
      <Header />

      {/* All Routes combined */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/windowcleaning" element={<WindowCleaning />} />
      </Routes>
      
      {/* Footer goes at the bottom of every page */}
      <Footer /> 

    </BrowserRouter>
  );
}