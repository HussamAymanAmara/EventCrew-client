import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/eventcrew-logo.png";

import "./CSS/Navbar.css";


function EventCrewNavbar() {

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);


    const storedUser = localStorage.getItem("user");

    const user = storedUser
        ? JSON.parse(storedUser)
        : null;

    const role = user
        ? user.role
        : null;


    let homeLink = "/";


    if (role === "volunteer") {

        homeLink = "/volunteer/home";

    }


    if (role === "organization") {

        homeLink = "/organization/home";

    }


    function handleLogout() {

        localStorage.removeItem("user");

        navigate("/");

        setMenuOpen(false);

    }


    return (

        <nav className="eventcrew-navbar">


            <div className="eventcrew-navbar-container">


                {/* Logo */}

                <Link
                    to={homeLink}
                    className="navbar-logo-link"
                    onClick={() =>
                        setMenuOpen(false)
                    }
                >

                    <img
                        src={logo}
                        alt="EventCrew"
                        className="navbar-logo"
                    />

                </Link>


                {/* Mobile menu button */}

                <button
                    className="navbar-menu-button"
                    onClick={() =>
                        setMenuOpen(!menuOpen)
                    }
                >

                    <span></span>
                    <span></span>
                    <span></span>

                </button>


                <div
                    className={`navbar-content ${menuOpen
                            ? "show"
                            : ""
                        }`}
                >


                    {/* Guest */}

                    {!user && (

                        <>

                            <div className="navbar-links">

                                <Link
                                    to="/"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    Home
                                </Link>


                                <Link
                                    to="/opportunities"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    Opportunities
                                </Link>

                            </div>


                            <div className="navbar-actions">

                                <Link
                                    to="/login"
                                    className="navbar-login"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    Login
                                </Link>


                                <Link
                                    to="/register"
                                    className="navbar-register"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    Register
                                </Link>

                            </div>

                        </>

                    )}


                    {/* Volunteer */}

                    {role === "volunteer" && (

                        <>

                            <div className="navbar-links">

                                <Link
                                    to="/volunteer/home"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    Home
                                </Link>


                                <Link
                                    to="/opportunities"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    Opportunities
                                </Link>


                                <Link
                                    to="/volunteer/history"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    History
                                </Link>


                                <Link
                                    to="/volunteer/dashboard"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    Dashboard
                                </Link>


                                <Link
                                    to="/volunteer/profile"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    Profile
                                </Link>

                            </div>


                            <button
                                type="button"
                                className="navbar-logout"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>

                        </>

                    )}


                    {/* Organization */}

                    {role === "organization" && (

                        <>

                            <div className="navbar-links organization-links">

                                <Link
                                    to="/organization/home"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    Home
                                </Link>


                                <Link
                                    to="/organization/dashboard"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    Dashboard
                                </Link>


                                <Link
                                    to="/organization/create-opportunity"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    Create Opportunity
                                </Link>


                                <Link
                                    to="/organization/applications"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    Applications
                                </Link>


                                <Link
                                    to="/organization/profile"
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    Profile
                                </Link>

                            </div>


                            <button
                                type="button"
                                className="navbar-logout"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>

                        </>

                    )}


                </div>


            </div>


        </nav>

    );

}


export default EventCrewNavbar;