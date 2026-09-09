import API_URL from "../../config";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import OrganizationProfileForm from "../../components/forms/OrganizationProfileForm";

import "./CSS/EditOrganizationProfile.css";


function EditOrganizationProfile() {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));


    const [formData, setFormData] = useState({
        organization_name: "",
        organization_type_id: "",
        logo_url: "",
        tagline: "",
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


    useEffect(() => {

        if (!user || user.role !== "organization") {
            return;
        }

        getProfile();

    }, []);


    function getProfile() {

        axios
            .get(
                `${API_URL}/api/organizations/${user.user_id}`
            )
            .then((response) => {

                const organization = response.data;

                setFormData({
                    organization_name:
                        organization.organization_name || "",

                    organization_type_id:
                        organization.organization_type_id || "",

                    logo_url:
                        organization.logo_url || "",

                    tagline:
                        organization.tagline || "",

                    organization_size:
                        organization.organization_size || "",

                    about_organization:
                        organization.about_organization || "",

                    contact_person:
                        organization.contact_person || "",

                    contact_job_title:
                        organization.contact_job_title || "",

                    contact_email:
                        organization.contact_email || "",

                    phone:
                        organization.phone || "",

                    website:
                        organization.website || "",

                    office_street_address:
                        organization.office_street_address || "",

                    office_city:
                        organization.office_city || "",

                    office_area:
                        organization.office_area || ""
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
                `${API_URL}/api/organizations/${user.user_id}`,
                {
                    organization_name:
                        formData.organization_name,

                    organization_type_id:
                        Number(formData.organization_type_id),

                    logo_url:
                        formData.logo_url || null,

                    tagline:
                        formData.tagline,

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
                },
                {
                    headers: {
                        "x-role": "organization",
                        "organization": user.user_id
                    }
                }
            )
            .then(() => {

                alert(
                    "Organization profile updated successfully."
                );

                navigate(
                    "/organization/profile"
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
                        "Could not update organization profile."
                    );

                }

            });

    }


    if (!user || user.role !== "organization") {

        return (
            <div className="eventcrew-edit-org-message">

                <h2>
                    Please login as an organization first.
                </h2>

            </div>
        );

    }


    return (
        <div className="eventcrew-edit-org-page">

            <Link
                to="/organization/profile"
                className="eventcrew-edit-org-back"
            >
                ← Back to Profile
            </Link>


            <div className="eventcrew-edit-org-header">

                <h1>
                    Edit Organization Profile
                </h1>

                <p>
                    Keep your profile up to date to attract more volunteers
                </p>

            </div>


            <OrganizationProfileForm
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />

        </div>
    );
}


export default EditOrganizationProfile;