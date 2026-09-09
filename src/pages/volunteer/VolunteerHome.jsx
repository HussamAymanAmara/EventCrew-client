import API_URL from "../../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./CSS/VolunteerHome.css";


function VolunteerHome() {

    const [applications, setApplications] = useState([]);

    const [opportunities, setOpportunities] = useState([]);


    const user = JSON.parse(
        localStorage.getItem("user")
    );


    useEffect(() => {

        if (!user) {
            return;
        }


        axios
            .get(
                `${API_URL}/api/applications/volunteer/${user.user_id}`,
                {
                    headers: {
                        "x-role": "volunteer"
                    }
                }
            )
            .then((response) => {

                setApplications(
                    response.data
                );

            })
            .catch((error) => {

                console.log(error);

            });


        axios
            .get(
                `${API_URL}/api/opportunities?status=open&sort=newest`
            )
            .then((response) => {

                setOpportunities(
                    response.data
                );

            })
            .catch((error) => {

                console.log(error);

            });

    }, []);


    if (
        !user ||
        user.role !== "volunteer"
    ) {

        return (

            <div className="eventcrew-volunteer-message">

                <h2>
                    Please login as a volunteer first.
                </h2>

            </div>

        );

    }


    const today = new Date();


    const upcomingApplications =
        applications.filter((application) => {

            const eventDate =
                new Date(
                    application.event_date
                );


            return (

                application.status === "pending" ||

                application.status === "under_review" ||

                (
                    (
                        application.status === "approved" ||
                        application.status === "confirmed"
                    ) &&
                    eventDate >= today
                )

            );

        });


    return (

        <div className="eventcrew-volunteer-home">


            <div className="eventcrew-volunteer-main">


                {/* Upcoming events */}

                <section className="eventcrew-home-section">


                    <div className="eventcrew-section-header">

                        <h2>
                            Your Upcoming Events
                        </h2>


                        <Link to="/volunteer/dashboard">
                            View all →
                        </Link>

                    </div>


                    {upcomingApplications.length === 0 ? (

                        <p>
                            No upcoming opportunities.
                        </p>

                    ) : (

                        upcomingApplications.map(
                            (application) => (

                                <Link
                                    to={`/opportunities/${application.opportunity_id}`}
                                    className="eventcrew-upcoming-card-link"
                                    key={application.application_id}
                                >

                                    <div className="eventcrew-upcoming-card">


                                        <div>

                                            <h3>
                                                {application.title}
                                            </h3>


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


                                        <span
                                            className={`eventcrew-home-status ${application.status}`}
                                        >
                                            {application.status}
                                        </span>


                                    </div>

                                </Link>

                            )
                        )

                    )}


                </section>


                {/* Recommended opportunities */}

                <section className="eventcrew-home-section">


                    <div className="eventcrew-section-header">

                        <div>

                            <h2>
                                Recommended for You
                            </h2>

                            <p>
                                Explore the latest volunteer opportunities
                            </p>

                        </div>


                        <Link to="/opportunities">
                            Browse all →
                        </Link>

                    </div>


                    {opportunities.length === 0 ? (

                        <p>
                            No opportunities available.
                        </p>

                    ) : (

                        <div className="eventcrew-home-opportunity-grid">


                            {opportunities
                                .slice(0, 4)
                                .map((opportunity) => (

                                    <div
                                        className="eventcrew-home-opportunity-card"
                                        key={opportunity.opportunity_id}
                                    >


                                        <div className="eventcrew-home-opportunity-top">


                                            <span className="eventcrew-home-opportunity-category">

                                                {
                                                    opportunity.category_name ||
                                                    opportunity.opportunity_type
                                                }

                                            </span>


                                            <span className="eventcrew-home-opportunity-spots">

                                                {
                                                    opportunity.spots_remaining
                                                } spots left

                                            </span>


                                        </div>


                                        <h3>
                                            {opportunity.title}
                                        </h3>


                                        {opportunity.organization_name && (

                                            <p className="eventcrew-home-opportunity-organization">

                                                {
                                                    opportunity.organization_name
                                                }

                                            </p>

                                        )}


                                        <div className="eventcrew-home-opportunity-details">


                                            <p>

                                                <span>
                                                    📍
                                                </span>

                                                {opportunity.city}

                                            </p>


                                            <p>

                                                <span>
                                                    📅
                                                </span>

                                                {new Date(
                                                    opportunity.event_date
                                                ).toLocaleDateString()}

                                            </p>


                                        </div>


                                        <div className="eventcrew-home-opportunity-footer">


                                            <span className="eventcrew-home-opportunity-compensation">

                                                {
                                                    opportunity.compensation_type
                                                }

                                            </span>


                                            <Link
                                                to={`/opportunities/${opportunity.opportunity_id}`}
                                            >
                                                View Details
                                            </Link>


                                        </div>


                                    </div>

                                ))}


                        </div>

                    )}


                </section>


            </div>


            {/* Sidebar */}

            <div className="eventcrew-volunteer-sidebar">


                <div className="eventcrew-sidebar-card">

                    <h3>
                        Quick Actions
                    </h3>


                    <Link to="/opportunities">
                        Browse Opportunities
                    </Link>


                    <Link to="/volunteer/history">
                        History
                    </Link>


                    <Link to="/volunteer/profile">
                        My Profile
                    </Link>

                </div>


                <div className="eventcrew-sidebar-card">

                    <h3>
                        Recent Activity
                    </h3>


                    {applications.length === 0 ? (

                        <p>
                            No recent activity.
                        </p>

                    ) : (

                        applications.map(
                            (application, index) => (

                                index < 3 && (

                                    <div
                                        className="eventcrew-activity"
                                        key={application.application_id}
                                    >

                                        <strong>
                                            {application.title}
                                        </strong>


                                        <p>
                                            Application status:{" "}
                                            {application.status}
                                        </p>

                                    </div>

                                )

                            )
                        )

                    )}


                </div>


            </div>


        </div>

    );

}


export default VolunteerHome;