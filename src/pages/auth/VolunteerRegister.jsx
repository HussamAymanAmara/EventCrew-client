import API_URL from "../../config";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./CSS/VolunteerRegister.css";


function VolunteerRegister() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirm_password: "",
        first_name: "",
        last_name: "",
        phone: "",
        date_of_birth: "",
        area: "",
        city: "",
        about_me: ""
    });


    function handleChange(event) {

        const {
            name,
            value
        } = event.target;


        setFormData({
            ...formData,
            [name]: value
        });

    }


    function handleSubmit(event) {

        event.preventDefault();


        if (
            formData.password !==
            formData.confirm_password
        ) {

            alert("Passwords do not match.");

            return;

        }


        axios
            .post(
                `${API_URL}/api/auth/signup`,
                {
                    email:
                        formData.email,

                    password:
                        formData.password,

                    role:
                        "volunteer",

                    first_name:
                        formData.first_name,

                    last_name:
                        formData.last_name,

                    phone:
                        formData.phone,

                    date_of_birth:
                        formData.date_of_birth,

                    area:
                        formData.area,

                    city:
                        formData.city,

                    about_me:
                        formData.about_me
                }
            )
            .then((response) => {

                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );


                alert(
                    "Account created successfully."
                );


                navigate(
                    "/volunteer/home"
                );

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
                        "Could not create account."
                    );

                }

            });

    }


    return (
        <div className="eventcrew-volunteer-register-page">

            <div className="eventcrew-volunteer-register-card">

                <h1>
                    Volunteer Registration
                </h1>

                <p>
                    Create your EventCrew volunteer account.
                </p>


                <form onSubmit={handleSubmit}>

                    <div className="eventcrew-register-row">

                        <div className="eventcrew-register-group">

                            <label>
                                First name
                            </label>

                            <input
                                type="text"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="eventcrew-register-group">

                            <label>
                                Last name
                            </label>

                            <input
                                type="text"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>


                    <div className="eventcrew-register-group">

                        <label>
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    <div className="eventcrew-register-row">

                        <div className="eventcrew-register-group">

                            <label>
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="eventcrew-register-group">

                            <label>
                                Confirm password
                            </label>

                            <input
                                type="password"
                                name="confirm_password"
                                value={formData.confirm_password}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>


                    <div className="eventcrew-register-row">

                        <div className="eventcrew-register-group">

                            <label>
                                Phone
                            </label>

                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="eventcrew-register-group">

                            <label>
                                Date of birth
                            </label>

                            <input
                                type="date"
                                name="date_of_birth"
                                value={formData.date_of_birth}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>


                    <div className="eventcrew-register-row">

                        <div className="eventcrew-register-group">

                            <label>
                                City
                            </label>

                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="eventcrew-register-group">

                            <label>
                                Area
                            </label>

                            <input
                                type="text"
                                name="area"
                                value={formData.area}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>


                    <div className="eventcrew-register-group">

                        <label>
                            About me
                        </label>

                        <textarea
                            name="about_me"
                            value={formData.about_me}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        className="eventcrew-register-button"
                    >
                        Create Account
                    </button>

                </form>


                <p className="eventcrew-register-bottom">

                    Already have an account?{" "}

                    <Link to="/login">
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
}


export default VolunteerRegister;