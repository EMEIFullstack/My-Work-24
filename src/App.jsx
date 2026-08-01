
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Footer from "./Shared/footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;