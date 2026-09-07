import { Link } from "react-router-dom";
import "./CSS/CategorySection.css";

function CategorySection() {
    const categories = [
        {
            name: "Community",
            icon: "🤝"
        },
        {
            name: "Environment",
            icon: "🌱"
        },
        {
            name: "Education",
            icon: "📚"
        },
        {
            name: "Health",
            icon: "❤️"
        },
        {
            name: "Events",
            icon: "📅"
        },
        {
            name: "Animal Welfare",
            icon: "🐾"
        }
    ];

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
                            to={`/opportunities?category=${category.name}`}
                            className="eventcrew-category-card"
                            key={category.name}
                        >
                            <div className="eventcrew-category-icon">
                                {category.icon}
                            </div>

                            <h3>{category.name}</h3>

                            <span>View opportunities →</span>
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