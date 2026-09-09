import { Link } from "react-router-dom";
import "./CSS/VolunteerSidebar.css";

function VolunteerSidebar() {

    return (
        <aside className="eventcrew-dashboard-sidebar">

            <div className="eventcrew-dashboard-side-card">

                <h3>
                    Quick Actions
                </h3>


                <Link to="/opportunities">
                    Browse Opportunities
                </Link>


                <Link to="/volunteer/history">
                    History
                </Link>


                <Link to="/volunteer/profile">
                    My Profile
                </Link>

            </div>

        </aside>
    );
}

export default VolunteerSidebar;