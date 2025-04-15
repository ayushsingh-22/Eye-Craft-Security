import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import "./Styles/BookServiceForm.css";

const BookServiceForm = ({ selectedService, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: selectedService,
    });
    const [showPopup, setShowPopup] = useState(false);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the email data object
        const emailParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            service: formData.service,
        };

        const res = await fetch("http://localhost:8080/api/add-query", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(emailParams)
          }).then((res) =>{ 
                    setShowPopup(true); // Show the success popup
                    setTimeout(() => {
                        setShowPopup(false);
                        onClose(); // Close the form after 5 seconds
                    }, 100);
        });
        
          

        // Send the email using emailjs.send()
        // emailjs
        //     .send(
        //         process.env.REACT_APP_EMAILJS_SERVICE_ID, // Your EmailJS service ID
        //         "template_k40rxo2", // Your template ID
        //         emailParams, // Pass the email parameters as an object
        //         process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Your EmailJS public key
        //     )
        //     .then(
        //         (result) => {
        //             console.log("Email sent successfully:", result.text);
        //             setShowPopup(true); // Show the success popup
        //             setTimeout(() => {
        //                 setShowPopup(false);
        //                 onClose(); // Close the form after 5 seconds
        //             }, 5000);
        //         },
        //         (error) => {
        //             console.log("Error sending email:", error.text);
        //         }
        //     );
    };

    return (
        <div className="overlay">
            <div className="form-container">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Book Your Service</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                    />
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        required
                    />
                    <label htmlFor="service">Service</label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        disabled
                    >
                        <option>{formData.service}</option>
                    </select>
                    <label htmlFor="message">Message (Optional)</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                    />
                    <button type="submit" className="submit-button">Submit</button>
                </form>

                {/* Popup Message */}
                {showPopup && (
                    <div className="popup">
                        <div className="popup-message">
                            <p>We will get back to your request within the next 15 minutes. Thank you for your patience! We are looking forward to working with you.</p>
                            <button className="close-popup" onClick={() => setShowPopup(false)}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookServiceForm;
