import API_URL from "../../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./CSS/OrganizationHome.css";


function OrganizationHome() {

    const [opportunities, setOpportunities] = useState([]);

    const [openCount, setOpenCount] = useState(0);

    const [draftCount, setDraftCount] = useState(0);


    const user = JSON.parse(
        localStorage.getItem("user")
    );


    useEffect(() => {

        if (!user) {
            return;
        }


        axios
            .get(
                `${API_URL}/api/opportunities?organization_id=${user.user_id}`
            )
            .then((response) => {

                setOpportunities(
                    response.data
                );


                let open = 0;

                let draft = 0;


                for (
                    let i = 0;
                    i < response.data.length;
                    i++
                ) {

                    if (
                        response.data[i].listing_status === "open"
                    ) {

                        open++;

                    }


                    if (
                        response.data[i].listing_status === "draft"
                    ) {

                        draft++;

                    }

                }


                setOpenCount(open);

                setDraftCount(draft);

            })
            .catch((error) => {

                console.log(error);

            });

    }, []);


    if (
        !user ||
        user.role !== "organization"
    ) {

        return (

            <div className="eventcrew-organization-message">

                <h2>
                    Please login as an organization first.
                </h2>

            </div>

        );

    }


    return (

        <div className="eventcrew-organization-home">


            <div className="eventcrew-organization-main">


                {/* Main actions */}

                <section className="eventcrew-organization-actions">


                    <Link
                        to="/organization/create-opportunity"
                        className="eventcrew-main-action"
                    >

                        <span>
                            +
                        </span>

                        <strong>
                            Post opportunity
                        </strong>

                    </Link>


                    <Link
                        to="/organization/applications"
                        className="eventcrew-action-card"
                    >

                        <span>
                            📋
                        </span>

                        <strong>
                            Review applications
                        </strong>

                    </Link>


                </section>


                {/* Active opportunities */}

                <section className="eventcrew-organization-section">


                    <div className="eventcrew-organization-section-header">

                        <h2>
                            Active opportunities
                        </h2>


                        <Link to="/organization/dashboard">
                            View more →
                        </Link>

                    </div>


                    {opportunities.length === 0 ? (

                        <p>
                            You have not created any opportunities yet.
                        </p>

                    ) : (

                        opportunities.map(
                            (opportunity, index) => (

                                index < 3 && (

                                    <div
                                        className="eventcrew-organization-opportunity"
                                        key={opportunity.opportunity_id}
                                    >


                                        <div className="eventcrew-organization-opportunity-top">


                                            <div>

                                                <h3>
                                                    {opportunity.title}
                                                </h3>


                                                <p>

                                                    {new Date(
                                                        opportunity.event_date
                                                    ).toLocaleDateString()}

                                                </p>

                                            </div>


                                            <span>
                                                {opportunity.listing_status}
                                            </span>


                                        </div>


                                        <div className="eventcrew-organization-opportunity-info">


                                            <p>

                                                <strong>
                                                    Volunteers needed:
                                                </strong>
                                                {" "}
                                                {opportunity.volunteers_needed}

                                            </p>


                                            <p>

                                                <strong>
                                                    Location:
                                                </strong>
                                                {" "}
                                                {opportunity.venue_name},
                                                {" "}
                                                {opportunity.city}

                                            </p>


                                        </div>


                                        <div className="eventcrew-organization-opportunity-buttons">

                                            <Link to="/organization/applications">
                                                Applications
                                            </Link>

                                        </div>


                                    </div>

                                )

                            )
                        )

                    )}


                </section>


            </div>


            {/* Sidebar */}

            <div className="eventcrew-organization-sidebar">


                <div className="eventcrew-organization-sidebar-card">


                    <h3>
                        Opportunities
                    </h3>


                    <div className="eventcrew-stat">

                        <span>
                            Total opportunities
                        </span>

                        <strong>
                            {opportunities.length}
                        </strong>

                    </div>


                    <div className="eventcrew-stat">

                        <span>
                            Open opportunities
                        </span>

                        <strong>
                            {openCount}
                        </strong>

                    </div>


                    <div className="eventcrew-stat">

                        <span>
                            Draft opportunities
                        </span>

                        <strong>
                            {draftCount}
                        </strong>

                    </div>


                </div>


                <div className="eventcrew-organization-sidebar-card">


                    <h3>
                        Pages
                    </h3>


                    <Link to="/organization/dashboard">
                        📊 Dashboard
                    </Link>


                    <Link to="/organization/create-opportunity">
                        + Post opportunity
                    </Link>


                    <Link to="/organization/applications">
                        📋 Applications
                    </Link>


                    <Link to="/organization/profile">
                        👤 Our profile
                    </Link>


                    <Link to="/organization/profile/edit">
                        ✏️ Edit profile
                    </Link>


                </div>


            </div>


        </div>

    );

}


export default OrganizationHome;