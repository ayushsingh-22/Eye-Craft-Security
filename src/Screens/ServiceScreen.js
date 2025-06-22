import React, { useState } from "react";
import { services } from "../Constants/ServiceData";
import BookServiceForm from "../Components/BookServiceForm";
import styles from "./Styles/ServiceScreen.module.css";

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
        <div className={styles.serviceContainer}>
            <h1 className={styles.serviceTitle}>Our Services</h1>
            <div className={styles.serviceGrid}>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`${styles.serviceCard} ${expandedIndex === index ? styles.expanded : ""}`}
                        onClick={() => handleExpandClick(index)} // Handle card click on mobile
                        onMouseEnter={() => setExpandedIndex(index)} // Handle hover effect on desktop
                        onMouseLeave={() => setExpandedIndex(null)} // Reset on hover leave (desktop)
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className={styles.serviceImage}
                        />
                        <div className={styles.serviceContent}>
                            <h3>{service.title}</h3>
                            <p>{service.shortDescription}</p>
                            {expandedIndex === index && (
                                <div className={styles.longDescription}>
                                    <p>{service.longDescription}</p>
                                    <button
                                        className={styles.bookNowButton}
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
