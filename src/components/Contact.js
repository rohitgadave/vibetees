import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [showOptions, setShowOptions] = useState(false);
  const phoneNumber = "8530972083"; // Store the phone number in a variable

  const handlePhoneClick = () => {
    setShowOptions(!showOptions); // Toggle the visibility of options
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`; // Open the dialer with the phone number
  };

  const handleWhatsAppClick = () => {
    window.location.href = `https://wa.me/${phoneNumber}`; // Open WhatsApp with the phone number
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>
        If you want to purchase any of our products, please contact us directly
        at:
      </p>
      <p
        className="phone-number"
        onClick={handlePhoneClick} // Toggle options when phone number is clicked
      >
        <strong>+91{phoneNumber}</strong>
      </p>

      {/* Display options to call or message via WhatsApp */}
      {showOptions && (
        <div className="phone-options">
          <button onClick={handleCallClick}>Call</button>
          <button onClick={handleWhatsAppClick}>Message on WhatsApp</button>
        </div>
      )}

      <p>We look forward to hearing from you!</p>
    </div>
  );
}

export default Contact;
