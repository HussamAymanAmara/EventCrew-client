import API_URL from "../../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ApplicationCard from "../../components/volunteer/ApplicationCard";
import CompletedActivityCard from "../../components/volunteer/CompletedActivityCard";
import VolunteerSidebar from "../../components/volunteer/VolunteerSidebar";
import VolunteerStats from "../../components/volunteer/VolunteerStats";

import "./CSS/VolunteerDashboard.css";


function VolunteerDashboard() {
    const [applications, setApplications] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));


    function getApplications() {

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

    }


    useEffect(() => {

        if (!user) {
            return;
        }

        getApplications();

    }, []);


    function handleWithdraw(opportunityId) {

        axios
            .put(
                `${API_URL}/api/applications/${user.user_id}/${opportunityId}/withdraw`,
                {},
                {
                    headers: {
                        "x-role": "volunteer"
                    }
                }
            )
            .then(() => {

                alert("Application withdrawn successfully.");

                getApplications();

            })
            .catch((error) => {

                console.log(error);

            });

    }


    if (!user || user.role !== "volunteer") {

        return (
            <div className="eventcrew-dashboard-message">

                <h2>
                    Please login as a volunteer first.
                </h2>

            </div>
        );

    }


    const today = new Date();


    const upcomingApplications = applications.filter((application) => {

        const eventDate =
            new Date(application.event_date);


        return (
            application.status === "pending" ||

            application.status === "under_review" ||

            (
                (
                    application.status === "approved" ||
                    application.status === "confirmed"
                ) &&
                eventDate >= today
            )
        );

    });


    const historyApplications = applications.filter((application) => {

        const eventDate =
            new Date(application.event_date);


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
        <div className="eventcrew-volunteer-dashboard">


            <div className="eventcrew-dashboard-header">

                <div>

                    <h1>
                        Volunteer Dashboard
                    </h1>

                    <p>
                        Welcome back
                    </p>

                </div>


                <Link to="/volunteer/profile">
                    View Profile
                </Link>

            </div>


            <VolunteerStats
                applications={applications}
            />


            <div className="eventcrew-dashboard-layout">


                <main className="eventcrew-dashboard-main">


                    <section className="eventcrew-dashboard-section">

                        <div className="eventcrew-dashboard-section-header">

                            <h2>
                                Upcoming Opportunities
                            </h2>


                            <Link to="/opportunities">
                                Find More
                            </Link>

                        </div>


                        {upcomingApplications.length === 0 ? (

                            <p className="eventcrew-dashboard-empty">
                                No upcoming opportunities.
                            </p>

                        ) : (

                            upcomingApplications.map((application) => (

                                <ApplicationCard
                                    key={application.application_id}
                                    application={application}
                                    showWithdraw={true}
                                    onWithdraw={handleWithdraw}
                                />

                            ))

                        )}

                    </section>


                    <section className="eventcrew-dashboard-section">

                        <div className="eventcrew-dashboard-section-header">

                            <h2>
                                History
                            </h2>


                            <Link to="/volunteer/history">
                                View all
                            </Link>

                        </div>


                        {historyApplications.length === 0 ? (

                            <p className="eventcrew-dashboard-empty">
                                No history available yet.
                            </p>

                        ) : (

                            historyApplications.map((application) => (

                                <CompletedActivityCard
                                    key={application.application_id}
                                    application={application}
                                />

                            ))

                        )}

                    </section>


                </main>


                <VolunteerSidebar />


            </div>

        </div>
    );
}

export default VolunteerDashboard;