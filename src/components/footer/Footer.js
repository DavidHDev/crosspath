import './footer.scss';
import logo from '../../assets/svg/logo-white.svg';
import insta from '../../assets/svg/instagram.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import facebook from '../../assets/svg/facebook.svg';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-content">
                <div className='footer-left'>
                    <img className='footer-logo' src={logo} alt="crosspath logo" />
                    <div className='footer-text'>
                        <p className='copyright'>&copy; 2021 Crosspath</p>
                        <a className='contact-link' rel="noreferrer" href="https://google.com/" target="_blank">Privacy Policy</a>
                        <a className='contact-link' rel="noreferrer" href="https://google.com/" target="_blank">Terms of Use</a>
                    </div>
                </div>
                <div className='footer-right'>
                    <div className='contact-methods'>
                        <a className='email-link' href="mailto:hello@crosspath.com">hello@crosspath.com</a>
                        <div className='socials'>
                            <a className='social-link' rel="noreferrer" href="https://linkedin.com/" target="_blank">
                                <img src={linkedin} alt="linkedin logo" />
                            </a>
                            <a className='social-link' rel="noreferrer" href="https://instagram.com/" target="_blank">
                                <img src={insta} alt="instagram logo" />
                            </a>
                            <a className='social-link' rel="noreferrer" href="https://facebook.com/" target="_blank">
                                <img src={facebook} alt="facebook logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;