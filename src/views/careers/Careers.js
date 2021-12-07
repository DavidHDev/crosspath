import './careers.scss';
import { Input, Select } from 'antd';
import Life from '../../components/life/Life';
import { useEffect } from 'react';
import { Fade } from 'react-reveal';

const { Option, OptGroup } = Select;

const Careers = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <section className="careers">
                <Fade right>
                    <div className='background-image'>
                        <div className='gradient-overlay'></div>
                    </div>
                </Fade>
                <div className='careers-content'>
                    <Fade left>
                        <div className="career-copy">
                            <h2 className='careers-title'>Share your<br />Expertise</h2>
                            <h4 className='careers-subtitle'>We believe that we can grow faster together.</h4>
                            <p className='form-info'>Enter your information and we will reach out to you.</p>
                            <div className='careers-form'>
                                <Input className='career-input' size='large' style={{ marginBottom: '1em' }} placeholder='youremail@domain.com' />
                                <Select className='career-input' size='large' placeholder="Desired Position">
                                    <OptGroup label="Management">
                                        <Option value="project manager">Project Manager</Option>
                                        <Option value="product owner">Product Owner</Option>
                                    </OptGroup>
                                    <OptGroup label="Marketing">
                                        <Option value="social">Social Media Specialist</Option>
                                        <Option value="campaign">Campaign Specialist</Option>
                                        <Option value="seo">SEO Specialist</Option>
                                    </OptGroup>
                                    <OptGroup label="Software Engineering">
                                        <Option value="fullstack">Full Stack Developer</Option>
                                        <Option value="seniorfe">Senior Front End Engineer</Option>
                                        <Option value="iosdev">Junior iOS Developer</Option>
                                        <Option value="backenddev">Backend Developer (Python)</Option>
                                    </OptGroup>
                                </Select>
                                <button className='submit-button'>Submit</button>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
            <Life />
        </>
    );
}

export default Careers;