// src/components/LogoPreview.jsx
import React, { forwardRef, useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react'; // Import all Lucide icons
import './LogoPreview.css';

// Helper to get an icon component by its string name
const getLucideIcon = (iconName) => {
  const IconComponent = LucideIcons[iconName];
  return IconComponent ? <IconComponent size={50} className="logo-icon" /> : null;
};

const LogoPreview = forwardRef(({
  logoText,
  fontFamily,
  fontSize,
  textColor,
  backgroundColor,
  selectedIcon, // This is now the icon name string (e.g., 'star', 'heart')
  selectedShape
}, ref) => {

  // We use a state here for the rendered icon component.
  // This is a common pattern when you need to dynamically load/render components.
  const [IconToRender, setIconToRender] = useState(null);

  useEffect(() => {
    if (selectedIcon) {
      // Get the icon component based on the name
      const IconComponent = LucideIcons[selectedIcon];
      if (IconComponent) {
        // Render the component with desired props
        setIconToRender(<IconComponent size={50} className="logo-icon" />);
      } else {
        setIconToRender(null); // Clear if icon not found
        console.warn(`Lucide icon "${selectedIcon}" not found.`);
      }
    } else {
      setIconToRender(null); // Clear icon if 'No Icon' is selected
    }
  }, [selectedIcon]); // Re-run effect whenever selectedIcon changes

  const logoTextStyle = {
    fontFamily: fontFamily,
    fontSize: `${fontSize}em`,
    color: textColor,
  };

  const logoDisplayAreaStyle = {
    backgroundColor: backgroundColor,
  };

  const shapeClassName = selectedShape ? `shape-${selectedShape}` : '';

  return (
    <div className="logo-preview-container">
      <div
        className={`logo-display-area ${shapeClassName}`}
        style={logoDisplayAreaStyle}
        ref={ref}
      >
        {/* Render the dynamically loaded icon */}
        {IconToRender}
        <p className="placeholder-text" style={logoTextStyle}>
          {logoText || "Your Logo Will Appear Here"}
        </p>
      </div>
    </div>
  );
});

export default LogoPreview;