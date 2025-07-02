// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import LogoPreview from './components/LogoPreview';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import ColorInput from './components/ColorInput';

function App() {
  // State for the current step in the wizard
  const [currentStep, setCurrentStep] = useState(1); // Start at Step 1

  // State variables for logo properties
  const [logoText, setLogoText] = useState('Your Logo');
  const [fontFamily, setFontFamily] = useState('Arial Black');
  const [fontSize, setFontSize] = useState(2.2);
  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  // Event handlers for logo properties
  const handleLogoTextChange = (event) => {
    setLogoText(event.target.value);
  };
  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };
  const handleFontSizeChange = (event) => {
    setFontSize(parseFloat(event.target.value));
  };
  const handleTextColorChange = (event) => {
    setTextColor(event.target.value);
  };
  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  // Font options for the select input
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
    { value: 'Arial Black', label: 'Arial Black' },
  ];

  // Functions to navigate between steps
  const totalSteps = 3; // We'll define 3 steps for now: Text/Style, Icon/Shape, Final Preview

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <div className="app-container">
      <h1>Welcome to Your Logo Wizard!</h1>

      {/* Progress Bar Placeholder (we'll make this a component later) */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
      </div>
      <p className="step-indicator">Step {currentStep} of {totalSteps}</p>

      <div className="wizard-content">
        {/* Step 1: Text and Basic Styling */}
        {currentStep === 1 && (
          <div className="step-section">
            <h2>Step 1: Enter Logo Text & Basic Style</h2>
            <div className="controls-area">
              <TextInput
                label="Logo Text:"
                value={logoText}
                onChange={handleLogoTextChange}
              />
              <SelectInput
                label="Font Family:"
                value={fontFamily}
                onChange={handleFontFamilyChange}
                options={fontFamilyOptions}
              />
              <TextInput
                label="Font Size (em):"
                type="number"
                value={fontSize}
                onChange={handleFontSizeChange}
                step="0.1"
              />
              <ColorInput
                label="Text Color:"
                value={textColor}
                onChange={handleTextColorChange}
              />
              <ColorInput
                label="Background Color:"
                value={backgroundColor}
                onChange={handleBackgroundColorChange}
              />
            </div>
          </div>
        )}

        {/* Step 2: Icon and Shape Selection (placeholder for now) */}
        {currentStep === 2 && (
          <div className="step-section">
            <h2>Step 2: Choose Icon & Shape</h2>
            <p>Icon and shape selection controls will go here.</p>
            {/* This is where you'd add components for icon/shape selection */}
          </div>
        )}

        {/* Step 3: Final Preview and Download */}
        {currentStep === 3 && (
          <div className="step-section">
            <h2>Step 3: Final Preview & Download</h2>
            <p>Review your logo and download it!</p>
          </div>
        )}
      </div>

      {/* Logo Preview (always visible) */}
      <LogoPreview
        logoText={logoText}
        fontFamily={fontFamily}
        fontSize={fontSize}
        textColor={textColor}
        backgroundColor={backgroundColor}
      />

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        {currentStep > 1 && (
          <button className="nav-button prev-button" onClick={prevStep}>Previous</button>
        )}
        {currentStep < totalSteps ? (
          <button className="nav-button next-button" onClick={nextStep}>Next</button>
        ) : (
          // On the last step, the "Next" button becomes "Download"
          <button className="nav-button download-button" onClick={() => alert('Download logic will go here!')}>Download Final Logo</button>
        )}
      </div>
    </div>
  );
}

export default App;