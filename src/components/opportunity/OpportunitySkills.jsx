import API_URL from "../../config";
import { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/OpportunitySkills.css";

function OpportunitySkills(props) {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(
                `${API_URL}/api/opportunities/${props.opportunityId}/skills`
            )
            .then((response) => {
                setSkills(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [props.opportunityId]);

    if (loading) {
        return (
            <div className="eventcrew-opportunity-skills">
                <p>Loading skills...</p>
            </div>
        );
    }

    if (skills.length === 0) {
        return null;
    }

    return (
        <div className="eventcrew-opportunity-skills">

            <h2>Skills</h2>

            <div className="eventcrew-skills-list">

                {skills.map((skill) => (
                    <div
                        className="eventcrew-skill-item"
                        key={skill.skill_id}
                    >
                        <span className="eventcrew-skill-name">
                            {skill.skill_name}
                        </span>

                        <span
                            className={
                                skill.is_required
                                    ? "eventcrew-skill-required"
                                    : "eventcrew-skill-optional"
                            }
                        >
                            {skill.is_required
                                ? "Required"
                                : "Optional"}
                        </span>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default OpportunitySkills;