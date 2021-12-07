import './services.scss';
import { Slide, Fade } from 'react-reveal';

const Services = () => {
    return (
        <section className="services">
            <Slide bottom>
                <div className='services-card' id="about">
                    <h2 className='services-title'>Our offer is simple</h2>
                    <p className='services-description'>We build an all-in-one solution to a classic problem,
                        team management. Offering a minimal interface that
                        packs a punch and allows you to ease into new ways of working.
                    </p>
                    <div className='features-list'>
                        <Slide right>
                            <div className='feature'>
                                <span className='feature-left'>
                                    <p className='feature-no'>01</p>
                                    <p className='feature-title'>Team Composition</p>
                                </span>
                                <p className='feature-desc'>Manage team members, make onboarding easy and keep it transparent.</p>
                            </div>
                        </Slide>

                        <Slide right>

                            <div className='feature'>
                                <span className='feature-left'>
                                    <p className='feature-no'>02</p>
                                    <p className='feature-title'>Project Management</p>
                                </span>
                                <p className='feature-desc'>An amazing set of tools for every product management need you can name.</p>
                            </div>
                        </Slide>

                        <Slide right>
                            <div className='feature'>
                                <span className='feature-left'>
                                    <p className='feature-no'>03</p>
                                    <p className='feature-title'>Availability Planning</p>
                                </span>
                                <p className='feature-desc'>Well organized, blazing fast availability calendars at your team's disposal.</p>
                            </div>
                        </Slide>

                        <Slide right>
                            <div className='feature'>
                                <span className='feature-left'>
                                    <p className='feature-no'>04</p>
                                    <p className='feature-title'>Milestone Tracking</p>
                                </span>
                                <p className='feature-desc'>State of the art timeline editor for all project milestones and particularities.</p>
                            </div>
                        </Slide>
                    </div>
                </div>
            </Slide>
            <Fade>
                <div className='features-text'>
                    <h3 className='cards-title'>Our Values</h3>
                    <p className='cards-description'>Crosspath software relies on three core values that guide our teams and keeps delivery to the highest standard.</p>
                </div>
                <div className="feature-cards">
                    <div className="feature-card">
                        <p className='card-title'>Simplicity</p>
                        <p className='card-copy'>
                            Keeping it stupid simple makes life easier for both developers and the end user. Our team refines features to the perfect point when all things click.
                        </p>
                    </div>
                    <div className="feature-card">
                        <p className='card-title'>Performance</p>
                        <p className='card-copy'>
                            Blazing fast loading speeds are a must for uninterupted productivity flows. Seamless navigation and processes that make sense are a top priority.
                        </p>
                    </div>
                    <div className="feature-card">
                        <p className='card-title'>Support</p>
                        <p className='card-copy'>
                            Leaving no room for confusion, our 24/7 professional support team is on call to provide you any information you may need to set up perfect worlflows.
                        </p>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Services;