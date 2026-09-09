import API_URL from "../../config";
import { useEffect, useState } from "react";
import axios from "axios";

import ApplicantCard from "../../components/organization/ApplicantCard";

import "./CSS/OrganizationApplications.css";


function OrganizationApplications() {
    const [opportunities, setOpportunities] = useState([]);
    const [applications, setApplications] = useState({});
    const [error, setError] = useState("");

    const user = JSON.parse(localStorage.getItem("user"));


    useEffect(() => {

        if (!user || user.role !== "organization") {
            return;
        }

        getApplications();

    }, []);


    async function getApplications() {

        try {

            const opportunitiesResponse = await axios.get(
                `${API_URL}/api/opportunities?organization_id=${user.user_id}`
            );


            const organizationOpportunities =
                opportunitiesResponse.data;


            setOpportunities(
                organizationOpportunities
            );


            const allApplications = {};


            for (
                let i = 0;
                i < organizationOpportunities.length;
                i++
            ) {

                const opportunity =
                    organizationOpportunities[i];


                const applicationsResponse =
                    await axios.get(
                        `${API_URL}/api/applications/opportunity/${opportunity.opportunity_id}`,
                        {
                            headers: {
                                "x-role": "organization",
                                "organization": user.user_id
                            }
                        }
                    );


                allApplications[
                    opportunity.opportunity_id
                ] = applicationsResponse.data;

            }


            setApplications(
                allApplications
            );

            setError("");

        }
        catch (error) {

            console.log(error);

            setError(
                "Could not load applications."
            );

        }

    }


    function handleStatus(
        volunteerId,
        opportunityId,
        status
    ) {

        axios
            .put(
                `${API_URL}/api/applications/${volunteerId}/${opportunityId}/status`,
                {
                    status: status
                },
                {
                    headers: {
                        "x-role": "organization",
                        "organization": user.user_id
                    }
                }
            )
            .then(() => {

                alert(
                    `Application ${status} successfully.`
                );


                getApplications();

            })
            .catch((error) => {

                console.log(error);


                if (
                    error.response &&
                    error.response.data &&
                    error.response.data.message
                ) {

                    alert(
                        error.response.data.message
                    );

                }
                else {

                    alert(
                        "Could not update application."
                    );

                }

            });

    }


    if (!user || user.role !== "organization") {

        return (
            <div className="eventcrew-org-applications-message">

                <h2>
                    Please login as an organization first.
                </h2>

            </div>
        );

    }


    return (
        <div className="eventcrew-org-applications-page">


            <div className="eventcrew-org-applications-header">

                <h1>
                    Manage Applications
                </h1>

                <p>
                    Review volunteer applications for your opportunities.
                </p>

            </div>


            {error && (

                <div className="eventcrew-org-applications-error">

                    {error}

                </div>

            )}


            {opportunities.length === 0 ? (

                <section className="eventcrew-org-applications-section">

                    <p className="eventcrew-org-applications-empty">
                        You do not have any opportunities yet.
                    </p>

                </section>

            ) : (

                opportunities.map((opportunity) => {

                    const opportunityApplications =
                        applications[
                        opportunity.opportunity_id
                        ] || [];


                    return (

                        <section
                            key={opportunity.opportunity_id}
                            className="eventcrew-org-applications-section"
                        >


                            <div className="eventcrew-org-applications-section-header">

                                <h2>
                                    {opportunity.title}
                                </h2>


                                <span>
                                    {opportunityApplications.length} application(s)
                                </span>

                            </div>


                            {opportunityApplications.length === 0 ? (

                                <p className="eventcrew-org-applications-empty">

                                    No applications for this opportunity yet.

                                </p>

                            ) : (

                                <div className="eventcrew-org-applications-list">

                                    {opportunityApplications.map(
                                        (application) => (

                                            <ApplicantCard
                                                key={
                                                    `${opportunity.opportunity_id}-${application.volunteer_id}`
                                                }
                                                application={application}
                                                onStatus={
                                                    (
                                                        volunteerId,
                                                        status
                                                    ) =>
                                                        handleStatus(
                                                            volunteerId,
                                                            opportunity.opportunity_id,
                                                            status
                                                        )
                                                }
                                            />

                                        )
                                    )}

                                </div>

                            )}

                        </section>

                    );

                })

            )}


        </div>
    );
}


export default OrganizationApplications;