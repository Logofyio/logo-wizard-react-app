// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import LogoPreview from './components/LogoPreview';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput'; // Import SelectInput
import ColorInput from './components/ColorInput';   // Import ColorInput

function App() {
  const [logoText, setLogoText] = useState('Your Logo');
  // New state variables for styling, initialized with values from your old CSS/defaults
  const [fontFamily, setFontFamily] = useState('Arial Black'); // Default from your old CSS
  const [fontSize, setFontSize] = useState(2.2); // Corresponds to 2.2em in your old CSS
  const [textColor, setTextColor] = useState('#000000'); // Default black from old CSS
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Default white from old CSS

  const handleLogoTextChange = (event) => {
    setLogoText(event.target.value);
  };

  // New event handlers for styling controls
  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    // Convert input value to a number. Use parseFloat for potential decimals.
    setFontSize(parseFloat(event.target.value));
  };

  const handleTextColorChange = (event) => {
    setTextColor(event.target.value);
  };

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  // Define options for font family dropdown based on your old HTML
  const fontFamilyOptions = [
    { value: 'Arial', label: 'Arial' },
    { value: 'Verdana', label: 'Verdana' },
    { value: 'Helvetica', label: 'Helvetica' },
    { value: 'Tahoma', label: 'Tahoma' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Times New Roman', label: 'Times New Roman' },
    { value: 'Garamond', label: 'Garamond' },
    { value: 'Courier New', label: 'Courier New' },
    { value: 'Brush Script MT', label: 'Brush Script MT' },
    { value: 'Forte', label: 'Forte' },
    { value: 'Chiller', label: 'Chiller' },
    { value: 'Lucida Calligraphy', label: 'Lucida Calligraphy' },
    { value: 'Papyrus', label: 'Papyrus' },
    { value: 'Comic Sans MS', label: 'Comic Sans MS' },
    // Add 'Arial Black' as an option since it's the default you're using
    { value: 'Arial Black', label: 'Arial Black' },
  ];

  return (
    <div className="app-container">
      <h1>Welcome to Your Logo Wizard!</h1>

      <div className="controls-area">
        <TextInput
          label="Logo Text:"
          value={logoText}
          onChange={handleLogoTextChange}
        />

        {/* Font Family Select */}
        <SelectInput
          label="Font Family:"
          value={fontFamily}
          onChange={handleFontFamilyChange}
          options={fontFamilyOptions}
        />

        {/* Font Size Input (reusing TextInput with type="number") */}
        <TextInput
          label="Font Size (em):"
          type="number" // Set type to number for numeric input
          value={fontSize}
          onChange={handleFontSizeChange}
          step="0.1" // Allow decimal increments
        />

        {/* Text Color Picker */}
        <ColorInput
          label="Text Color:"
          value={textColor}
          onChange={handleTextColorChange}
        />

        {/* Background Color Picker */}
        <ColorInput
          label="Background Color:"
          value={backgroundColor}
          onChange={handleBackgroundColorChange}
        />

      </div>

      {/* Pass all relevant state variables as props to LogoPreview */}
      <LogoPreview
        logoText={logoText}
        fontFamily={fontFamily}
        fontSize={fontSize}
        textColor={textColor}
        backgroundColor={backgroundColor}
      />
    </div>
  );
}

export default App;