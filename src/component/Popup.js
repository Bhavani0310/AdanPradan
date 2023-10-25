import React from 'react';


const Popup = ({ show, title, content, buttonText, onClose }) => {
  if (!show) return null;

  return (
    <div className="popup-container">
      <div className="popup">
        <h2 className="popup-title">{title}</h2>
        <p className="popup-content">{content}</p>
        <button className="popup-button" onClick={onClose}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Popup;
