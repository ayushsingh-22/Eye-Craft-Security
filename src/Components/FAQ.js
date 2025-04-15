import React, { useState } from 'react';
import './Styles/FAQ.css';
import faqs from '../Constants/FAQData';

const FaqPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div
                            className="faq-question"
                            onClick={() => handleClick(index)}
                        >
                            <span>{faq.question}</span>
                            <span className={`arrow ${activeIndex === index ? 'up' : 'down'}`}>▼</span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqPage;
