import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/public/Home";
import BrowseOpportunities from "./pages/public/BrowseOpportunities";
import OpportunityDetails from "./pages/public/OpportunityDetails";
import MyApplications from "./pages/volunteer/MyApplications";
import Login from "./pages/auth/Login";
import VolunteerHome from "./pages/volunteer/VolunteerHome";
import OrganizationHome from "./pages/organization/OrganizationHome";
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
            <Route path="/login" element={<Login />} />
            <Route
              path="/volunteer/applications"
              element={<MyApplications />}
            />
            <Route
              path="/volunteer/home"
              element={<VolunteerHome />}
            />
            <Route
              path="/organization/home"
              element={<OrganizationHome />}
            />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;