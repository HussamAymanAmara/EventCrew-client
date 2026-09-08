import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CSS/Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function handleLogin() {

        axios
            .post(
                "http://localhost:5000/api/auth/login",
                {
                    email: email,
                    password: password
                }
            )
            .then((response) => {

                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );

                if (response.data.user.role === "volunteer") {
                    navigate("/volunteer/home");
                }

                if (response.data.user.role === "organization") {
                    navigate("/organization/home");
                }
            })
            .catch((error) => {

                setError(error.response.data.message);

            });
    }

    return (
        <div className="eventcrew-login">

            <div className="eventcrew-login-card">

                <h1>Login</h1>

                <p>Welcome back to EventCrew</p>

                <label>Email</label>

                <input
                    type="email"
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                    placeholder="Enter your email"
                />

                <label>Password</label>

                <input
                    type="password"
                    value={password}
                    onChange={(event) =>
                        setPassword(event.target.value)
                    }
                    placeholder="Enter your password"
                />

                {error && (
                    <p className="eventcrew-login-error">
                        {error}
                    </p>
                )}

                <button onClick={handleLogin}>
                    Login
                </button>

            </div>

        </div>
    );
}

export default Login;