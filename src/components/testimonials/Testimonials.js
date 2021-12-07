import './testimonials.scss';
import { Carousel } from 'antd';
import { Fade } from 'react-reveal';

const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonials">
            <div className='carousel-container'>
                <Fade top>
                    <h2 className='testimonials-title'>Your feedback matters.</h2>
                </Fade>
                <div className='section-crossover'></div>
                <Fade bottom>
                    <Carousel autoplay dotPosition='bottom'>
                        <div className='carousel-item ci1'>
                            <div className='carousel-card'>
                                <h3 className='carousel-title'>What Our Clients Say</h3>
                                <p className='carousel-quote'>"Managing teams using the built-in functionalities has worked like a charm for our needs, superb interface design, great experience."</p>
                                <p className='carousel-person'>Christian Sloge - Human Resources Specialist, Ubisoft</p>
                            </div>
                        </div>
                        <div className='carousel-item ci2'>
                            <div className='carousel-card'>
                                <h3 className='carousel-title'>What Our Clients Say</h3>
                                <p className='carousel-quote'>"A suite of indispensable tools for any project manager who places value on well established workflows within a team."</p>
                                <p className='carousel-person'>Fabiano David - Project Manager, Bending Spoons</p>
                            </div>

                        </div>
                        <div className='carousel-item ci3'>
                            <div className='carousel-card'>
                                <h3 className='carousel-title'>What Our Clients Say</h3>
                                <p className='carousel-quote'>"Crosspath was adopted by Warner right when I joined, it definitely made the onboarding experience silk smooth for me and other colleagues."</p>
                                <p className='carousel-person'>Clara Fabrizio  - Software Developer, Warner Media</p>
                            </div>
                        </div>
                        <div className='carousel-item ci4'>
                            <div className='carousel-card'>
                                <h3 className='carousel-title'>What Our Clients Say</h3>
                                <p className='carousel-quote'>"An extra boost in productivity is what most teams often lack when established. Crosspath is a simple solution that covers most of our needs."</p>
                                <p className='carousel-person'>Markus Lopez - CPO, Adobe</p>
                            </div>
                        </div>
                    </Carousel>
                </Fade>
            </div>
        </section>
    );
}

export default Testimonials;