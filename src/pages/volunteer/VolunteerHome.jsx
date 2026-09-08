import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CSS/VolunteerHome.css";

function VolunteerHome() {
    const [applications, setApplications] = useState([]);
    const [opportunities, setOpportunities] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {

        if (!user) {
            return;
        }

        axios
            .get(
                `http://localhost:5000/api/applications/volunteer/${user.user_id}`,
                {
                    headers: {
                        "x-role": "volunteer"
                    }
                }
            )
            .then((response) => {
                setApplications(response.data);
            })
            .catch((error) => {
                console.log(error);
            });


        axios
            .get(
                "http://localhost:5000/api/opportunities?status=open&sort=newest"
            )
            .then((response) => {
                setOpportunities(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    if (!user || user.role !== "volunteer") {
        return (
            <div className="eventcrew-volunteer-message">
                <h2>Please login as a volunteer first.</h2>
            </div>
        );
    }

    return (
        <div className="eventcrew-volunteer-home">

            <div className="eventcrew-volunteer-main">

                <section className="eventcrew-home-section">

                    <div className="eventcrew-section-header">
                        <h2>Your Upcoming Events</h2>

                        <Link to="/volunteer/applications">
                            View all →
                        </Link>
                    </div>

                    {applications.length === 0 ? (

                        <p>You do not have any applications yet.</p>

                    ) : (

                        applications.map((application, index) => (

                            index < 2 && (

                                <div
                                    className="eventcrew-upcoming-card"
                                    key={application.application_id}
                                >

                                    <div>
                                        <h3>{application.title}</h3>

                                        <p>
                                            {new Date(
                                                application.event_date
                                            ).toLocaleDateString()}
                                            {" · "}
                                            {application.start_time}
                                            {" · "}
                                            {application.city}
                                        </p>
                                    </div>

                                    <span className="eventcrew-status">
                                        {application.status}
                                    </span>

                                </div>

                            )

                        ))

                    )}

                </section>


                <section className="eventcrew-home-section">

                    <div className="eventcrew-section-header">
                        <div>
                            <h2>Recommended for You</h2>
                            <p>Explore the latest volunteer opportunities</p>
                        </div>

                        <Link to="/opportunities">
                            Browse all →
                        </Link>
                    </div>


                    <div className="eventcrew-recommended-grid">

                        {opportunities.map((opportunity, index) => (

                            index < 4 && (

                                <div
                                    className="eventcrew-recommended-card"
                                    key={opportunity.opportunity_id}
                                >

                                    <div className="eventcrew-recommended-image">
                                        Opportunity
                                    </div>

                                    <div className="eventcrew-recommended-content">

                                        <div className="eventcrew-recommended-top">

                                            <span>
                                                {opportunity.opportunity_type}
                                            </span>

                                            <span>
                                                {opportunity.compensation_type}
                                            </span>

                                        </div>

                                        <h3>{opportunity.title}</h3>

                                        <p>
                                            {opportunity.city}
                                        </p>

                                        <div className="eventcrew-recommended-bottom">

                                            <span>
                                                {new Date(
                                                    opportunity.event_date
                                                ).toLocaleDateString()}
                                            </span>

                                            <span>
                                                {opportunity.spots_remaining} spots left
                                            </span>

                                        </div>

                                        <Link
                                            to={`/opportunities/${opportunity.opportunity_id}`}
                                        >
                                            View Details
                                        </Link>

                                    </div>

                                </div>

                            )

                        ))}

                    </div>

                </section>

            </div>


            <div className="eventcrew-volunteer-sidebar">

                <div className="eventcrew-sidebar-card">

                    <h3>Volunteer Hours</h3>

                    <p className="eventcrew-hours-message">
                        Your completed volunteer hours will appear here after attendance is recorded.
                    </p>

                </div>


                <div className="eventcrew-sidebar-card">

                    <h3>Quick Actions</h3>

                    <Link to="/opportunities">
                        🔍 Browse opportunities
                    </Link>

                    <Link to="/volunteer/applications">
                        📋 View my applications
                    </Link>

                    <Link to="/volunteer/profile">
                        👤 My profile
                    </Link>

                </div>


                <div className="eventcrew-sidebar-card">

                    <h3>Recent Activity</h3>

                    {applications.length === 0 ? (

                        <p>No recent activity.</p>

                    ) : (

                        applications.map((application, index) => (

                            index < 3 && (

                                <div
                                    className="eventcrew-activity"
                                    key={application.application_id}
                                >

                                    <strong>{application.title}</strong>

                                    <p>
                                        Application status: {application.status}
                                    </p>

                                </div>

                            )

                        ))

                    )}

                </div>

            </div>

        </div>
    );
}

export default VolunteerHome;