import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';

function Navbar() {
    const [activeLink, setActiveLink] = useState('/');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setMenuOpen(false); // Close the menu when a link is clicked
    };

    return (
        <nav className="navbar">
            {/* Hamburger Icon */}
            <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
                &#9776;
            </div>

            {/* Logo Section */}
            <Link
                to="/"
                onClick={() => handleLinkClick('/')}
                className="navbar-logo"
            >
                <img
                    src="https://raw.githubusercontent.com/bvestx/Eye-Craft-Security/main/logo.png"
                    alt="Eye Craft Security Logo"
                    className="logo-image"
                />
                <span className="logo-text">Eye Craft Security</span>
            </Link>

            {/* Navigation Links */}
            <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                <li>
                    <Link
                        to="/"
                        className={`navbar-link ${activeLink === '/' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('/')}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about-us"
                        className={`navbar-link ${activeLink === '/about-us' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('/about-us')}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/our-services"
                        className={`navbar-link ${activeLink === '/our-services' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('/our-services')}
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact-us"
                        className={`navbar-link ${activeLink === '/contact-us' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('/contact-us')}
                    >
                        Contact
                    </Link>
                </li>

                <li>
                    <Link
                        to="/login"
                        className={`navbar-link ${activeLink === '/our-services' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('/dashboard')}
                    >
                        Login
                    </Link>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;
