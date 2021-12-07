import './nav.scss';
import logo from '../../assets/svg/logo.svg';
import { useEffect, useRef, useState } from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router';

const Nav = () => {

    const [scroll, setScroll] = useState(true)
    const [loc, setLoc] = useState('');
    const location = useLocation();
    const menuRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY < 50
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    useEffect(() => {
        setLoc(location.pathname);
    }, [loc, location])

    const updateMenuButton = () => {
        menuRef.current.classList.toggle('is-active');
        navRef.current.classList.toggle('mobile-nav-active');

        menuRef.current.classList[1] === 'is-active'
            ? document.querySelector('body').style.overflowY = 'hidden'
            : document.querySelector('body').style.overflowY = 'scroll'
    }

    return (
        <>
            <Fade top>
                <header className={scroll ? '' : 'header-small'}>
                    <nav>
                        <div className='nav-main'>
                            <img className='nav-logo' src={logo} alt="logo" />
                            {loc === '/careers' &&
                                <>
                                    <RouterLink className='nav-item' to="/">Home</RouterLink>
                                </>
                            }
                            {loc === '/' &&
                                <>
                                    <Link className='nav-item' to="about">About</Link>
                                    <Link className='nav-item' to="testimonials">Testimonials</Link>
                                    <Link className='nav-item' to="pricing">Pricing</Link>
                                    <RouterLink className='nav-item' to="/careers">Careers</RouterLink>
                                </>
                            }

                        </div>
                        <div className='nav-secondary'>
                            <Link to="footer" className='nav-item'>Contact Us</Link>
                            <div onClick={() => updateMenuButton()} className="menu-button">
                                <div className="menu-icon" ref={menuRef}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </Fade>
            <nav className='mobile-nav' ref={navRef}>
                <div className='nav-links-mobile'>
                    {loc === '/careers'
                        ?
                        <>
                            <RouterLink onClick={() => updateMenuButton()} className='mobile-nav-item' to="/">Home</RouterLink>
                            <RouterLink onClick={() => updateMenuButton()} className='mobile-nav-item' to="/careers">Careers</RouterLink>
                            <Link to="footer" onClick={() => updateMenuButton()} className='mobile-nav-button'>Contact Us</Link>
                        </>
                        :
                        <>
                            <Link onClick={() => updateMenuButton()} className='mobile-nav-item' to="about">About</Link>
                            <Link onClick={() => updateMenuButton()} className='mobile-nav-item' to="testimonials">Testimonials</Link>
                            <Link onClick={() => updateMenuButton()} className='mobile-nav-item' to="pricing">Pricing</Link>
                            <RouterLink onClick={() => updateMenuButton()} className='mobile-nav-item' to="/careers">Careers</RouterLink>
                            <Link to="footer" onClick={() => updateMenuButton()} className='mobile-nav-button'>Contact Us</Link>
                        </>
                    }
                </div>
            </nav>
        </>
    );
}

export default Nav;
