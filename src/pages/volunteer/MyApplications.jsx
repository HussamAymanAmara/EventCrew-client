import { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/MyApplications.css";

function MyApplications() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        axios
            .get(
                `http://localhost:5000/api/applications/volunteer/${user.user_id}`,
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

    return (
        <div className="eventcrew-my-applications">

            <h1>My Applications</h1>

            {applications.length === 0 ? (
                <p>You have not applied to any opportunities yet.</p>
            ) : (
                applications.map((application) => (
                    <div
                        className="eventcrew-application-card"
                        key={application.application_id}
                    >
                        <h2>{application.title}</h2>

                        <p>
                            <strong>Date:</strong>{" "}
                            {new Date(application.event_date).toLocaleDateString()}
                        </p>

                        <p>
                            <strong>Time:</strong>{" "}
                            {application.start_time}
                        </p>

                        <p>
                            <strong>Location:</strong>{" "}
                            {application.venue_name}, {application.city}
                        </p>

                        <p>
                            <strong>Compensation:</strong>{" "}
                            {application.compensation_type}
                        </p>

                        <p>
                            <strong>Status:</strong>{" "}
                            {application.status}
                        </p>
                    </div>
                ))
            )}

        </div>
    );
}

export default MyApplications;