import API_URL from "../../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CSS/FeaturedOpportunities.css";

function FeaturedOpportunities() {
    const [opportunities, setOpportunities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get(
                `${API_URL}/api/opportunities?status=open&sort=newest`
            )
            .then((response) => {
                setOpportunities(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setError("Unable to load opportunities");
                setLoading(false);
            });
    }, []);

    return (
        <section className="eventcrew-featured-section">
            <div className="eventcrew-featured-container">

                <div className="eventcrew-featured-header">
                    <div>
                        <span>Featured Opportunities</span>

                        <h2>Make your next impact</h2>

                        <p>
                            Discover the latest volunteer opportunities and find
                            one that matches your interests.
                        </p>
                    </div>

                    <Link
                        to="/opportunities"
                        className="eventcrew-featured-view-all"
                    >
                        View All Opportunities
                    </Link>
                </div>

                {loading && (
                    <p className="eventcrew-featured-message">
                        Loading opportunities...
                    </p>
                )}

                {error && (
                    <p className="eventcrew-featured-message">
                        {error}
                    </p>
                )}

                {!loading && !error && opportunities.length === 0 && (
                    <p className="eventcrew-featured-message">
                        No opportunities available.
                    </p>
                )}

                {!loading && !error && opportunities.length > 0 && (
                    <div className="eventcrew-featured-grid">

                        {opportunities.map((opportunity, index) => (
                            index < 3 && (
                                <div
                                    className="eventcrew-featured-card"
                                    key={opportunity.opportunity_id}
                                >

                                    <div className="eventcrew-featured-card-top">
                                        <span className="eventcrew-featured-badge">
                                            Latest
                                        </span>

                                        <span className="eventcrew-featured-type">
                                            {opportunity.opportunity_type}
                                        </span>
                                    </div>

                                    <h3>
                                        {opportunity.title}
                                    </h3>

                                    <p className="eventcrew-featured-description">
                                        {opportunity.description}
                                    </p>

                                    <div className="eventcrew-featured-details">

                                        <p>
                                            <strong>Date:</strong>{" "}
                                            {new Date(
                                                opportunity.event_date
                                            ).toLocaleDateString()}
                                        </p>

                                        <p>
                                            <strong>Location:</strong>{" "}
                                            {opportunity.venue_name},{" "}
                                            {opportunity.city}
                                        </p>

                                        <p>
                                            <strong>Compensation:</strong>{" "}
                                            {opportunity.compensation_type}
                                        </p>

                                        <p>
                                            <strong>Spots Remaining:</strong>{" "}
                                            {opportunity.spots_remaining}
                                        </p>

                                    </div>

                                    <Link
                                        to={`/opportunities/${opportunity.opportunity_id}`}
                                        className="eventcrew-featured-details-button"
                                    >
                                        View Details
                                    </Link>

                                </div>
                            )
                        ))}

                    </div>
                )}

            </div>
        </section>
    );
}

export default FeaturedOpportunities;