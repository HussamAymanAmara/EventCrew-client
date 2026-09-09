import API_URL from "../../config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import VolunteerProfileForm from "../../components/forms/VolunteerProfileForm";

import "./CSS/EditVolunteerProfile.css";


function EditVolunteerProfile() {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        dateOfBirth: "",
        area: "",
        city: "",
        aboutMe: ""
    });


    useEffect(() => {

        if (!user || user.role !== "volunteer") {
            return;
        }

        getProfile();

    }, []);


    function getProfile() {

        axios
            .get(
                `${API_URL}/api/volunteers/${user.user_id}`
            )
            .then((response) => {

                const volunteer = response.data;


                setFormData({
                    firstName:
                        volunteer.first_name || "",

                    lastName:
                        volunteer.last_name || "",

                    phone:
                        volunteer.phone || "",

                    dateOfBirth:
                        volunteer.date_of_birth
                            ? volunteer.date_of_birth.slice(0, 10)
                            : "",

                    area:
                        volunteer.area || "",

                    city:
                        volunteer.city || "",

                    aboutMe:
                        volunteer.about_me || ""
                });

            })
            .catch((error) => {

                console.log(error);

            });

    }


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


        axios
            .put(
                `${API_URL}/api/volunteers/${user.user_id}`,
                {
                    first_name:
                        formData.firstName,

                    last_name:
                        formData.lastName,

                    phone:
                        formData.phone,

                    date_of_birth:
                        formData.dateOfBirth,

                    area:
                        formData.area,

                    city:
                        formData.city,

                    about_me:
                        formData.aboutMe
                },
                {
                    headers: {
                        "x-role": "volunteer"
                    }
                }
            )
            .then(() => {

                alert(
                    "Profile updated successfully."
                );

                navigate(
                    "/volunteer/profile"
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
                        "Could not update profile."
                    );

                }

            });

    }


    if (!user || user.role !== "volunteer") {

        return (
            <div className="eventcrew-edit-volunteer-message">

                <h2>
                    Please login as a volunteer first.
                </h2>

            </div>
        );

    }


    return (
        <div className="eventcrew-edit-volunteer-page">

            <div className="eventcrew-edit-volunteer-header">

                <h1>
                    Edit Profile
                </h1>

                <p>
                    Update your volunteer profile information.
                </p>

            </div>


            <div className="eventcrew-edit-volunteer-content">

                <VolunteerProfileForm
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />

            </div>

        </div>
    );
}


export default EditVolunteerProfile;