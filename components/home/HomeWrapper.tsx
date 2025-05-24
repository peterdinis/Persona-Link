import { FC } from "react";
import Header from "../shared/Header";
import HeroSection from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";

const HomeWrapper: FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-300">
            <Header />
            <HeroSection />
            <FeaturesSection />
        </div>
    )
}

export default HomeWrapper