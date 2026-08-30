import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home/Home";
// import './Global.scss';
import { Box } from "@mui/material";
import News from "./pages/News/News";
import NewsDetails from "./pages/NewsDetails/NewsDetails";
// import SearchResults from "./Components/SearchResults/SearchResults";
// import SearchPage from "./pages/SearchPage/SearchPage";


export default function App() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/details" element={<NewsDetails/>}/>
          {/* <Route path="/search" element={<SearchResults/>}/> */}
        </Routes>
      </Router>
    </Box>
  )
}

//     </BrowserRouter>
//   );
// }