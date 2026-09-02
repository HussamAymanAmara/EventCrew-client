import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.png";
import "./CSS/HeroSection.css";

function HeroSection() {
    return (
        <section className="eventcrew-hero">
            <div className="eventcrew-hero-container">

                <div className="eventcrew-hero-content">
                    <span className="eventcrew-hero-label">
                        Beta Launch · Aug 2026
                    </span>

                    <h1>
                        Connect with Opportunities That Matter.
                    </h1>

                    <p>
                        EventCrew brings volunteers and organizations together on
                        one platform. Find local opportunities, manage sign-ups,
                        and track your impact — all in one place.
                    </p>

                    <div className="eventcrew-hero-buttons">
                        <Link
                            to="/opportunities"
                            className="eventcrew-hero-primary"
                        >
                            Find Opportunities
                        </Link>

                        <Link
                            to="/register/organization"
                            className="eventcrew-hero-secondary"
                        >
                            Join as an Organization
                        </Link>
                    </div>
                </div>

                <div className="eventcrew-hero-image-container">
                    <img
                        src={heroImage}
                        alt="Volunteers working together"
                        className="eventcrew-hero-image"
                    />
                </div>

            </div>

            <div className="eventcrew-hero-stats">
                <div className="eventcrew-hero-stat">
                    <h3>2,400+</h3>
                    <p>Volunteers</p>
                </div>

                <div className="eventcrew-hero-stat">
                    <h3>180+</h3>
                    <p>Organizations</p>
                </div>

                <div className="eventcrew-hero-stat">
                    <h3>840+</h3>
                    <p>Opportunities</p>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;