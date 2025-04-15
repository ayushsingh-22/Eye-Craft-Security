import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Styles/ContactUs.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID, // Replace with your service ID
                'template_8ynvqxx', // Replace with your EmailJS template ID
                formData,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Replace with your EmailJS public key
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setSuccessMessage('Your message has been sent successfully!');
                    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
                },
                (error) => {
                    console.error('FAILED...', error);
                }
            );
    };

    return (
        <div className="contact-us">
            <h1 className="title">Contact Us</h1>

            <div className="contact-details">
                <h2>Reach Out to Us</h2>
                <p><strong>Email:</strong> <a href="mailto:mail@eyecraft@gmail.com">mail@eyecraft@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:95989556565">95989556565</a></p>
                <p><strong>Team:</strong> Eyecraft Team</p>
            </div>

            <div className="social-media">
                <h2>Follow Us</h2>
                <div className="social-icons">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">Twitter</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">Instagram</a>
                </div>
            </div>

            <div className="contact-form">
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Subject:
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
        </div>
    );
}

export default ContactUs;
