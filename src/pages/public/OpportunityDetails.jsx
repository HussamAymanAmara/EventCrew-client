import API_URL from "../../config";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import OpportunitySkills from "../../components/opportunity/OpportunitySkills";
import OpportunityImages from "../../components/opportunity/OpportunityImages";
import OpportunityWeather from "../../components/opportunity/OpportunityWeather";

import "./CSS/OpportunityDetails.css";


function OpportunityDetails() {

    const { id } = useParams();

    const [opportunity, setOpportunity] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    useEffect(() => {

        axios
            .get(
                `${API_URL}/api/opportunities/${id}`
            )
            .then((response) => {

                setOpportunity(response.data);

                setLoading(false);

            })
            .catch((error) => {

                console.log(error);


                setError(
                    "Unable to load opportunity details"
                );


                setLoading(false);

            });

    }, [id]);


    function handleApply() {

        const user =
            JSON.parse(
                localStorage.getItem("user")
            );


        if (!user) {

            alert(
                "Please login first."
            );

            return;

        }


        if (
            user.role !== "volunteer"
        ) {

            alert(
                "Only volunteers can apply."
            );

            return;

        }


        axios
            .post(
                `${API_URL}/api/applications`,
                {
                    volunteer_id:
                        user.user_id,

                    opportunity_id:
                        opportunity.opportunity_id,

                    application_message:
                        ""
                },
                {
                    headers: {
                        "x-role": "volunteer"
                    }
                }
            )
            .then(() => {

                alert(
                    "Application submitted successfully."
                );

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

                } else {

                    alert(
                        "Could not submit application."
                    );

                }

            });

    }


    if (loading) {

        return (

            <p className="eventcrew-opportunity-details-message">
                Loading opportunity...
            </p>

        );

    }


    if (error) {

        return (

            <p className="eventcrew-opportunity-details-message">
                {error}
            </p>

        );

    }


    if (!opportunity) {

        return (

            <p className="eventcrew-opportunity-details-message">
                Opportunity not found.
            </p>

        );

    }


    return (

        <section className="eventcrew-opportunity-details-section">


            <div className="eventcrew-opportunity-details-container">


                <Link
                    to="/opportunities"
                    className="eventcrew-opportunity-back"
                >
                    ← Back to Opportunities
                </Link>


                <div className="eventcrew-opportunity-details-layout">


                    <div className="eventcrew-opportunity-details-main">


                        <OpportunityImages
                            opportunityId={
                                opportunity.opportunity_id
                            }
                        />


                        <div className="eventcrew-opportunity-details-top">

                            <span className="eventcrew-details-type">
                                {opportunity.opportunity_type}
                            </span>

                            <span className="eventcrew-details-compensation">
                                {opportunity.compensation_type}
                            </span>

                        </div>


                        <h1>
                            {opportunity.title}
                        </h1>


                        {opportunity.organization_name && (

                            <p className="eventcrew-details-organization">

                                Organized by{" "}
                                {opportunity.organization_name}

                            </p>

                        )}


                        <p className="eventcrew-details-description">
                            {opportunity.description}
                        </p>


                        <div className="eventcrew-details-section">

                            <h2>
                                Opportunity Details
                            </h2>


                            <div className="eventcrew-details-grid">


                                <div>

                                    <span>
                                        Date
                                    </span>

                                    <p>
                                        {new Date(
                                            opportunity.event_date
                                        ).toLocaleDateString()}
                                    </p>

                                </div>


                                <div>

                                    <span>
                                        Time
                                    </span>

                                    <p>
                                        {opportunity.start_time}
                                        {" - "}
                                        {opportunity.end_time}
                                    </p>

                                </div>


                                <div>

                                    <span>
                                        Location
                                    </span>

                                    <p>
                                        {opportunity.venue_name}
                                        {", "}
                                        {opportunity.city}
                                    </p>

                                </div>


                                <div>

                                    <span>
                                        Volunteers Needed
                                    </span>

                                    <p>
                                        {opportunity.volunteers_needed}
                                    </p>

                                </div>


                                <div>

                                    <span>
                                        Spots Remaining
                                    </span>

                                    <p>
                                        {opportunity.spots_remaining}
                                    </p>

                                </div>


                                <div>

                                    <span>
                                        Minimum Age
                                    </span>

                                    <p>
                                        {
                                            opportunity.minimum_age
                                                ? opportunity.minimum_age
                                                : "Not specified"
                                        }
                                    </p>

                                </div>


                                {opportunity.application_deadline && (

                                    <div>

                                        <span>
                                            Application Deadline
                                        </span>

                                        <p>
                                            {new Date(
                                                opportunity.application_deadline
                                            ).toLocaleDateString()}
                                        </p>

                                    </div>

                                )}


                                {opportunity.compensation_type === "paid" && (

                                    <div>

                                        <span>
                                            Compensation Amount
                                        </span>

                                        <p>
                                            {
                                                opportunity.compensation_amount ??
                                                "Not specified"
                                            }
                                        </p>

                                    </div>

                                )}


                                {opportunity.compensation_type === "paid" && (

                                    <div>

                                        <span>
                                            Payment Schedule
                                        </span>

                                        <p>
                                            {
                                                opportunity.payment_schedule ||
                                                "Not specified"
                                            }
                                        </p>

                                    </div>

                                )}


                            </div>

                        </div>


                        <OpportunitySkills
                            opportunityId={
                                opportunity.opportunity_id
                            }
                        />


                        <div className="eventcrew-details-section">

                            <h2>
                                Location
                            </h2>


                            <p>
                                {opportunity.venue_name}
                            </p>


                            {opportunity.street_address && (

                                <p>
                                    {opportunity.street_address}
                                </p>

                            )}


                            {opportunity.building_number && (

                                <p>
                                    Building number:{" "}
                                    {opportunity.building_number}
                                </p>

                            )}


                            <p>
                                {opportunity.city}
                            </p>


                            <OpportunityWeather
                                city={opportunity.city}
                                eventDate={opportunity.event_date}
                            />


                        </div>


                        {opportunity.additional_requirements && (

                            <div className="eventcrew-details-section">

                                <h2>
                                    Additional Requirements
                                </h2>

                                <p>
                                    {opportunity.additional_requirements}
                                </p>

                            </div>

                        )}


                    </div>


                    <aside className="eventcrew-opportunity-details-sidebar">

                        <h3>
                            Interested in this opportunity?
                        </h3>

                        <p>
                            {opportunity.spots_remaining} spots remaining
                        </p>

                        <button
                            type="button"
                            onClick={handleApply}
                        >
                            Apply Now
                        </button>

                    </aside>


                </div>


            </div>


        </section>

    );

}


export default OpportunityDetails;