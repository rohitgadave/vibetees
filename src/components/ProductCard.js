import React, { useState } from "react";
import Popup from "./Popup"; // Import the Popup component
import "./ProductCard.css";

function ProductCard({ product }) {
  const [showPopup, setShowPopup] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false); // State for full image modal

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleImageClick = () => {
    setShowFullImage(true); // Open full image modal
  };

  const handleCloseFullImage = () => {
    setShowFullImage(false); // Close full image modal
  };

  return (
    <div
      className={`product-card ${showPopup || showFullImage ? "no-hover" : ""}`}
    >
      <img
        src={product.image}
        alt={product.name}
        onClick={handleImageClick} // Trigger full image modal on click
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <button className="contact-button" onClick={handlePopupOpen}>
          Contact to Buy
        </button>
      </div>

      {/* Only show the popup if it's visible */}
      {showPopup && (
        <Popup
          product={product}
          onClose={handlePopupClose}
          showPopup={showPopup}
        />
      )}

      {/* Full Image Modal */}
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

export default ProductCard;
