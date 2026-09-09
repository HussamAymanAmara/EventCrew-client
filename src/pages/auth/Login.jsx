import API_URL from "../../config";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./CSS/Login.css";

// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const navigate = useNavigate();

//     function handleLogin() {

//         axios
//             .post(
//                 `${API_URL}/api/auth/login`,
//                 {
//                     email: email,
//                     password: password
//                 }
//             )
//             .then((response) => {

//                 localStorage.setItem(
//                     "user",
//                     JSON.stringify(response.data.user)
//                 );

//                 if (response.data.user.role === "volunteer") {
//                     navigate("/volunteer/home");
//                 }

//                 if (response.data.user.role === "organization") {
//                     navigate("/organization/home");
//                 }
//             })
//             .catch((error) => {

//                 setError(error.response.data.message);

//             });
//     }

//     return (
//         <div className="eventcrew-login">

//             <div className="eventcrew-login-card">

//                 <h1>Login</h1>

//                 <p>Welcome back to EventCrew</p>

//                 <label>Email</label>

//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(event) =>
//                         setEmail(event.target.value)
//                     }
//                     placeholder="Enter your email"
//                 />

//                 <label>Password</label>

//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(event) =>
//                         setPassword(event.target.value)
//                     }
//                     placeholder="Enter your password"
//                 />

//                 {error && (
//                     <p className="eventcrew-login-error">
//                         {error}
//                     </p>
//                 )}

//                 <button onClick={handleLogin}>
//                     Login
//                 </button>

//             </div>

//         </div>
//     );
// }

// export default Login;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./CSS/Login.css";


function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(event) {

        event.preventDefault();


        axios
            .post(
                `${API_URL}/api/auth/login`,
                {
                    email: email,
                    password: password
                }
            )
            .then((response) => {

                const user =
                    response.data.user;


                localStorage.setItem(
                    "user",
                    JSON.stringify(user)
                );


                if (user.role === "volunteer") {

                    navigate(
                        "/volunteer/home"
                    );

                }
                else if (user.role === "organization") {

                    navigate(
                        "/organization/home"
                    );

                }

            })
            .catch((error) => {

                console.log(error);


                if (
                    error.response &&
                    error.response.data &&
                    error.response.data.message
                ) {

                    alert(
                        error.response.data.message
                    );

                }
                else {

                    alert(
                        "Could not login."
                    );

                }

            });

    }


    return (
        <div className="eventcrew-login-page">

            <div className="eventcrew-login-card">

                <h1>Login</h1>

                <p>
                    Sign in to your EventCrew account.
                </p>


                <form onSubmit={handleSubmit}>

                    <div className="eventcrew-login-group">

                        <label>Email</label>

                        <input
                            type="email"
                            value={email}
                            onChange={(event) =>
                                setEmail(
                                    event.target.value
                                )
                            }
                            required
                        />

                    </div>


                    <div className="eventcrew-login-group">

                        <label>Password</label>

                        <input
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(
                                    event.target.value
                                )
                            }
                            required
                        />

                    </div>


                    <div className="eventcrew-login-forgot">

                        <Link to="/forgot-password">
                            Forgot password?
                        </Link>

                    </div>


                    <button
                        type="submit"
                        className="eventcrew-login-button"
                    >
                        Login
                    </button>

                </form>


                <p className="eventcrew-login-register">

                    Don't have an account?{" "}

                    <Link to="/register">
                        Register
                    </Link>

                </p>

            </div>

        </div>
    );
}


export default Login;