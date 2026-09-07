import "./CSS/OpportunityFilters.css";

function OpportunityFilters(props) {
    return (
        <aside className="eventcrew-filter-sidebar">

            <div className="eventcrew-sidebar-filter">
                <h3>Location</h3>

                <input
                    type="text"
                    placeholder="Enter city"
                    value={props.city}
                    onChange={(e) => props.setCity(e.target.value)}
                />
            </div>

            <div className="eventcrew-sidebar-filter">
                <h3>Date</h3>

                <input
                    type="date"
                    value={props.date}
                    onChange={(e) => props.setDate(e.target.value)}
                />
            </div>

            <div className="eventcrew-sidebar-filter">
                <h3>Compensation</h3>

                <div className="eventcrew-compensation-buttons">

                    <button
                        type="button"
                        className={
                            props.compensation === ""
                                ? "active"
                                : ""
                        }
                        onClick={() => props.setCompensation("")}
                    >
                        All
                    </button>

                    <button
                        type="button"
                        className={
                            props.compensation === "paid"
                                ? "active"
                                : ""
                        }
                        onClick={() => props.setCompensation("paid")}
                    >
                        Paid
                    </button>

                    <button
                        type="button"
                        className={
                            props.compensation === "unpaid"
                                ? "active"
                                : ""
                        }
                        onClick={() => props.setCompensation("unpaid")}
                    >
                        Unpaid
                    </button>

                </div>
            </div>

            <button
                type="button"
                className="eventcrew-clear-filters"
                onClick={props.handleClear}
            >
                Clear filters
            </button>

        </aside>
    );
}

export default OpportunityFilters;