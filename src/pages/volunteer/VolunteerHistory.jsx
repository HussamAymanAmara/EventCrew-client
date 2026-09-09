import API_URL from "../../config";
import { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/VolunteerHistory.css";

function VolunteerHistory() {
    const [applications, setApplications] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {

        if (!user) {
            return;
        }

        axios
            .get(
                `${API_URL}/api/applications/volunteer/${user.user_id}`,
                {
                    headers: {
                        "x-role": "volunteer"
                    }
                }
            )
            .then((response) => {
                setApplications(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);


    if (!user || user.role !== "volunteer") {
        return (
            <div className="eventcrew-history-message">
                <h2>Please login as a volunteer first.</h2>
            </div>
        );
    }


    const today = new Date();


    const history = applications.filter((application) => {

        const eventDate = new Date(application.event_date);

        return (
            application.status === "rejected" ||
            (
                (
                    application.status === "approved" ||
                    application.status === "confirmed"
                ) &&
                eventDate < today
            )
        );

    });


    return (
        <div className="eventcrew-volunteer-history">

            <div className="eventcrew-history-header">

                <h1>History</h1>

                <p>
                    View your previous volunteer opportunities and applications.
                </p>

            </div>


            {history.length === 0 ? (

                <div className="eventcrew-history-empty">
                    <p>No history available yet.</p>
                </div>

            ) : (

                history.map((application) => (

                    <div
                        className="eventcrew-history-card"
                        key={application.application_id}
                    >

                        <div className="eventcrew-history-info">

                            <h2>
                                {application.title}
                            </h2>

                            <p>
                                <strong>Date:</strong>{" "}
                                {new Date(
                                    application.event_date
                                ).toLocaleDateString()}
                            </p>

                            <p>
                                <strong>Location:</strong>{" "}
                                {application.venue_name}, {application.city}
                            </p>

                            <p>
                                <strong>Time:</strong>{" "}
                                {application.start_time}
                            </p>

                        </div>


                        {application.status === "rejected" ? (

                            <span className="eventcrew-history-status rejected">
                                Rejected
                            </span>

                        ) : (

                            <span className="eventcrew-history-status finished">
                                Finished
                            </span>

                        )}

                    </div>

                ))

            )}

        </div>
    );
}

export default VolunteerHistory;