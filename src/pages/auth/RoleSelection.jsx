import { Link } from "react-router-dom";

import "./CSS/RoleSelection.css";


function RoleSelection() {

    return (
        <div className="eventcrew-role-page">

            <div className="eventcrew-role-card">

                <h1>Create Account</h1>

                <p>
                    Choose how you want to use EventCrew.
                </p>


                <div className="eventcrew-role-options">

                    <Link
                        to="/register/volunteer"
                        className="eventcrew-role-option"
                    >

                        <h2>Volunteer</h2>

                        <p>
                            Join opportunities and participate in events.
                        </p>

                        <span>
                            Register as Volunteer
                        </span>

                    </Link>


                    <Link
                        to="/register/organization"
                        className="eventcrew-role-option"
                    >

                        <h2>Organization</h2>

                        <p>
                            Create opportunities and manage volunteers.
                        </p>

                        <span>
                            Register as Organization
                        </span>

                    </Link>

                </div>


                <p className="eventcrew-role-login">

                    Already have an account?{" "}

                    <Link to="/login">
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
}


export default RoleSelection;