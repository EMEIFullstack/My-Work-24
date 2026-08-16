import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Footer from "./Shared/footer";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
       <Route path='/' element={<Home/>}/>
        <Route
          path="/signup"
          element={<Signup />}
        />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;