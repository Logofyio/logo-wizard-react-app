// src/components/LogoPreview.jsx
import React from 'react';
import './LogoPreview.css';

function LogoPreview({ logoText }) {
  // Add this function
  const handleDownloadClick = () => {
    console.log("Download button clicked!");
    // We'll add the actual download logic here later
    // For now, this just confirms the button is clickable and logs to console
  };

  return (
    <div className="logo-preview-container">
      <div className="logo-display-area">
        <p className="placeholder-text">
          {logoText || "Your Logo Will Appear Here"}
        </p>
      </div>
      {/* Add the onClick={handleDownloadClick} prop to the button */}
      <button className="download-button" onClick={handleDownloadClick}>
        Download Logo
      </button>
    </div>
  );
}
export default LogoPreview;