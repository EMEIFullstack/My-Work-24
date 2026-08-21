import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home/Home";

import { Box } from "@mui/material";
import Footer from "./Shared/Footer/footer";
import Header from "./Shared/Header/Header";
import News from "./pages/News/News";
import NewsDetails from "./pages/NewsDetails/NewsDetails";
// import SearchResults from "./Components/SearchResults/SearchResults";
// import SearchPage from "./pages/SearchPage/SearchPage";


export default function App() {
  return (
    <Box>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/details" element={<NewsDetails/>}/>
          {/* <Route path="/search" element={<SearchResults/>}/> */}
        </Routes>
        <Footer/>
      </Router>
    </Box>
  )
}

//     </BrowserRouter>
//   );
// }