import { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/OpportunityFilters.css";

function OpportunityFilters(props) {
    const [categories, setCategories] = useState([]);

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

    return (
        <form
            className="eventcrew-opportunity-filters"
            onSubmit={props.handleFilter}
        >
            <div className="eventcrew-filter-group">
                <label>Category</label>

                <select
                    value={props.categoryId}
                    onChange={(e) => props.setCategoryId(e.target.value)}
                >
                    <option value="">All Categories</option>

                    {categories.map((category) => (
                        <option
                            key={category.category_id}
                            value={category.category_id}
                        >
                            {category.category_name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="eventcrew-filter-group">
                <label>City</label>

                <input
                    type="text"
                    placeholder="Enter city"
                    value={props.city}
                    onChange={(e) => props.setCity(e.target.value)}
                />
            </div>

            <div className="eventcrew-filter-group">
                <label>Compensation</label>

                <select
                    value={props.compensation}
                    onChange={(e) => props.setCompensation(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="paid">Paid</option>
                    <option value="unpaid">Unpaid</option>
                </select>
            </div>

            <div className="eventcrew-filter-group">
                <label>Date</label>

                <input
                    type="date"
                    value={props.date}
                    onChange={(e) => props.setDate(e.target.value)}
                />
            </div>

            <div className="eventcrew-filter-group">
                <label>Sort By</label>

                <select
                    value={props.sort}
                    onChange={(e) => props.setSort(e.target.value)}
                >
                    <option value="">Default</option>
                    <option value="date_asc">Date: Earliest First</option>
                    <option value="date_desc">Date: Latest First</option>
                    <option value="newest">Newest Added</option>
                </select>
            </div>

            <div className="eventcrew-filter-buttons">
                <button
                    type="submit"
                    className="eventcrew-filter-apply"
                >
                    Apply Filters
                </button>

                <button
                    type="button"
                    className="eventcrew-filter-clear"
                    onClick={props.handleClear}
                >
                    Clear
                </button>
            </div>
        </form>
    );
}

export default OpportunityFilters;