import { Link } from "react-router-dom";
import "./CSS/CompletedActivityCard.css";

function CompletedActivityCard(props) {
    const application = props.application;

    return (
        <div className="eventcrew-completed-card">

            <div>

                <h3>
                    {application.title}
                </h3>

                <p>
                    {new Date(
                        application.event_date
                    ).toLocaleDateString()}

                    {" · "}

                    {application.city}
                </p>

            </div>


            <div className="eventcrew-completed-card-right">

                {application.status === "rejected" ? (

                    <span className="eventcrew-completed-status rejected">
                        Rejected
                    </span>

                ) : (

                    <span className="eventcrew-completed-status finished">
                        Finished
                    </span>

                )}


                <Link
                    to={`/opportunities/${application.opportunity_id}`}
                    className="eventcrew-completed-details-button"
                >
                    View Details
                </Link>

            </div>

        </div>
    );
}

export default CompletedActivityCard;