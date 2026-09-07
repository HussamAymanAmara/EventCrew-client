import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CSS/CategorySection.css";

function CategorySection() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/categories")
            .then((response) => {
                setCategories(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setError("Unable to load categories");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="eventcrew-category-section">
                <p className="eventcrew-category-message">
                    Loading categories...
                </p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="eventcrew-category-section">
                <p className="eventcrew-category-message">
                    {error}
                </p>
            </section>
        );
    }

    return (
        <section className="eventcrew-category-section">
            <div className="eventcrew-category-container">

                <div className="eventcrew-category-header">
                    <span>Explore Opportunities</span>

                    <h2>Find a cause that matters to you</h2>

                    <p>
                        Browse volunteer opportunities by category and discover
                        where you can make an impact.
                    </p>
                </div>

                <div className="eventcrew-category-grid">
                    {categories.map((category) => (
                        <Link
                            to={`/opportunities?category_id=${category.category_id}`}
                            className="eventcrew-category-card"
                            key={category.category_id}
                        >
                            <div className="eventcrew-category-icon">
                                {category.category_name.charAt(0)}
                            </div>

                            <h3>
                                {category.category_name}
                            </h3>

                            <span>
                                View opportunities →
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="eventcrew-category-view-all">
                    <Link to="/opportunities">
                        View All Opportunities
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default CategorySection;