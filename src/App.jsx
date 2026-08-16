import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup/Signup";
import Footer from "./Shared/footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>

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