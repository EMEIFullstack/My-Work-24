import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home/Home";
// import Header from "./Shared/Header/Header";
// import './Global.scss'
// import NewsDetails from "./pages/NewsDetails/NewsDetails";
// import News from "./pages/News/News";
import { Box } from "@mui/material";
// import Footer from "./Shared/Footer/footer";

function App() {
  return (
    <Box>

      <Router>
        {/* <Header/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/news' element={<News/>}/>
          <Route path='/details' element={<NewsDetails/>}/> */}
        </Routes>
        {/* <Footer/> */}
      </Router>
    </Box>
  )
}

export default App;