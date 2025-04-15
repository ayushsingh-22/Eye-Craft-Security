import React, { useState, useEffect, useRef } from 'react';
import './Styles/HomeScreen.css';
import ServiceScreen from './ServiceScreen';
import FaqPage from '../Components/FAQ';
import { images, messages } from '../Constants/HomeScreenData';

function HomeScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const serviceSectionRef = useRef(null);

    useEffect(() => {
        if (isPaused) {
            const pauseTimer = setTimeout(() => {
                setIsPaused(false);
            }, 10000);
            return () => clearTimeout(pauseTimer);
        }

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
        setIsPaused(true);
    };

    const scrollToServiceScreen = () => {
        serviceSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="home-container">
                <header className="home-header">
                    <h1>Your Trusted Security Partner</h1>
                    <p>Providing professional and reliable security personnel for your safety.</p>
                    <button className="cta-button" onClick={scrollToServiceScreen}>Learn More</button>
                </header>

                {/* Carousel Section */}
                <div className="carousel-container">
                    <div className="carousel-content">
                        <div className="carousel-message">
                            <p>{messages[currentIndex]}</p>
                        </div>
                        <div className="image-item">
                            <img
                                src={images[currentIndex]}
                                alt={`Security Guards, Body Guard, Security Camera ${currentIndex + 1}`}
                                className="carousel-image"
                            />
                        </div>
                    </div>
                </div>

                {/* Dot Navigation */}
                <div className="carousel-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>

                {/* Additional Statistics Section */}
                <div className="stats-container">
                    <div className="stats-item">
                        <h3>Total Visitors</h3>
                        <p>{Math.floor(Math.random() * (800 - 500 + 1)) + 500}</p>
                    </div>
                    <div className="stats-item">
                        <h3>Total Users</h3>
                        <p>{Math.floor(Math.random() * (800 - 500 + 1)) + 500}</p>
                    </div>
                    <div className="stats-item">
                        <h3>Total Guards Deployed</h3>
                        <p>{Math.floor(Math.random() * (800 - 500 + 1)) + 500}+</p>
                    </div>
                </div>
            </div>

            {/* Scrollable Service Screen */}
            <div ref={serviceSectionRef}>
                <ServiceScreen />
            </div>

            <FaqPage />
        </>
    );
}

export default HomeScreen;
