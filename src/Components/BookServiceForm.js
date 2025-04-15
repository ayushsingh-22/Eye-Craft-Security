import React, { useState } from "react";
import "../Screens/Styles/BookServiceForm.css";

const BookServiceForm = ({ selectedService, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: selectedService,
        numGuards: "",
        durationType: "hours", // or 'months'
        durationValue: "",
        cameraRequired: false,
        vehicleRequired: false,
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: fieldValue });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailParams = {
            ...formData,
        };

        try {
            const response = await fetch("http://localhost:8080/api/add-query", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(emailParams),
            });

            if (response.ok) {
                setShowPopup(true);
                setTimeout(() => {
                    setShowPopup(false);
                    onClose();
                }, 3000);
            } else {
                console.error("Server error:", response.statusText);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="overlay">
            <div className="form-container">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>Book Your Service</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} required />

                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleFormChange} required />

                    <label htmlFor="service">Service</label>
                    <select id="service" name="service" value={formData.service} disabled>
                        <option>{formData.service}</option>
                    </select>

                    <label htmlFor="numGuards">Number of Guards</label>
                    <input type="number" id="numGuards" name="numGuards" value={formData.numGuards} onChange={handleFormChange} required />

                    <label>Service Duration</label>
                    <div className="duration-wrapper">
                        <input type="number" name="durationValue" value={formData.durationValue} onChange={handleFormChange} required />
                        <select name="durationType" value={formData.durationType} onChange={handleFormChange}>
                            <option value="hours">Hours</option>
                            <option value="months">Months</option>
                        </select>
                    </div>

                    <div className="checkbox-wrapper">
                        <input type="checkbox" id="cameraRequired" name="cameraRequired" checked={formData.cameraRequired} onChange={handleFormChange} />
                        <label htmlFor="cameraRequired">Camera</label>
                    </div>

                    <div className="checkbox-wrapper">
                        <input type="checkbox" id="vehicleRequired" name="vehicleRequired" checked={formData.vehicleRequired} onChange={handleFormChange} />
                        <label htmlFor="vehicleRequired">Vehicle</label>
                    </div>

                    <label htmlFor="message">Message (Optional)</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleFormChange} />

                    <button type="submit" className="submit-button">Submit</button>
                </form>

                {showPopup && (
                    <div className="popup">
                        <div className="popup-message">
                            <p>Thank you! We'll get back to you soon.</p>
                            <button className="close-popup" onClick={() => setShowPopup(false)}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookServiceForm;
