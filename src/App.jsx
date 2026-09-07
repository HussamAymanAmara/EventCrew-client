import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/public/Home";
import BrowseOpportunities from "./pages/public/BrowseOpportunities";
import OpportunityDetails from "./pages/public/OpportunityDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="eventcrew-app">

        <Navbar />

        <main className="eventcrew-main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/opportunities"
              element={<BrowseOpportunities />}
            />
            <Route
              path="/opportunities/:id"
              element={<OpportunityDetails />}
            />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;