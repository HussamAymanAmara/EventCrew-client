import API_URL from "../../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import OrganizationStats from "../../components/organization/OrganizationStats";
import OrganizationOpportunityCard from "../../components/organization/OrganizationOpportunityCard";
import OrganizationSidebar from "../../components/organization/OrganizationSidebar";

import "./CSS/OrganizationDashboard.css";


function OrganizationDashboard() {
    const [opportunities, setOpportunities] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));


    useEffect(() => {

        if (!user || user.role !== "organization") {
            return;
        }

        getOpportunities();

    }, []);


    function getOpportunities() {

        axios
            .get(
                `${API_URL}/api/opportunities?organization_id=${user.user_id}`
            )
            .then((response) => {

                setOpportunities(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    }


    if (!user || user.role !== "organization") {

        return (
            <div className="eventcrew-organization-dashboard-message">

                <h2>
                    Please login as an organization first.
                </h2>

            </div>
        );

    }


    return (
        <div className="eventcrew-organization-dashboard">


            <div className="eventcrew-org-dashboard-header">

                <div>

                    <h1>
                        Organization Dashboard
                    </h1>

                    <p>
                        Manage your opportunities and organization activities.
                    </p>

                </div>


                <Link to="/organization/profile">
                    View Profile
                </Link>

            </div>


            <OrganizationStats
                opportunities={opportunities}
            />


            <div className="eventcrew-org-dashboard-layout">


                <main className="eventcrew-org-dashboard-main">


                    <section className="eventcrew-org-dashboard-section">

                        <div className="eventcrew-org-dashboard-section-header">

                            <h2>
                                Your Opportunities
                            </h2>


                            <Link to="/organization/create-opportunity">
                                Create Opportunity
                            </Link>

                        </div>


                        {opportunities.length === 0 ? (

                            <div className="eventcrew-org-dashboard-empty">

                                <p>
                                    You have not created any opportunities yet.
                                </p>

                            </div>

                        ) : (

                            opportunities.map((opportunity) => (

                                <OrganizationOpportunityCard
                                    key={opportunity.opportunity_id}
                                    opportunity={opportunity}
                                    showEdit={true}
                                />

                            ))

                        )}

                    </section>


                </main>


                <OrganizationSidebar />


            </div>

        </div>
    );
}

export default OrganizationDashboard;