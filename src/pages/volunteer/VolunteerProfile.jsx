import API_URL from "../../config";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import DeleteAccountModal from "../../components/common/DeleteAccountModal";

import "./CSS/VolunteerProfile.css";


function VolunteerProfile() {

    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user")
    );


    const [volunteer, setVolunteer] = useState(null);

    const [allSkills, setAllSkills] = useState([]);

    const [selectedSkillIds, setSelectedSkillIds] = useState([]);

    const [showDeleteModal, setShowDeleteModal] = useState(false);


    useEffect(() => {

        if (!user || user.role !== "volunteer") {
            return;
        }


        // Get volunteer profile
        axios
            .get(
                `${API_URL}/api/volunteers/${user.user_id}`,
                {
                    headers: {
                        "x-role": "volunteer"
                    }
                }
            )
            .then((response) => {

                setVolunteer(response.data);

            })
            .catch((error) => {

                console.log(error);

            });


        // Get all available skills
        axios
            .get(
                `${API_URL}/api/skills`
            )
            .then((response) => {

                setAllSkills(response.data);

            })
            .catch((error) => {

                console.log(error);

            });


        // Get volunteer selected skills
        axios
            .get(
                `${API_URL}/api/volunteers/${user.user_id}/skills`,
                {
                    headers: {
                        "x-role": "volunteer"
                    }
                }
            )
            .then((response) => {

                const ids = response.data.map(
                    (skill) => skill.skill_id
                );

                setSelectedSkillIds(ids);

            })
            .catch((error) => {

                console.log(error);

            });

    }, []);


    function handleSkillChange(skillId) {

        if (selectedSkillIds.includes(skillId)) {

            setSelectedSkillIds(
                selectedSkillIds.filter(
                    (id) => id !== skillId
                )
            );

        } else {

            setSelectedSkillIds([
                ...selectedSkillIds,
                skillId
            ]);

        }

    }


    function handleSaveSkills() {

        axios
            .put(
                `${API_URL}/api/volunteers/${user.user_id}/skills`,
                {
                    skill_ids: selectedSkillIds
                },
                {
                    headers: {
                        "x-role": "volunteer"
                    }
                }
            )
            .then(() => {

                alert("Skills updated successfully.");

            })
            .catch((error) => {

                console.log(error);

                alert("Could not update skills.");

            });

    }


    function handleDelete() {

        axios
            .delete(
                `${API_URL}/api/volunteers/${user.user_id}`,
                {
                    headers: {
                        "x-role": "volunteer",
                        "volunteer": user.user_id
                    }
                }
            )
            .then(() => {

                localStorage.removeItem("user");

                alert(
                    "Volunteer account deleted successfully."
                );

                navigate("/");

            })
            .catch((error) => {

                console.log(error);

                alert(
                    "Could not delete volunteer account."
                );

            });

    }


    if (!user || user.role !== "volunteer") {

        return (
            <div className="eventcrew-volunteer-profile-message">

                <h2>
                    Please login as a volunteer first.
                </h2>

            </div>
        );

    }


    if (!volunteer) {

        return (
            <div className="eventcrew-volunteer-profile-message">

                <p>
                    Loading profile...
                </p>

            </div>
        );

    }


    return (

        <div className="eventcrew-volunteer-profile-page">


            <div className="eventcrew-volunteer-profile-header">


                <div className="eventcrew-volunteer-profile-user">


                    <div className="eventcrew-volunteer-avatar">

                        {volunteer.first_name
                            ? volunteer.first_name.charAt(0).toUpperCase()
                            : "V"
                        }

                    </div>


                    <div>

                        <h1>
                            {volunteer.first_name} {volunteer.last_name}
                        </h1>

                        <p>
                            {volunteer.email}
                        </p>

                        <span>
                            Volunteer
                        </span>

                    </div>


                </div>


                <div className="eventcrew-profile-actions">


                    <Link
                        to="/volunteer/profile/edit"
                        className="eventcrew-edit-profile-button"
                    >
                        Edit Profile
                    </Link>


                    <button
                        type="button"
                        className="eventcrew-delete-profile-button"
                        onClick={() => setShowDeleteModal(true)}
                    >
                        Delete Account
                    </button>


                </div>


            </div>


            <div className="eventcrew-volunteer-profile-layout">


                <div className="eventcrew-volunteer-profile-main">


                    <section className="eventcrew-volunteer-profile-card">

                        <h2>
                            About Me
                        </h2>

                        <p className="eventcrew-volunteer-about">
                            {volunteer.about_me || "No information added."}
                        </p>

                    </section>


                    <section className="eventcrew-volunteer-profile-card">

                        <div className="eventcrew-skills-header">

                            <div>

                                <h2>
                                    My Skills
                                </h2>

                                <p>
                                    Select the skills that you are good at.
                                </p>

                            </div>

                        </div>


                        <div className="eventcrew-skills-grid">

                            {allSkills.length === 0 ? (

                                <p>
                                    No skills available.
                                </p>

                            ) : (

                                allSkills.map((skill) => (

                                    <label
                                        key={skill.skill_id}
                                        className={
                                            selectedSkillIds.includes(
                                                skill.skill_id
                                            )
                                                ? "eventcrew-skill-option selected"
                                                : "eventcrew-skill-option"
                                        }
                                    >

                                        <input
                                            type="checkbox"
                                            checked={
                                                selectedSkillIds.includes(
                                                    skill.skill_id
                                                )
                                            }
                                            onChange={() =>
                                                handleSkillChange(
                                                    skill.skill_id
                                                )
                                            }
                                        />

                                        <span className="eventcrew-skill-checkbox">
                                            ✓
                                        </span>

                                        <span>
                                            {skill.skill_name}
                                        </span>

                                    </label>

                                ))

                            )}

                        </div>


                        <button
                            type="button"
                            className="eventcrew-save-skills-button"
                            onClick={handleSaveSkills}
                        >
                            Save Skills
                        </button>

                    </section>


                    <section className="eventcrew-volunteer-profile-card">

                        <h2>
                            Personal Information
                        </h2>


                        <div className="eventcrew-volunteer-info-grid">


                            <div>

                                <span>
                                    First Name
                                </span>

                                <strong>
                                    {volunteer.first_name}
                                </strong>

                            </div>


                            <div>

                                <span>
                                    Last Name
                                </span>

                                <strong>
                                    {volunteer.last_name}
                                </strong>

                            </div>


                            <div>

                                <span>
                                    Email
                                </span>

                                <strong>
                                    {volunteer.email}
                                </strong>

                            </div>


                            <div>

                                <span>
                                    Phone
                                </span>

                                <strong>
                                    {volunteer.phone}
                                </strong>

                            </div>


                            <div>

                                <span>
                                    Date of Birth
                                </span>

                                <strong>

                                    {volunteer.date_of_birth
                                        ? new Date(
                                            volunteer.date_of_birth
                                        ).toLocaleDateString()
                                        : "-"
                                    }

                                </strong>

                            </div>


                            <div>

                                <span>
                                    City
                                </span>

                                <strong>
                                    {volunteer.city}
                                </strong>

                            </div>


                            <div>

                                <span>
                                    Area
                                </span>

                                <strong>
                                    {volunteer.area}
                                </strong>

                            </div>


                        </div>

                    </section>


                </div>


                <div className="eventcrew-volunteer-profile-sidebar">


                    <section className="eventcrew-volunteer-profile-card">

                        <h2>
                            Account
                        </h2>


                        <div className="eventcrew-account-detail">

                            <span>
                                Role
                            </span>

                            <strong>
                                Volunteer
                            </strong>

                        </div>


                        {volunteer.created_at && (

                            <div className="eventcrew-account-detail">

                                <span>
                                    Member Since
                                </span>

                                <strong>

                                    {new Date(
                                        volunteer.created_at
                                    ).toLocaleDateString()}

                                </strong>

                            </div>

                        )}


                    </section>


                    <section className="eventcrew-volunteer-profile-card">

                        <h2>
                            Quick Links
                        </h2>


                        <div className="eventcrew-profile-quick-links">

                            <Link to="/volunteer/dashboard">
                                Dashboard
                            </Link>

                            <Link to="/volunteer/history">
                                History
                            </Link>

                            <Link to="/opportunities">
                                Browse Opportunities
                            </Link>

                        </div>

                    </section>


                </div>


            </div>


            <DeleteAccountModal

                show={showDeleteModal}

                onCancel={() =>
                    setShowDeleteModal(false)
                }

                onConfirm={handleDelete}

            />


        </div>

    );

}


export default VolunteerProfile;