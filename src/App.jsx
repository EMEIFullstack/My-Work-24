import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage/SearchPage';

// Import Sayan's Footer
import Footer from './Shared/footer';

export default function App() {
  return (
    <BrowserRouter>
      
      {/* 1. Your Pages */}
      <Routes>
        {/* Default Home page */}
        <Route path="/" element={<Home />} />
        
        {/* Search Results page */}
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      
      {/* 2. Sayan's Footer (Placed OUTSIDE Routes so it shows on every page!) */}
      <Footer /> 

    </BrowserRouter>
  );
}