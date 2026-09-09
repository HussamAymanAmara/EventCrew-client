import "./CSS/ApplicantCard.css";

function ApplicantCard(props) {
    const application = props.application;

    return (
        <div className="eventcrew-applicant-card">

            <div className="eventcrew-applicant-header">

                <div>

                    <h3>
                        {application.first_name}{" "}
                        {application.last_name}
                    </h3>

                    <p>
                        {application.email}
                    </p>

                </div>


                <span
                    className={`eventcrew-applicant-status ${application.status}`}
                >
                    {application.status}
                </span>

            </div>


            {application.phone && (

                <p className="eventcrew-applicant-phone">
                    <strong>Phone:</strong>{" "}
                    {application.phone}
                </p>

            )}


            {application.application_message && (

                <div className="eventcrew-applicant-message">

                    <strong>
                        Application message
                    </strong>

                    <p>
                        {application.application_message}
                    </p>

                </div>

            )}


            {(
                application.status === "pending" ||
                application.status === "under_review"
            ) && (

                <div className="eventcrew-applicant-actions">

                    <button
                        className="eventcrew-applicant-approve"
                        onClick={() =>
                            props.onStatus(
                                application.volunteer_id,
                                "approved"
                            )
                        }
                    >
                        Approve
                    </button>


                    <button
                        className="eventcrew-applicant-reject"
                        onClick={() =>
                            props.onStatus(
                                application.volunteer_id,
                                "rejected"
                            )
                        }
                    >
                        Reject
                    </button>

                </div>

            )}

        </div>
    );
}

export default ApplicantCard;