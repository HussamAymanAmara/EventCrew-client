import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/public/Home";
import BrowseOpportunities from "./pages/public/BrowseOpportunities";
import OpportunityDetails from "./pages/public/OpportunityDetails";

import Login from "./pages/auth/Login";
import RoleSelection from "./pages/auth/RoleSelection";
import VolunteerRegister from "./pages/auth/VolunteerRegister";
import OrganizationRegister from "./pages/auth/OrganizationRegister";
import ForgotPassword from "./pages/auth/ForgotPassword";

import VolunteerHome from "./pages/volunteer/VolunteerHome";
import VolunteerDashboard from "./pages/volunteer/VolunteerDashboard";
import VolunteerProfile from "./pages/volunteer/VolunteerProfile";
import EditVolunteerProfile from "./pages/volunteer/EditVolunteerProfile";
import VolunteerHistory from "./pages/volunteer/VolunteerHistory";

import OrganizationHome from "./pages/organization/OrganizationHome";
import OrganizationDashboard from "./pages/organization/OrganizationDashboard";
import OrganizationApplications from "./pages/organization/OrganizationApplications";

import CreateOpportunity from "./pages/organization/CreateOpportunity";
import EditOpportunity from "./pages/organization/EditOpportunity";
import OrganizationProfile from "./pages/organization/OrganizationProfile";
import EditOrganizationProfile from "./pages/organization/EditOrganizationProfile";

import AboutUs from "./pages/public/AboutUs";
import ContactUs from "./pages/public/ContactUs";

import "./App.css";


function App() {

  return (
    <BrowserRouter>

      <div className="eventcrew-app">

        <Navbar />


        <main className="eventcrew-main-content">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />


            <Route
              path="/opportunities"
              element={<BrowseOpportunities />}
            />


            <Route
              path="/opportunities/:id"
              element={<OpportunityDetails />}
            />


            <Route
              path="/login"
              element={<Login />}
            />


            <Route
              path="/register"
              element={<RoleSelection />}
            />


            <Route
              path="/register/volunteer"
              element={<VolunteerRegister />}
            />


            <Route
              path="/register/organization"
              element={<OrganizationRegister />}
            />


            <Route
              path="/forgot-password"
              element={<ForgotPassword />}
            />


            <Route
              path="/volunteer/home"
              element={<VolunteerHome />}
            />


            <Route
              path="/volunteer/dashboard"
              element={<VolunteerDashboard />}
            />


            <Route
              path="/volunteer/profile"
              element={<VolunteerProfile />}
            />


            <Route
              path="/volunteer/profile/edit"
              element={<EditVolunteerProfile />}
            />


            <Route
              path="/volunteer/history"
              element={<VolunteerHistory />}
            />


            <Route
              path="/organization/home"
              element={<OrganizationHome />}
            />


            <Route
              path="/organization/dashboard"
              element={<OrganizationDashboard />}
            />


            <Route
              path="/organization/applications"
              element={<OrganizationApplications />}
            />


            <Route
              path="/organization/create-opportunity"
              element={<CreateOpportunity />}
            />


            <Route
              path="/organization/opportunities/:id/edit"
              element={<EditOpportunity />}
            />


            <Route
              path="/organization/profile"
              element={<OrganizationProfile />}
            />


            <Route
              path="/organization/profile/edit"
              element={<EditOrganizationProfile />}
            />

            <Route
              path="/about"
              element={<AboutUs />}
            />

            <Route
              path="/contact"
              element={<ContactUs />}
            />

          </Routes>

        </main>


        <Footer />

      </div>

    </BrowserRouter>
  );

}


export default App;