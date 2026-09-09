import API_URL from "../../config";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import DeleteAccountModal from "../../components/common/DeleteAccountModal";

import "./CSS/OrganizationProfile.css";


function OrganizationProfile() {
    const navigate = useNavigate();

    const [organization, setOrganization] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const user = JSON.parse(localStorage.getItem("user"));


    useEffect(() => {

        if (!user || user.role !== "organization") {
            return;
        }

        getOrganization();

    }, []);


    function getOrganization() {

        axios
            .get(
                `${API_URL}/api/organizations/${user.user_id}`
            )
            .then((response) => {

                setOrganization(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    }


    function handleDelete() {

        axios
            .delete(
                `${API_URL}/api/organizations/${user.user_id}`,
                {
                    headers: {
                        "x-role": "organization",
                        "organization": user.user_id
                    }
                }
            )
            .then(() => {

                localStorage.removeItem("user");

                alert(
                    "Account deleted successfully."
                );

                navigate("/");

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
                        "Could not delete account."
                    );

                }

            });

    }


    if (!user || user.role !== "organization") {

        return (
            <div className="eventcrew-org-profile-message">

                <h2>
                    Please login as an organization first.
                </h2>

            </div>
        );

    }


    if (!organization) {

        return (
            <div className="eventcrew-org-profile-message">

                <p>
                    Loading profile...
                </p>

            </div>
        );

    }


    return (
        <div className="eventcrew-org-profile-page">


            <section className="eventcrew-org-profile-header">

                <div className="eventcrew-org-profile-header-left">

                    {organization.logo_url ? (

                        <img
                            src={organization.logo_url}
                            alt={organization.organization_name}
                            className="eventcrew-org-profile-logo"
                        />

                    ) : (

                        <div className="eventcrew-org-profile-logo-placeholder">

                            {organization.organization_name
                                ? organization.organization_name.charAt(0)
                                : "O"}

                        </div>

                    )}


                    <div>

                        <h1>
                            {organization.organization_name}
                        </h1>


                        {organization.tagline && (

                            <p className="eventcrew-org-profile-tagline">
                                {organization.tagline}
                            </p>

                        )}

                    </div>

                </div>


                <div className="eventcrew-org-profile-actions">

                    <Link
                        to="/organization/profile/edit"
                        className="eventcrew-org-profile-edit"
                    >
                        Edit Profile
                    </Link>


                    <button
                        type="button"
                        className="eventcrew-org-profile-delete"
                        onClick={() => setShowDeleteModal(true)}
                    >
                        Delete Account
                    </button>

                </div>

            </section>


            <div className="eventcrew-org-profile-content">


                <section className="eventcrew-org-profile-card">

                    <h2>
                        About the organization
                    </h2>

                    <p className="eventcrew-org-profile-about">

                        {organization.about_organization ||
                            "No organization description added yet."}

                    </p>

                </section>


                <section className="eventcrew-org-profile-card">

                    <h2>
                        Organization details
                    </h2>


                    <div className="eventcrew-org-profile-detail">

                        <span>
                            Year established
                        </span>

                        <strong>
                            {organization.year_established ||
                                "Not provided"}
                        </strong>

                    </div>


                    <div className="eventcrew-org-profile-detail">

                        <span>
                            Organization size
                        </span>

                        <strong>
                            {organization.organization_size ||
                                "Not provided"}
                        </strong>

                    </div>


                    <div className="eventcrew-org-profile-detail">

                        <span>
                            City
                        </span>

                        <strong>
                            {organization.office_city ||
                                "Not provided"}
                        </strong>

                    </div>


                    <div className="eventcrew-org-profile-detail">

                        <span>
                            Area
                        </span>

                        <strong>
                            {organization.office_area ||
                                "Not provided"}
                        </strong>

                    </div>

                </section>


                <section className="eventcrew-org-profile-card">

                    <h2>
                        Contact information
                    </h2>


                    <div className="eventcrew-org-profile-detail">

                        <span>
                            Contact person
                        </span>

                        <strong>
                            {organization.contact_person ||
                                "Not provided"}
                        </strong>

                    </div>


                    <div className="eventcrew-org-profile-detail">

                        <span>
                            Job title
                        </span>

                        <strong>
                            {organization.contact_job_title ||
                                "Not provided"}
                        </strong>

                    </div>


                    <div className="eventcrew-org-profile-detail">

                        <span>
                            Email
                        </span>

                        <strong>
                            {organization.contact_email ||
                                organization.email}
                        </strong>

                    </div>


                    <div className="eventcrew-org-profile-detail">

                        <span>
                            Phone
                        </span>

                        <strong>
                            {organization.phone ||
                                "Not provided"}
                        </strong>

                    </div>

                </section>

            </div>


            <DeleteAccountModal
                show={showDeleteModal}
                onCancel={() => setShowDeleteModal(false)}
                onConfirm={handleDelete}
            />

        </div>
    );
}


export default OrganizationProfile;