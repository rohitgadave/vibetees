import React, { useState, useEffect } from "react";
import "./Popup.css";

function Popup({ product, onClose, showPopup }) {
  const [showFullImage, setShowFullImage] = useState(false);

  // Close popup if clicked outside
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      onClose();
    }
  };

  // Set up event listener for closing on ESC key
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [onClose]);

  // Handle opening the full-size image view
  const handleImageClick = () => {
    setShowFullImage(true);
  };

  // Handle closing the full-size image view
  const handleCloseFullImage = () => {
    setShowFullImage(false);
  };

  const phoneNumber = "918530972083"; // Store the phone number

  const handleWhatsAppClick = () => {
    window.location.href = `https://wa.me/${phoneNumber}`; // Open WhatsApp to send a message
  };

  return (
    <div
      className={`popup-overlay ${showPopup ? "active" : ""}`}
      onClick={handleOutsideClick}
    >
      <div className="popup">
        <div
          className="popup-close"
          onClick={onClose}
          role="button"
          aria-label="Close Popup"
        >
          &times;
        </div>
        <h2>{product.name}</h2>
        <img
          src={product.image}
          alt={product.name}
          onClick={handleImageClick}
          className="popup-image"
        />
        <p>{product.description}</p>
        {/* Display options to call or message via WhatsApp */}
        <div className="popup-phone-options">
          <button
            onClick={handleWhatsAppClick}
            className="popup-whatsapp-button"
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>

      {/* Full-size image modal */}
      {showFullImage && (
        <div className="image-modal-overlay" onClick={handleCloseFullImage}>
          <div className="image-modal">
            <div className="image-wrapper">
              <button className="close-modal" onClick={handleCloseFullImage}>
                &times; {/* Close button */}
              </button>
              <img
                src={product.image}
                alt={product.name}
                className="full-image"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
