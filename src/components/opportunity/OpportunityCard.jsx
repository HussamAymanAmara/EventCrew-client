import { Link } from "react-router-dom";
import "./CSS/OpportunityCard.css";

function OpportunityCard(props) {
    const opportunity = props.opportunity;

    return (
        <div className="eventcrew-opportunity-card">

            <div className="eventcrew-opportunity-card-top">
                <span className="eventcrew-opportunity-type">
                    {opportunity.opportunity_type}
                </span>

                <span className="eventcrew-opportunity-compensation">
                    {opportunity.compensation_type}
                </span>
            </div>

            <h3 className="eventcrew-opportunity-title">
                {opportunity.title}
            </h3>

            <p className="eventcrew-opportunity-description">
                {opportunity.description}
            </p>

            <div className="eventcrew-opportunity-info">
                <p>
                    <strong>Date:</strong>{" "}
                    {new Date(opportunity.event_date).toLocaleDateString()}
                </p>

                <p>
                    <strong>Location:</strong> {opportunity.venue_name}, {opportunity.city}
                </p>

                <p>
                    <strong>Spots remaining:</strong> {opportunity.spots_remaining}
                </p>
            </div>

            <Link
                to={`/opportunities/${opportunity.opportunity_id}`}
                className="eventcrew-opportunity-button"
            >
                View Details
            </Link>

        </div>
    );
}

export default OpportunityCard;