import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CSS/Navbar.css";

function EventCrewNavbar() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    const role = user?.role;

    const handleSearch = (e) => {
        e.preventDefault();

        if (search.trim() !== "") {
            navigate(`/opportunities?search=${search}`);
            setMenuOpen(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
        setMenuOpen(false);
    };

    return (
        <nav className="eventcrew-navbar">
            <div className="eventcrew-navbar-container">

                <Link to="/" className="navbar-logo-link">
                    <img
                        src="./src/assets/eventcrew-logo.png"
                        alt="EventCrew"
                        className="navbar-logo"
                    />
                </Link>

                <button
                    className="navbar-menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`navbar-content ${menuOpen ? "show" : ""}`}>

                    {!user && (
                        <>
                            <div className="navbar-links">
                                <Link
                                    to="/"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Home
                                </Link>

                                <Link
                                    to="/opportunities"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Opportunities
                                </Link>
                            </div>

                            <form
                                className="navbar-search"
                                onSubmit={handleSearch}
                            >
                                <input
                                    type="search"
                                    placeholder="Search opportunities"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />

                                <button type="submit">
                                    Search
                                </button>
                            </form>

                            <div className="navbar-actions">
                                <Link
                                    to="/login"
                                    className="navbar-login"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    className="navbar-register"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Register
                                </Link>
                            </div>
                        </>
                    )}

                    {role === "volunteer" && (
                        <>
                            <div className="navbar-links">
                                <Link to="/volunteer/home">
                                    Home
                                </Link>

                                <Link to="/opportunities">
                                    Opportunities
                                </Link>

                                <Link to="/volunteer/applications">
                                    My Applications
                                </Link>

                                <Link to="/volunteer/dashboard">
                                    Dashboard
                                </Link>

                                <Link to="/volunteer/profile">
                                    Profile
                                </Link>
                            </div>

                            <form
                                className="navbar-search"
                                onSubmit={handleSearch}
                            >
                                <input
                                    type="search"
                                    placeholder="Search opportunities"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />

                                <button type="submit">
                                    Search
                                </button>
                            </form>

                            <button
                                className="navbar-logout"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </>
                    )}

                    {role === "organization" && (
                        <>
                            <div className="navbar-links organization-links">
                                <Link to="/organization/home">
                                    Home
                                </Link>

                                <Link to="/organization/dashboard">
                                    Dashboard
                                </Link>

                                <Link to="/organization/opportunities/create">
                                    Create Opportunity
                                </Link>

                                <Link to="/organization/applications">
                                    Applications
                                </Link>

                                <Link to="/organization/profile">
                                    Profile
                                </Link>
                            </div>

                            <button
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