import React, { useState } from "react";
import "./Styles/ServiceScreen.css";
import { services } from "../Constants/ServiceData";
import BookServiceForm from "../Components/BookServiceForm"; // Import the form component

const ServiceScreen = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [formVisible, setFormVisible] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const handleExpandClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleBookNowClick = (serviceTitle) => {
        setSelectedService(serviceTitle);
        setFormVisible(true); // Show the form when "Book Now" is clicked
    };

    const closeForm = () => {
        setFormVisible(false); // Close the form when the user closes it or after successful submission
    };

    return (
        <div className="service-container">
            <h1 className="service-title">Our Services</h1>
            <div className="service-grid">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`service-card ${expandedIndex === index ? "expanded" : ""}`}
                        onClick={() => handleExpandClick(index)} // Handle card click on mobile
                        onMouseEnter={() => setExpandedIndex(index)} // Handle hover effect on desktop
                        onMouseLeave={() => setExpandedIndex(null)} // Reset on hover leave (desktop)
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="service-image"
                        />
                        <div className="service-content">
                            <h3>{service.title}</h3>
                            <p>{service.shortDescription}</p>
                            {expandedIndex === index && (
                                <div className="long-description">
                                    <p>{service.longDescription}</p>
                                    <button
                                        className="book-now-button"
                                        onClick={() => handleBookNowClick(service.title)} // Pass the selected service to the form
                                    >
                                        Book Now
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Show the booking form when "Book Now" is clicked */}
            {formVisible && (
                <BookServiceForm
                    selectedService={selectedService}
                    onClose={closeForm} // Pass the close function to the form
                />
            )}
        </div>
    );
};

export default ServiceScreen;
