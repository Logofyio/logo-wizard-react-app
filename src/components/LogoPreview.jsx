// src/components/LogoPreview.jsx
import React, { forwardRef } from 'react'; // Import forwardRef hook
import './LogoPreview.css';

// LogoPreview is now wrapped with forwardRef to allow App.jsx to pass a ref to its internal div.
// It also accepts all the new styling and icon/shape props.
const LogoPreview = forwardRef(({
  logoText,
  fontFamily,
  fontSize,
  textColor,
  backgroundColor,
  selectedIcon,   // Prop for the icon image source
  selectedShape   // Prop for the shape class name
}, ref) => { // 'ref' is the second argument when using forwardRef

  // Inline style object for the logo text
  const logoTextStyle = {
    fontFamily: fontFamily,
    fontSize: `${fontSize}em`, // Ensure 'em' unit is used
    color: textColor,
  };

  // Inline style object for the logo display area background
  const logoDisplayAreaStyle = {
    backgroundColor: backgroundColor,
  };

  // Conditional class name for the shape (e.g., 'shape-circle', 'shape-square')
  const shapeClassName = selectedShape ? `shape-${selectedShape}` : '';

  // The download button and its logic are now handled in App.jsx (Step 3),
  // so they are removed from LogoPreview. This component is purely for display.

  return (
    <div className="logo-preview-container">
      {/* Attach the forwarded ref to the div that html2canvas needs to capture */}
      <div
        className={`logo-display-area ${shapeClassName}`} // Apply shape class here
        style={logoDisplayAreaStyle} // Apply background color here
        ref={ref} // Attach the forwarded ref
      >
        {/* Conditionally render the icon if selectedIcon prop has a value */}
        {selectedIcon && (
          // IMPORTANT: Ensure your icon paths in App.jsx are correct and accessible (e.g., in /public folder)
          <img src={selectedIcon} alt="Logo Icon" className="logo-icon" />
        )}
        <p className="placeholder-text" style={logoTextStyle}>
          {logoText || "Your Logo Will Appear Here"}
        </p>
      </div>
      {/* Download button removed from here */}
    </div>
  );
}); // End of forwardRef wrapper

export default LogoPreview;