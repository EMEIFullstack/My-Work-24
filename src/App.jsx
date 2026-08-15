// import React from 'react';
// import Home from './pages/Home/Home';
// import { Box } from '@mui/material';

// function App() {
//   return (
//     <Box>
//       <Home/>
//     </Box>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home/Home'; 
import SearchPage from './pages/SearchPage/SearchPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* This is your default Home page (localhost:5174/) */}
        <Route path="/" element={<Home />} />

        {/* This is your new Search page (localhost:5174/search) */}
        <Route path="/search" element={<SearchPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;