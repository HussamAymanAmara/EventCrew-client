import { useEffect, useState } from "react";
import axios from "axios";
import OpportunityCard from "../../components/opportunity/OpportunityCard";
import "./CSS/BrowseOpportunities.css";

function BrowseOpportunities() {
    const [opportunities, setOpportunities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/opportunities")
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
        <section className="eventcrew-browse-section">
            <div className="eventcrew-browse-container">

                <div className="eventcrew-browse-header">
                    <span>Volunteer Opportunities</span>

                    <h1>Find an opportunity</h1>

                    <p>
                        Explore available volunteer opportunities and find
                        an activity where you can make an impact.
                    </p>
                </div>

                {loading && (
                    <p className="eventcrew-browse-message">
                        Loading opportunities...
                    </p>
                )}

                {error && (
                    <p className="eventcrew-browse-message">
                        {error}
                    </p>
                )}

                {!loading && !error && opportunities.length === 0 && (
                    <p className="eventcrew-browse-message">
                        No opportunities available.
                    </p>
                )}

                {!loading && !error && opportunities.length > 0 && (
                    <div className="eventcrew-browse-grid">
                        {opportunities.map((opportunity) => (
                            <OpportunityCard
                                key={opportunity.opportunity_id}
                                opportunity={opportunity}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}

export default BrowseOpportunities;