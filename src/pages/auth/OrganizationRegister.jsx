import API_URL from "../../config";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./CSS/OrganizationRegister.css";


function OrganizationRegister() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirm_password: "",
        organization_name: "",
        organization_type_id: "",
        tagline: "",
        year_established: "",
        organization_size: "",
        about_organization: "",
        contact_person: "",
        contact_job_title: "",
        contact_email: "",
        phone: "",
        website: "",
        office_street_address: "",
        office_city: "",
        office_area: ""
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
                        "organization",

                    organization_name:
                        formData.organization_name,

                    organization_type_id:
                        Number(formData.organization_type_id),

                    tagline:
                        formData.tagline,

                    year_established:
                        Number(formData.year_established),

                    organization_size:
                        formData.organization_size,

                    about_organization:
                        formData.about_organization,

                    contact_person:
                        formData.contact_person,

                    contact_job_title:
                        formData.contact_job_title,

                    contact_email:
                        formData.contact_email,

                    phone:
                        formData.phone,

                    website:
                        formData.website || null,

                    office_street_address:
                        formData.office_street_address,

                    office_city:
                        formData.office_city,

                    office_area:
                        formData.office_area
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
                    "/organization/home"
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
        <div className="eventcrew-organization-register-page">

            <div className="eventcrew-organization-register-card">

                <h1>
                    Organization Registration
                </h1>

                <p>
                    Create your EventCrew organization account.
                </p>


                <form onSubmit={handleSubmit}>


                    <h2>
                        Account information
                    </h2>


                    <div className="eventcrew-org-register-group">

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


                    <div className="eventcrew-org-register-row">

                        <div className="eventcrew-org-register-group">

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


                        <div className="eventcrew-org-register-group">

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


                    <h2>
                        Organization information
                    </h2>


                    <div className="eventcrew-org-register-group">

                        <label>
                            Organization name
                        </label>

                        <input
                            type="text"
                            name="organization_name"
                            value={formData.organization_name}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    <div className="eventcrew-org-register-group">

                        <label>
                            Organization type
                        </label>

                        <select
                            name="organization_type_id"
                            value={formData.organization_type_id}
                            onChange={handleChange}
                            required
                        >

                            <option value="">
                                Select organization type
                            </option>

                            <option value="1">
                                NGO / Non-profit
                            </option>

                            <option value="2">
                                Marketing Agency
                            </option>

                            <option value="3">
                                Educational Institution
                            </option>

                            <option value="4">
                                Healthcare Organization
                            </option>

                            <option value="5">
                                Corporate / Business
                            </option>

                            <option value="6">
                                Government Organization
                            </option>

                            <option value="7">
                                Community Organization
                            </option>

                            <option value="8">
                                Event Management Company
                            </option>

                        </select>

                    </div>


                    <div className="eventcrew-org-register-row">

                        <div className="eventcrew-org-register-group">

                            <label>
                                Tagline
                            </label>

                            <input
                                type="text"
                                name="tagline"
                                value={formData.tagline}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="eventcrew-org-register-group">

                            <label>
                                Year established
                            </label>

                            <input
                                type="number"
                                name="year_established"
                                value={formData.year_established}
                                onChange={handleChange}
                                step="1"
                                required
                            />

                        </div>

                    </div>


                    <div className="eventcrew-org-register-group">

                        <label>
                            Organization size
                        </label>

                        <input
                            type="text"
                            name="organization_size"
                            value={formData.organization_size}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    <div className="eventcrew-org-register-group">

                        <label>
                            About organization
                        </label>

                        <textarea
                            name="about_organization"
                            value={formData.about_organization}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    <h2>
                        Contact information
                    </h2>


                    <div className="eventcrew-org-register-row">

                        <div className="eventcrew-org-register-group">

                            <label>
                                Contact person
                            </label>

                            <input
                                type="text"
                                name="contact_person"
                                value={formData.contact_person}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="eventcrew-org-register-group">

                            <label>
                                Job title
                            </label>

                            <input
                                type="text"
                                name="contact_job_title"
                                value={formData.contact_job_title}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>


                    <div className="eventcrew-org-register-row">

                        <div className="eventcrew-org-register-group">

                            <label>
                                Contact email
                            </label>

                            <input
                                type="email"
                                name="contact_email"
                                value={formData.contact_email}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="eventcrew-org-register-group">

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

                    </div>


                    <div className="eventcrew-org-register-group">

                        <label>
                            Website
                        </label>

                        <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                        />

                    </div>


                    <h2>
                        Office location
                    </h2>


                    <div className="eventcrew-org-register-group">

                        <label>
                            Street address
                        </label>

                        <input
                            type="text"
                            name="office_street_address"
                            value={formData.office_street_address}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    <div className="eventcrew-org-register-row">

                        <div className="eventcrew-org-register-group">

                            <label>
                                City
                            </label>

                            <input
                                type="text"
                                name="office_city"
                                value={formData.office_city}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="eventcrew-org-register-group">

                            <label>
                                Area
                            </label>

                            <input
                                type="text"
                                name="office_area"
                                value={formData.office_area}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>


                    <button
                        type="submit"
                        className="eventcrew-org-register-button"
                    >
                        Create Account
                    </button>

                </form>


                <p className="eventcrew-org-register-bottom">

                    Already have an account?{" "}

                    <Link to="/login">
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
}


export default OrganizationRegister;