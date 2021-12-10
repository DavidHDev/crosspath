import './hero.scss';
import hero from '../../assets/img/hero.webp';
import { Fade } from 'react-reveal';

const Hero = () => {
    return (
        <section className="hero">
            <div className='hero-content'>
                <Fade bottom cascade distance={'50px'}>
                    <section>
                        <h1 className='headline'>The management tool<br />for better workflows.</h1>
                        <p className='sub-headline'>Crosspath helps you in allowing your employees to do what they love, better.</p>
                    </section>
                </Fade>
                <Fade bottom distance={'50px'}>
                    <img className='hero-img' src={hero} alt="man holding laptop" />
                </Fade>
            </div>
        </section>
    );
}

export default Hero;