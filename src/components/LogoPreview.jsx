// src/components/LogoPreview.jsx
import React, { forwardRef, useState, useEffect } from 'react';
import './LogoPreview.css';

// EXPLICITLY IMPORT THE ICONS YOU PLAN TO USE
// This ensures Vite/Vercel correctly includes them in the bundle
import {
  Star,
  Heart,
  Leaf,
  Cloud,
  Aperture // Add any other Lucide icons you include in App.jsx's iconOptions
} from 'lucide-react';

// Create a map for easy lookup
const LucideIconMap = {
  star: Star,
  heart: Heart,
  leaf: Leaf,
  cloud: Cloud,
  aperture: Aperture,
  // Add other icons here that you import above and use in App.jsx's iconOptions
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
  const [IconComponentToRender, setIconComponentToRender] = useState(null);

  useEffect(() => {
    if (selectedIcon) {
      // Look up the component from the map
      const IconComp = LucideIconMap[selectedIcon];
      if (IconComp) {
        setIconComponentToRender(<IconComp size={50} className="logo-icon" />);
      } else {
        setIconComponentToRender(null); // Clear if icon not found
        console.warn(`Lucide icon "${selectedIcon}" is not explicitly imported or mapped in LogoPreview.jsx.`);
      }
    } else {
      setIconComponentToRender(null); // Clear icon if 'No Icon' is selected
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
        {/* Render the dynamically loaded icon component */}
        {IconComponentToRender}
        <p className="placeholder-text" style={logoTextStyle}>
          {logoText || "Your Logo Will Appear Here"}
        </p>
      </div>
    </div>
  );
});

export default LogoPreview;