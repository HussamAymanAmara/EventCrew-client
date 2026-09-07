import "./CSS/OpportunitySearch.css";

function OpportunitySearch(props) {
    return (
        <form
            className="eventcrew-opportunity-search"
            onSubmit={props.handleSearch}
        >
            <input
                type="search"
                placeholder="Search opportunities..."
                value={props.search}
                onChange={(e) => props.setSearch(e.target.value)}
            />

            <button type="submit">
                Search
            </button>
        </form>
    );
}

export default OpportunitySearch;