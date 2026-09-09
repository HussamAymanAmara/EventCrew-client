import API_URL from "../../config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import OpportunityForm from "../../components/forms/OpportunityForm";

import "./CSS/CreateOpportunity.css";


function CreateOpportunity() {

    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user")
    );


    const [categories, setCategories] = useState([]);

    const [skills, setSkills] = useState([]);

    const [selectedSkillIds, setSelectedSkillIds] = useState([]);


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

        axios
            .get(
                `${API_URL}/api/categories`
            )
            .then((response) => {

                setCategories(response.data);

            })
            .catch((error) => {

                console.log(error);

            });


        axios
            .get(
                `${API_URL}/api/skills`
            )
            .then((response) => {

                setSkills(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    }, []);


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


    async function handleSubmit(event) {

        event.preventDefault();


        if (
            !user ||
            user.role !== "organization"
        ) {

            alert(
                "Please login as an organization first."
            );

            return;

        }


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
                    Number(formData.volunteers_needed),

                transport_notes:
                    formData.transport_notes || null,

                additional_requirements:
                    formData.additional_requirements || null

            };


            const opportunityResponse =
                await axios.post(
                    `${API_URL}/api/opportunities`,
                    dataToSend,
                    {
                        headers: {
                            "x-role": "organization",
                            "organization": user.user_id
                        }
                    }
                );


            const opportunityId =
                opportunityResponse
                    .data
                    .opportunity
                    .opportunity_id;


            const selectedSkills =
                selectedSkillIds.map(
                    (skillId) => ({
                        skill_id: skillId,
                        is_required: true
                    })
                );


            await axios.put(
                `${API_URL}/api/opportunities/${opportunityId}/skills`,
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
                image_url &&
                image_url.trim() !== ""
            ) {

                await axios.post(
                    `${API_URL}/api/opportunities/${opportunityId}/images`,
                    {
                        image_url: image_url,
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


            alert(
                "Opportunity created successfully."
            );


            navigate(
                "/organization/dashboard"
            );


        } catch (error) {

            console.log(error);


            alert(
                error.response?.data?.message ||
                "Could not create opportunity."
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


    return (

        <div className="eventcrew-create-opportunity-page">


            <div className="eventcrew-create-opportunity-header">

                <h1>
                    Create Opportunity
                </h1>

                <p>
                    Fill in the information below to create
                    a new volunteer opportunity.
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
                submitText="Create Opportunity"
            />


        </div>

    );

}


export default CreateOpportunity;