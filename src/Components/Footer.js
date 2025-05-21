import React from 'react';
import './Styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Google Map */}
        <div className="footer-map">
          
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d437.7692543299151!2d77.3012211!3d28.6251452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4b17db37c77%3A0x889cd55ef9f1803e!2sD130%2C%20West%20Vinod%20Nagar%2C%20Block%20D%2C%20Mandawali%2C%20New%20Delhi%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1734900358492!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Social Media Links and Contact Details */}
        <div className="footer-details">
          <div className="footer-social">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
                alt="X"
                className="social-icon"
              />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                alt="Facebook"
                className="social-icon"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="social-icon"
              />
            </a>
          </div>

          <div className="footer-contact">
            <h4>Reach Out to Us</h4>
            <p>Email: <a href="mailto:mail@eyecraft@gmail.com">mail@eyecraft@gmail.com</a></p>
            <p>Phone: <a href="tel:9999999999">9999999999</a></p>
          </div>
        </div>
      </div>

      <p>&copy; 2024 SecurePro. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
