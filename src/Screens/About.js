// src/screens/About.js
import React from 'react';
import SEO from '../SEO';
import './Styles/About.css';

const About = () => {
    return (
        <div className="about-container">
            <SEO title="About Us | Eyecraft Security" description="Learn more about Eyecraft Security, the leading security service provider in Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, Patna, Muzaffarpur." />

            <h1>About Eyecraft Security</h1>
            <p>
                Eyecraft Security has been at the forefront of providing reliable and efficient security services in Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, Patna, and Muzaffarpur for over <strong>10 years</strong>.
                We are proud to have a dedicated team of security professionals and cutting-edge technology to safeguard your business, home, or events.
            </p>

            <p>
                With a proven track record and a strong commitment to safety, Eyecraft Security offers comprehensive security solutions tailored to meet your needs. Our services include:
            </p>

            <ul>
                <li>Trained security guards</li>
                <li>Surveillance and monitoring services</li>
                <li>Transport and travel security</li>
                <li>Event security and crowd control</li>
                <li>Data protection and industrial site security</li>
                <li>High-tech security systems</li>
                <li>Gunmen and guard dogs</li>
            </ul>

            <p>
                Our team of professionals ensures constant vigilance, regardless of the time or location. We are available 24/7 to offer expert services at competitive prices, including emergency and long-term assignments.
            </p>

            <h2>Why Choose Eyecraft Security?</h2>
            <p>
                We are not just a security company; we are a trusted partner in ensuring the protection of your assets, people, and property. Our core values include:
            </p>
            <ul>
                <li><strong>Responsiveness:</strong> We ensure quick deployment of security personnel wherever and whenever you need them.</li>
                <li><strong>Professionalism:</strong> Our agents are rigorously trained and undergo regular assessments to maintain top-notch skills.</li>
                <li><strong>Tailored Services:</strong> Whether it’s for a corporate event or a high-risk security assignment, we offer solutions that fit your needs.</li>
            </ul>

            <h2>Our Founders</h2>
            <div className="founders">
                <div className="founder-card">
                    <img src='https://th.bing.com/th/id/OIP.Dv0o4a1pPHeHHrQ5-qQLIQHaHY?rs=1&pid=ImgDetMain' alt="Chandan Kumar Singh" />
                    <h3>Ayush</h3>
                    <p>Co-founder of Eyecraft Security, committed to building a company that puts customer safety and satisfaction first.</p>
                </div>

                <div className="founder-card">
                    <img src={'https://th.bing.com/th/id/OIP.Dv0o4a1pPHeHHrQ5-qQLIQHaHY?rs=1&pid=ImgDetMain'} alt="Abhinav Kumar" />
                    <h3>Mayur</h3>
                    <p>Co-founder of Eyecraft Security, passionate about integrating technology with security services for better protection.</p>
                </div>
            </div>

            <h2>Our Coverage Areas</h2>
            <p>
                Eyecraft Security proudly serves clients across Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, Patna, and Muzaffarpur, offering quick response times and personalized security services tailored to your requirements.
            </p>

            <h2>Get in Touch with Eyecraft Security</h2>
            <p>
                Contact Eyecraft Security now for a free consultation or to request a quote for your security needs. Our team is ready to serve you with the highest level of professionalism and security expertise.
            </p>
        </div>
    );
};

export default About;