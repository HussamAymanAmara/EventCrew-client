import HeroSection from "../../components/home/HeroSection";
import CategorySection from "../../components/home/CategorySection";
import FeaturedOpportunities from "../../components/home/FeaturedOpportunities";
import "./CSS/Home.css";

function Home() {
    return (
        <>
            <HeroSection />
            <CategorySection />
            <FeaturedOpportunities />
        </>
    );
}

export default Home;