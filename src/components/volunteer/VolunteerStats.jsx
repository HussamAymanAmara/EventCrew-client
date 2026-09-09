import "./CSS/VolunteerStats.css";

function VolunteerStats(props) {
    const applications = props.applications;

    let approved = 0;
    let pending = 0;
    let rejected = 0;


    for (let i = 0; i < applications.length; i++) {

        if (
            applications[i].status === "approved" ||
            applications[i].status === "confirmed"
        ) {
            approved++;
        }


        if (
            applications[i].status === "pending" ||
            applications[i].status === "under_review"
        ) {
            pending++;
        }


        if (applications[i].status === "rejected") {
            rejected++;
        }

    }


    return (
        <div className="eventcrew-dashboard-stats">

            <div className="eventcrew-dashboard-stat">

                <span>
                    Total Applications
                </span>

                <h2>
                    {applications.length}
                </h2>

            </div>


            <div className="eventcrew-dashboard-stat">

                <span>
                    Approved
                </span>

                <h2>
                    {approved}
                </h2>

            </div>


            <div className="eventcrew-dashboard-stat">

                <span>
                    Pending
                </span>

                <h2>
                    {pending}
                </h2>

            </div>


            <div className="eventcrew-dashboard-stat">

                <span>
                    Rejected
                </span>

                <h2>
                    {rejected}
                </h2>

            </div>

        </div>
    );
}

export default VolunteerStats;