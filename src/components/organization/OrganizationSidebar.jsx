import { Link } from "react-router-dom";
import "./CSS/OrganizationSidebar.css";

function OrganizationSidebar() {

    return (
        <aside className="eventcrew-org-sidebar">

            <div className="eventcrew-org-side-card">

                <h3>Quick Actions</h3>

                <Link to="/organization/create-opportunity">
                    Create Opportunity
                </Link>

                <Link to="/organization/applications">
                    Manage Applications
                </Link>

                <Link to="/organization/profile">
                    Organization Profile
                </Link>

            </div>

        </aside>
    );
}

export default OrganizationSidebar;