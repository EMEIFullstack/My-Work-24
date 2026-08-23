import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./Shared/Header/Header";
import ServicesSection from "./pages/ServicesSection";
import Footer from "./Shared/footer";
import WindowCleaning from "./pages/WindowCleaning/WindowCleaning";
import Signup from "./pages/Signup/Signup";
import Subscription from "./pages/Subscription/Subscription";

import HowItWork from "./pages/HowItWork/HowItWork"
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact"
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
             
              <HowItWork/>
              
            </>
          } />
          <Route path='/windowcleaning' element={<WindowCleaning />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route
            path="/signup"
            element={<Signup />}
          />
                <Route path='/aboutus' element={<About />} />

                 <Route path='/contactus' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>

  )
}
  export default App;

  