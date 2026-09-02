import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/public/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <div className="eventcrew-app">

        <Navbar />

        <main className="eventcrew-main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;