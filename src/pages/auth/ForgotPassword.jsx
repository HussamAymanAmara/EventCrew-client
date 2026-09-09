import { Link } from "react-router-dom";

import "./CSS/ForgotPassword.css";


function ForgotPassword() {

    return (
        <div className="eventcrew-forgot-page">

            <div className="eventcrew-forgot-card">

                <h1>Forgot Password</h1>

                <p>
                    Password recovery is not available yet.
                </p>

                <p>
                    This feature will be available soon.
                </p>


                <Link
                    to="/login"
                    className="eventcrew-forgot-button"
                >
                    Back to Login
                </Link>

            </div>

        </div>
    );
}


export default ForgotPassword;