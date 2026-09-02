import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventCrewNavbar from "./components/common/Navbar";
import Home from "./pages/public/Home";
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <EventCrewNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App