import "./CSS/OrganizationStats.css";

function OrganizationStats(props) {
    const opportunities = props.opportunities;

    let open = 0;
    let draft = 0;
    let completed = 0;

    for (let i = 0; i < opportunities.length; i++) {

        if (opportunities[i].listing_status === "open") {
            open++;
        }

        if (opportunities[i].listing_status === "draft") {
            draft++;
        }

        if (opportunities[i].listing_status === "completed") {
            completed++;
        }

    }

    return (
        <div className="eventcrew-org-stats">

            <div className="eventcrew-org-stat">
                <span>Total Opportunities</span>
                <h2>{opportunities.length}</h2>
            </div>

            <div className="eventcrew-org-stat">
                <span>Open</span>
                <h2>{open}</h2>
            </div>

            <div className="eventcrew-org-stat">
                <span>Draft</span>
                <h2>{draft}</h2>
            </div>

            <div className="eventcrew-org-stat">
                <span>Completed</span>
                <h2>{completed}</h2>
            </div>

        </div>
    );
}

export default OrganizationStats;