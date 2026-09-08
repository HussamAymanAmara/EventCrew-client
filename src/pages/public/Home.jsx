import HeroSection from "../../components/home/HeroSection";
import FeaturedOpportunities from "../../components/home/FeaturedOpportunities";
import HowItWorks from "../../components/home/HowItWorks";
import "./CSS/Home.css";

function Home() {
    return (
        <>
            <HeroSection />
            <FeaturedOpportunities />
            <HowItWorks />
        </>
    );
}

export default Home;