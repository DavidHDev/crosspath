import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import Testimonials from '../components/testimonials/Testimonials';
import Pricing from '../components/pricing/Pricing';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Hero />
            <Services />
            <Testimonials />
            <Pricing />
        </>
    );
}

export default Home;