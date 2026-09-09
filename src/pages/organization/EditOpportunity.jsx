import API_URL from "../../config";
import { useEffect, useState } from "react";
import {
    useNavigate,
    useParams
} from "react-router-dom";
import axios from "axios";

import OpportunityForm from "../../components/forms/OpportunityForm";

import "./CSS/CreateOpportunity.css";


function EditOpportunity() {

    const navigate = useNavigate();

    const { id } = useParams();


    const user = JSON.parse(
        localStorage.getItem("user")
    );


    const [categories, setCategories] = useState([]);

    const [skills, setSkills] = useState([]);

    const [selectedSkillIds, setSelectedSkillIds] = useState([]);

    const [originalImageUrl, setOriginalImageUrl] = useState("");

    const [loading, setLoading] = useState(true);


    const [formData, setFormData] = useState({

        category_id: "",

        title: "",

        description: "",

        opportunity_type: "one-time",

        compensation_type: "unpaid",

        compensation_amount: "",

        payment_schedule: "",

        event_date: "",

        start_time: "",

        end_time: "",

        application_deadline: "",

        venue_name: "",

        street_address: "",

        building_number: "",

        city: "",

        transport_notes: "",

        volunteers_needed: "",

        minimum_age: "",

        additional_requirements: "",

        listing_status: "open",

        image_url: ""

    });


    useEffect(() => {

        if (
            !user ||
            user.role !== "organization"
        ) {

            setLoading(false);

            return;

        }


        async function loadOpportunity() {

            try {

                const categoriesResponse =
                    await axios.get(
                        `${API_URL}/api/categories`
                    );


                setCategories(
                    categoriesResponse.data
                );


                const skillsResponse =
                    await axios.get(
                        `${API_URL}/api/skills`
                    );


                setSkills(
                    skillsResponse.data
                );


                const opportunityResponse =
                    await axios.get(
                        `${API_URL}/api/opportunities/${id}`
                    );


                const opportunity =
                    opportunityResponse.data;


                if (
                    Number(opportunity.organization_id) !==
                    Number(user.user_id)
                ) {

                    alert(
                        "You cannot edit this opportunity."
                    );

                    navigate(
                        "/organization/dashboard"
                    );

                    return;

                }


                setFormData({

                    category_id:
                        opportunity.category_id || "",

                    title:
                        opportunity.title || "",

                    description:
                        opportunity.description || "",

                    opportunity_type:
                        opportunity.opportunity_type || "one-time",

                    compensation_type:
                        opportunity.compensation_type || "unpaid",

                    compensation_amount:
                        opportunity.compensation_amount ?? "",

                    payment_schedule:
                        opportunity.payment_schedule || "",

                    event_date:
                        opportunity.event_date
                            ? opportunity.event_date.split("T")[0]
                            : "",

                    start_time:
                        opportunity.start_time
                            ? opportunity.start_time.slice(0, 5)
                            : "",

                    end_time:
                        opportunity.end_time
                            ? opportunity.end_time.slice(0, 5)
                            : "",

                    application_deadline:
                        opportunity.application_deadline
                            ? opportunity.application_deadline.split("T")[0]
                            : "",

                    venue_name:
                        opportunity.venue_name || "",

                    street_address:
                        opportunity.street_address || "",

                    building_number:
                        opportunity.building_number || "",

                    city:
                        opportunity.city || "",

                    transport_notes:
                        opportunity.transport_notes || "",

                    volunteers_needed:
                        opportunity.volunteers_needed || "",

                    minimum_age:
                        opportunity.minimum_age ?? "",

                    additional_requirements:
                        opportunity.additional_requirements || "",

                    listing_status:
                        opportunity.listing_status || "open",

                    image_url: ""

                });


                const opportunitySkillsResponse =
                    await axios.get(
                        `${API_URL}/api/opportunities/${id}/skills`
                    );


                const skillIds =
                    opportunitySkillsResponse.data.map(
                        (skill) =>
                            Number(skill.skill_id)
                    );


                setSelectedSkillIds(
                    skillIds
                );


                const imagesResponse =
                    await axios.get(
                        `${API_URL}/api/opportunities/${id}/images`
                    );


                if (
                    imagesResponse.data.length > 0
                ) {

                    const currentImageUrl =
                        imagesResponse.data[0].image_url;


                    setOriginalImageUrl(
                        currentImageUrl
                    );


                    setFormData((currentData) => ({

                        ...currentData,

                        image_url:
                            currentImageUrl

                    }));

                }


            } catch (error) {

                console.log(error);


                alert(
                    "Could not load opportunity."
                );


            } finally {

                setLoading(false);

            }

        }


        loadOpportunity();


    }, [id]);


    function handleChange(event) {

        const {
            name,
            value
        } = event.target;


        if (
            name === "compensation_type" &&
            value === "unpaid"
        ) {

            setFormData({
                ...formData,

                compensation_type: value,

                compensation_amount: "",

                payment_schedule: ""
            });

            return;

        }


        setFormData({
            ...formData,
            [name]: value
        });

    }


    function handleSkillChange(skillId) {

        if (
            selectedSkillIds.includes(skillId)
        ) {

            setSelectedSkillIds(
                selectedSkillIds.filter(
                    (selectedId) =>
                        selectedId !== skillId
                )
            );

        } else {

            setSelectedSkillIds([
                ...selectedSkillIds,
                skillId
            ]);

        }

    }


    async function handleSubmit(event) {

        event.preventDefault();


        try {

            const {
                image_url,
                ...opportunityData
            } = formData;


            const dataToSend = {

                ...opportunityData,

                organization_id:
                    user.user_id,

                category_id:
                    Number(formData.category_id),

                compensation_amount:
                    formData.compensation_type === "paid" &&
                        formData.compensation_amount !== ""
                        ? Number(
                            formData.compensation_amount
                        )
                        : null,

                payment_schedule:
                    formData.compensation_type === "paid"
                        ? formData.payment_schedule || null
                        : null,

                application_deadline:
                    formData.application_deadline || null,

                minimum_age:
                    formData.minimum_age !== ""
                        ? Number(formData.minimum_age)
                        : null,

                volunteers_needed:
                    Number(
                        formData.volunteers_needed
                    ),

                transport_notes:
                    formData.transport_notes || null,

                additional_requirements:
                    formData.additional_requirements || null

            };


            await axios.put(
                `${API_URL}/api/opportunities/${id}`,
                dataToSend,
                {
                    headers: {
                        "x-role": "organization",
                        "organization": user.user_id
                    }
                }
            );


            const selectedSkills =
                selectedSkillIds.map(
                    (skillId) => ({

                        skill_id: skillId,

                        is_required: true

                    })
                );


            await axios.put(
                `${API_URL}/api/opportunities/${id}/skills`,
                {
                    skills: selectedSkills
                },
                {
                    headers: {
                        "x-role": "organization",
                        "organization": user.user_id
                    }
                }
            );


            if (
                formData.image_url !==
                originalImageUrl
            ) {

                if (
                    originalImageUrl !== ""
                ) {

                    await axios.delete(
                        `${API_URL}/api/opportunities/${id}/images`,
                        {
                            headers: {
                                "x-role": "organization",
                                "organization": user.user_id
                            },

                            data: {
                                image_url:
                                    originalImageUrl
                            }
                        }
                    );

                }


                if (
                    formData.image_url.trim() !== ""
                ) {

                    await axios.post(
                        `${API_URL}/api/opportunities/${id}/images`,
                        {
                            image_url:
                                formData.image_url,

                            is_primary: true,

                            display_order: 1
                        },
                        {
                            headers: {
                                "x-role": "organization",
                                "organization": user.user_id
                            }
                        }
                    );

                }

            }


            alert(
                "Opportunity updated successfully."
            );


            navigate(
                "/organization/dashboard"
            );


        } catch (error) {

            console.log(error);


            alert(
                error.response?.data?.message ||
                "Could not update opportunity."
            );

        }

    }


    if (
        !user ||
        user.role !== "organization"
    ) {

        return (

            <div className="eventcrew-create-opportunity-message">

                <h2>
                    Please login as an organization first.
                </h2>

            </div>

        );

    }


    if (loading) {

        return (

            <div className="eventcrew-create-opportunity-message">

                <h2>
                    Loading opportunity...
                </h2>

            </div>

        );

    }


    return (

        <div className="eventcrew-create-opportunity-page">


            <div className="eventcrew-create-opportunity-header">

                <h1>
                    Edit Opportunity
                </h1>

                <p>
                    Update the opportunity information
                    and required skills.
                </p>

            </div>


            <OpportunityForm
                formData={formData}
                categories={categories}
                skills={skills}
                selectedSkillIds={selectedSkillIds}
                onChange={handleChange}
                onSkillChange={handleSkillChange}
                onSubmit={handleSubmit}
                submitText="Save Changes"
            />


        </div>

    );

}


export default EditOpportunity;