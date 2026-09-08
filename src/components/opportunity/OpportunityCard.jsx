import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./CSS/OpportunityCard.css";

function OpportunityCard(props) {
    const opportunity = props.opportunity;
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/opportunities/${opportunity.opportunity_id}`);
    };

    return (
        <Card className="eventcrew-opportunity-card">

            <Card.Body>

                <div className="eventcrew-opportunity-card-top">
                    <span className="eventcrew-opportunity-type">
                        {opportunity.opportunity_type}
                    </span>

                    <span className="eventcrew-opportunity-compensation">
                        {opportunity.compensation_type}
                    </span>
                </div>

                <Card.Title className="eventcrew-opportunity-title">
                    {opportunity.title}
                </Card.Title>

                <Card.Text className="eventcrew-opportunity-description">
                    {opportunity.description}
                </Card.Text>

                <div className="eventcrew-opportunity-info">

                    <p>
                        <strong>Date:</strong>{" "}
                        {new Date(
                            opportunity.event_date
                        ).toLocaleDateString()}
                    </p>

                    <p>
                        <strong>Location:</strong>{" "}
                        {opportunity.venue_name}, {opportunity.city}
                    </p>

                    <p>
                        <strong>Spots remaining:</strong>{" "}
                        {opportunity.spots_remaining}
                    </p>

                </div>

                <Button
                    variant="primary"
                    className="eventcrew-opportunity-button"
                    onClick={handleViewDetails}
                >
                    View Details
                </Button>

            </Card.Body>

        </Card>
    );
}

export default OpportunityCard;