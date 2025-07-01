// src/components/LogoPreview.jsx
import React from 'react';
import './LogoPreview.css';

// Accept logoText as a prop
function LogoPreview({ logoText }) { // <-- Destructure logoText from props
  return (
    <div className="logo-preview-container">
      <div className="logo-display-area">
        {/* Display the logoText prop, or a fallback if it's empty */}
        <p className="placeholder-text">
          {logoText || 'Your Logo Will Appear Here'} {/* <-- Use logoText here */}
        </p>
      </div>
      <button className="download-button">Download Logo</button>
    </div>
  );
}

export default LogoPreview;