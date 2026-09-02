import { Link } from "react-router-dom";
import "./CSS/Footer.css";

function Footer() {
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    const role = user?.role;

    let profilePath = "/login";
    let dashboardPath = "/login";

    if (role === "volunteer") {
        profilePath = "/volunteer/profile";
        dashboardPath = "/volunteer/dashboard";
    }

    if (role === "organization") {
        profilePath = "/organization/profile";
        dashboardPath = "/organization/dashboard";
    }

    return (
        <footer className="eventcrew-footer">

            <div className="eventcrew-footer-content">

                <div className="eventcrew-footer-brand">
                    <Link to="/" className="eventcrew-footer-title">
                        <span>Event</span>
                        <span>Crew</span>
                    </Link>

                    <p>
                        Connecting people with meaningful volunteer
                        opportunities and community events.
                    </p>
                </div>

                <div className="eventcrew-footer-links">

                    <div className="eventcrew-footer-column">
                        <h4>Quick Links</h4>

                        <Link to="/">Home</Link>

                        <Link to="/opportunities">
                            Opportunities
                        </Link>

                        <Link to={dashboardPath}>
                            Dashboard
                        </Link>

                        <Link to={profilePath}>
                            Profile
                        </Link>

                        {!user && (
                            <>
                                <Link to="/login">
                                    Login
                                </Link>

                                <Link to="/register">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="eventcrew-footer-column">
                        <h4>Company</h4>

                        <Link to="/about">
                            About Us
                        </Link>

                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </div>

                    <div className="eventcrew-footer-column">
                        <h4>Support</h4>

                        <Link to="/help">
                            Help Centre
                        </Link>

                        <Link to="/privacy">
                            Privacy Policy
                        </Link>

                        <Link to="/terms">
                            Terms & Conditions
                        </Link>
                    </div>

                </div>

            </div>

            <div className="eventcrew-footer-bottom">
                <p>© 2026 EventCrew. All rights reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;