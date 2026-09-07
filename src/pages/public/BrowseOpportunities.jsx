import { useEffect, useState } from "react";
import axios from "axios";

import OpportunityCard from "../../components/opportunity/OpportunityCard";
import OpportunitySearch from "../../components/opportunity/OpportunitySearch";
import OpportunityFilters from "../../components/opportunity/OpportunityFilters";

import "./CSS/BrowseOpportunities.css";

function BrowseOpportunities() {
    const [opportunities, setOpportunities] = useState([]);
    const [categories, setCategories] = useState([]);

    const [search, setSearch] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [city, setCity] = useState("");
    const [compensation, setCompensation] = useState("");
    const [date, setDate] = useState("");
    const [sort, setSort] = useState("");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/categories")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        setLoading(true);
        setError("");

        axios
            .get(
                `http://localhost:5000/api/opportunities?search=${search}&category_id=${categoryId}&city=${city}&status=open&compensation=${compensation}&date=${date}&sort=${sort}`
            )
            .then((response) => {
                setOpportunities(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setError("Unable to load opportunities");
                setLoading(false);
            });
    }, [categoryId, city, compensation, date, sort]);

    const handleSearch = (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        axios
            .get(
                `http://localhost:5000/api/opportunities?search=${search}&category_id=${categoryId}&city=${city}&status=open&compensation=${compensation}&date=${date}&sort=${sort}`
            )
            .then((response) => {
                setOpportunities(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setError("Unable to search opportunities");
                setLoading(false);
            });
    };

    const handleClear = () => {
        setSearch("");
        setCategoryId("");
        setCity("");
        setCompensation("");
        setDate("");
        setSort("");
    };

    return (
        <section className="eventcrew-browse-section">
            <div className="eventcrew-browse-container">

                <div className="eventcrew-browse-header">
                    <h1>Browse Opportunities</h1>

                    <p>
                        Discover meaningful volunteering opportunities near you.
                    </p>
                </div>

                <OpportunitySearch
                    search={search}
                    setSearch={setSearch}
                    handleSearch={handleSearch}
                />

                <div className="eventcrew-category-pills">

                    <button
                        type="button"
                        className={categoryId === "" ? "active" : ""}
                        onClick={() => setCategoryId("")}
                    >
                        All
                    </button>

                    {categories.map((category) => (
                        <button
                            type="button"
                            key={category.category_id}
                            className={
                                categoryId == category.category_id
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                setCategoryId(category.category_id)
                            }
                        >
                            {category.category_name}
                        </button>
                    ))}

                </div>

                <div className="eventcrew-browse-layout">

                    <OpportunityFilters
                        city={city}
                        setCity={setCity}
                        compensation={compensation}
                        setCompensation={setCompensation}
                        date={date}
                        setDate={setDate}
                        handleClear={handleClear}
                    />

                    <div className="eventcrew-results">

                        <div className="eventcrew-results-header">

                            <p>
                                {opportunities.length} opportunities found
                            </p>

                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                            >
                                <option value="">
                                    Default
                                </option>

                                <option value="newest">
                                    Most Recent
                                </option>

                                <option value="date_asc">
                                    Date: Earliest
                                </option>

                                <option value="date_desc">
                                    Date: Latest
                                </option>
                            </select>

                        </div>

                        {loading && (
                            <p className="eventcrew-browse-message">
                                Loading opportunities...
                            </p>
                        )}

                        {error && (
                            <p className="eventcrew-browse-message">
                                {error}
                            </p>
                        )}

                        {!loading &&
                            !error &&
                            opportunities.length === 0 && (
                                <p className="eventcrew-browse-message">
                                    No opportunities found.
                                </p>
                            )}

                        {!loading &&
                            !error &&
                            opportunities.length > 0 && (
                                <div className="eventcrew-browse-grid">

                                    {opportunities.map((opportunity) => (
                                        <OpportunityCard
                                            key={
                                                opportunity.opportunity_id
                                            }
                                            opportunity={opportunity}
                                        />
                                    ))}

                                </div>
                            )}

                    </div>

                </div>

            </div>
        </section>
    );
}

export default BrowseOpportunities;