import API_URL from "../../config";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import DeleteAccountModal from "../common/DeleteAccountModal";

import "./CSS/OrganizationOpportunityCard.css";


function OrganizationOpportunityCard(props) {
    const opportunity = props.opportunity;

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const user = JSON.parse(localStorage.getItem("user"));


    function handleDelete() {

        axios
            .delete(
                `${API_URL}/api/opportunities/${opportunity.opportunity_id}`,
                {
                    headers: {
                        "x-role": "organization",
                        "organization": user.user_id
                    }
                }
            )
            .then(() => {

                alert(
                    "Opportunity deleted successfully."
                );

                setShowDeleteModal(false);

                window.location.reload();

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
                        "Could not delete opportunity."
                    );

                }

            });

    }


    return (
        <div className="eventcrew-org-opportunity-card">


            <div className="eventcrew-org-opportunity-info">

                <h3>
                    {opportunity.title}
                </h3>


                <p>
                    {new Date(
                        opportunity.event_date
                    ).toLocaleDateString()}
                    {" . "}
                    {opportunity.city}
                </p>

            </div>


            <div className="eventcrew-org-opportunity-actions">


                <span
                    className={`eventcrew-org-opportunity-status ${opportunity.listing_status}`}
                >
                    {opportunity.listing_status}
                </span>


                <Link
                    to={`/opportunities/${opportunity.opportunity_id}`}
                    className="eventcrew-org-opportunity-view"
                >
                    View
                </Link>


                {props.showEdit && (

                    <Link
                        to={`/organization/opportunities/${opportunity.opportunity_id}/edit`}
                        className="eventcrew-org-opportunity-edit"
                    >
                        Edit
                    </Link>

                )}


                {props.showEdit && (

                    <button
                        type="button"
                        className="eventcrew-org-opportunity-delete"
                        onClick={() =>
                            setShowDeleteModal(true)
                        }
                    >
                        Delete
                    </button>

                )}

            </div>


            <DeleteAccountModal
                show={showDeleteModal}
                title="Delete opportunity"
                message="Are you sure that you want to delete this opportunity?"
                confirmText="Yes, delete"
                onCancel={() =>
                    setShowDeleteModal(false)
                }
                onConfirm={handleDelete}
            />


        </div>
    );
}


export default OrganizationOpportunityCard;