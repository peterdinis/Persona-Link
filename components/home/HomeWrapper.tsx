import { FC } from 'react';
import Header from '../shared/Header';
import HeroSection from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { DemoSection } from './DemoSection';
import { TestimonialsSection } from './TestimonialSection';
import { PricingSection } from './PricingSection';
import { CTASection } from './CTASection';
import { Footer } from '../shared/Footer';

const HomeWrapper: FC = () => {
    return (
        <div className='min-h-screen bg-gradient-to-b from-white to-gray-50 transition-colors duration-300 dark:from-gray-900 dark:to-gray-800 dark:text-white'>
            <Header />
            <HeroSection />
            <FeaturesSection />
            <DemoSection />
            <TestimonialsSection />
            <PricingSection />
            <CTASection />
            <Footer />
        </div>
    );
};

export default HomeWrapper;
