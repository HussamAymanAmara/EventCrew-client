import { Link } from "react-router-dom";
import "./CSS/ApplicationCard.css";

function ApplicationCard(props) {
    const application = props.application;

    return (
        <div className="eventcrew-dashboard-application">

            <div>

                <h3>
                    {application.title}
                </h3>

                <p>
                    {new Date(
                        application.event_date
                    ).toLocaleDateString()}

                    {" · "}

                    {application.start_time}

                    {" · "}

                    {application.city}
                </p>

            </div>


            <div className="eventcrew-dashboard-application-right">

                <span
                    className={`eventcrew-dashboard-status ${application.status}`}
                >
                    {application.status}
                </span>


                <Link
                    to={`/opportunities/${application.opportunity_id}`}
                    className="eventcrew-dashboard-details-button"
                >
                    View Details
                </Link>


                {props.showWithdraw && (

                    <button
                        className="eventcrew-dashboard-withdraw-button"
                        onClick={() =>
                            props.onWithdraw(
                                application.opportunity_id
                            )
                        }
                    >
                        Withdraw
                    </button>

                )}

            </div>

        </div>
    );
}

export default ApplicationCard;