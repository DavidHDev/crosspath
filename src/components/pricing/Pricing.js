import './pricing.scss';
import starter from '../../assets/svg/starter.svg';
import business from '../../assets/svg/business.svg';
import enterprise from '../../assets/svg/enterprise.svg';
import { Fade } from 'react-reveal';

const Pricing = () => {
    return (
        <section className="pricing" id="pricing">
            <div className='pricing-content'>
                <Fade top>
                    <h2 className='pricing-title'>Supercharge your teams</h2>
                    <p className='pricing-description'>Select a plan based on your company's needs</p>
                </Fade>
                <Fade bottom cascade>
                    <div className='price-cards'>
                        <div className='price-card'>
                            <div className='price-top'>
                                <img src={starter} className='plan-icon' alt="starter-icon" />
                                <h3 className='plan-title'>Starter</h3>
                                <p className='plan-desc'>For startups</p>
                            </div>
                            <div className='price-bottom'>
                                <p className='plan-price'>$25 / month</p>
                                <p className='plan-detail'>Up to 2 teams</p>
                                <button className='buy-button'>Get Started</button>
                            </div>
                        </div>
                        <div className='price-card'>
                            <div className='price-top'>
                                <img src={business} className='plan-icon' alt="starter-icon" />
                                <h3 className='plan-title'>Business</h3>
                                <p className='plan-desc'>For growing companies</p>
                            </div>
                            <div className='price-bottom'>
                                <p className='plan-price'>$50 / month</p>
                                <p className='plan-detail'>Up to 9 teams</p>
                                <button className='buy-button popular'>Get Started</button>
                            </div>
                        </div>
                        <div className='price-card'>
                            <div className='price-top'>
                                <img src={enterprise} className='plan-icon' alt="starter-icon" />
                                <h3 className='plan-title'>Enterprise</h3>
                                <p className='plan-desc'>For large companies</p>
                            </div>
                            <div className='price-bottom'>
                                <p className='plan-price'>$100+ / month</p>
                                <p className='plan-detail'>Unlimited teams (100$ per 10 teams)</p>
                                <button className='buy-button'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
}

export default Pricing;