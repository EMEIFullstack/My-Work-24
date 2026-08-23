import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./Shared/Header/Header";
import ServicesSection from "./pages/ServicesSection";
import Footer from "./Shared/footer";
import WindowCleaning from "./pages/WindowCleaning/WindowCleaning";
import Signup from "./pages/Signup/Signup";
import Subscription from "./pages/Subscription/Subscription";

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
          <Route path="/subscription" element={<Subscription />} />
          <Route
            path="/signup"
            element={<Signup />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>

  )
}
  export default App;
