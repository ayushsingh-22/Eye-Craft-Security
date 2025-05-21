import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Styles/Navbar.css';

function Navbar() {
    const [activeLink, setActiveLink] = useState('/');
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setMenuOpen(false); 
    };

    const checkLoginStatus = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/check-login', {
                method: 'GET',
                credentials: 'include', // Include cookies in the request
            });
            const data = await response.json();
            setIsLoggedIn(data.authenticated);
        } catch (error) {
            console.error('Error checking login status:', error);
            setIsLoggedIn(false);
        }
    };

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/logout', {
                method: 'GET', // ✅ FIXED: Explicitly use GET
                credentials: 'include', // ✅ Include session cookie
            });
            if (response.ok) {
                setIsLoggedIn(false);
                setActiveLink('/');
                window.location.href = '/'; // Redirect to home page after logout
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    // Check login status when component mounts and when location changes
    useEffect(() => {
        checkLoginStatus();
    }, [location]);

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

                {isLoggedIn && (
                    <li>
                        <Link
                            to="/dashboard"
                            className={`navbar-link ${activeLink === '/dashboard' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/dashboard')}
                        >
                            Dashboard
                        </Link>
                    </li>
                )}

                <li>
                    {isLoggedIn ? (
                        <button
                            className="navbar-link logout-button"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className={`navbar-link ${activeLink === '/login' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/login')}
                        >
                            Admin Login
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
