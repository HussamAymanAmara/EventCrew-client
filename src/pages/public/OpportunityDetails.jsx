import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import OpportunitySkills from "../../components/opportunity/OpportunitySkills";
import OpportunityImages from "../../components/opportunity/OpportunityImages";
import "./CSS/OpportunityDetails.css";

function OpportunityDetails() {
    const { id } = useParams();

    const [opportunity, setOpportunity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/opportunities/${id}`)
            .then((response) => {
                setOpportunity(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setError("Unable to load opportunity details");
                setLoading(false);
            });
    }, [id]);

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
                            opportunityId={opportunity.opportunity_id}
                        />

                        <div className="eventcrew-opportunity-details-top"></div>

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

                        <p className="eventcrew-details-description">
                            {opportunity.description}
                        </p>

                        <div className="eventcrew-details-section">
                            <h2>Opportunity Details</h2>

                            <div className="eventcrew-details-grid">

                                <div>
                                    <span>Date</span>
                                    <p>
                                        {new Date(
                                            opportunity.event_date
                                        ).toLocaleDateString()}
                                    </p>
                                </div>

                                <div>
                                    <span>Time</span>
                                    <p>
                                        {opportunity.start_time} -{" "}
                                        {opportunity.end_time}
                                    </p>
                                </div>

                                <div>
                                    <span>Location</span>
                                    <p>
                                        {opportunity.venue_name},{" "}
                                        {opportunity.city}
                                    </p>
                                </div>

                                <div>
                                    <span>Volunteers Needed</span>
                                    <p>
                                        {opportunity.volunteers_needed}
                                    </p>
                                </div>

                                <div>
                                    <span>Spots Remaining</span>
                                    <p>
                                        {opportunity.spots_remaining}
                                    </p>
                                </div>

                                <div>
                                    <span>Minimum Age</span>
                                    <p>
                                        {opportunity.minimum_age
                                            ? opportunity.minimum_age
                                            : "Not specified"}
                                    </p>
                                </div>

                            </div>
                        </div>

                        <OpportunitySkills
                            opportunityId={opportunity.opportunity_id}
                        />

                        <div className="eventcrew-details-section">
                            <h2>Location</h2>

                            <p>
                                {opportunity.venue_name}
                            </p>

                            {opportunity.street_address && (
                                <p>
                                    {opportunity.street_address}
                                </p>
                            )}

                            <p>
                                {opportunity.city}
                                {opportunity.state &&
                                    `, ${opportunity.state}`}
                            </p>
                        </div>

                        {opportunity.additional_requirements && (
                            <div className="eventcrew-details-section">
                                <h2>Additional Requirements</h2>

                                <p>
                                    {opportunity.additional_requirements}
                                </p>
                            </div>
                        )}

                    </div>

                    <aside className="eventcrew-opportunity-details-sidebar">

                        <h3>Interested in this opportunity?</h3>

                        <p>
                            {opportunity.spots_remaining} spots remaining
                        </p>

                        <button type="button">
                            Apply Now
                        </button>

                    </aside>

                </div>

            </div>
        </section>
    );
}

export default OpportunityDetails;