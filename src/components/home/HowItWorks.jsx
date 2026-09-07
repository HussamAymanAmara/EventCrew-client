import { Link } from "react-router-dom";
import "./CSS/HowItWorks.css";

function HowItWorks() {
    return (
        <section className="eventcrew-how-section">
            <div className="eventcrew-how-container">

                <div className="eventcrew-how-header">
                    <span>How It Works</span>
                    <h2>Start making an impact in a few simple steps</h2>
                    <p>
                        EventCrew makes it easy to discover opportunities,
                        apply, participate, and keep track of your volunteering.
                    </p>
                </div>

                <div className="eventcrew-how-steps">

                    <div className="eventcrew-how-step">
                        <div className="eventcrew-how-number">1</div>

                        <h3>Create Your Account</h3>

                        <p>
                            Register as a volunteer or organization and create
                            your EventCrew profile.
                        </p>
                    </div>

                    <div className="eventcrew-how-line"></div>

                    <div className="eventcrew-how-step">
                        <div className="eventcrew-how-number">2</div>

                        <h3>Find Opportunities</h3>

                        <p>
                            Browse volunteering opportunities and find activities
                            that match your interests.
                        </p>
                    </div>

                    <div className="eventcrew-how-line"></div>

                    <div className="eventcrew-how-step">
                        <div className="eventcrew-how-number">3</div>

                        <h3>Apply and Participate</h3>

                        <p>
                            Apply for an opportunity and participate once your
                            application is accepted.
                        </p>
                    </div>

                    <div className="eventcrew-how-line"></div>

                    <div className="eventcrew-how-step">
                        <div className="eventcrew-how-number">4</div>

                        <h3>Track Your Impact</h3>

                        <p>
                            Keep track of your completed activities, volunteer
                            hours, and certificates.
                        </p>
                    </div>

                </div>

                <div className="eventcrew-how-action">
                    <Link to="/register">
                        Get Started
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default HowItWorks;