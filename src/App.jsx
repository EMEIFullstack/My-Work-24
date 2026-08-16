import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./Shared/Header/Header";
import WindowCleaning from "./Pages/WindowCleaning/WindowCleaning";
import ServicesSection from "./pages/ServicesSection";
import Footer from "./Shared/footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={
            <>
              <Home />
              <ServicesSection />
            </>
          } />
          <Route path='/windowcleaning' element={<WindowCleaning />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;