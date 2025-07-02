// src/App.jsx
import React, { useState, useRef } from 'react';
import './App.css';
import LogoPreview from './components/LogoPreview';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import ColorInput from './components/ColorInput';
import html2canvas from 'html2canvas';

// IMPORTANT: We will import specific Lucide icons in LogoPreview, not here.
// App.jsx will just pass the *name* of the icon.

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [logoText, setLogoText] = useState('Your Logo');
  const [fontFamily, setFontFamily] = useState('Arial Black');
  const [fontSize, setFontSize] = useState(2.2);
  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  // selectedIcon now stores the ICON NAME (e.g., 'star', 'heart')
  const [selectedIcon, setSelectedIcon] = useState('');
  const [selectedShape, setSelectedShape] = useState('');

  const logoRef = useRef(null);

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

  const handleIconChange = (event) => {
    setSelectedIcon(event.target.value);
  };
  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

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

  // UPDATED: Icon options now use Lucide icon names
  const iconOptions = [
    { value: '', label: 'No Icon' },
    { value: 'star', label: 'Star' },
    { value: 'heart', label: 'Heart' },
    { value: 'leaf', label: 'Leaf' },
    { value: 'cloud', label: 'Cloud' },
    { value: 'aperture', label: 'Aperture' }, // Example from Lucide
    // You can find more icon names at lucide.dev
  ];

  const shapeOptions = [
    { value: '', label: 'No Shape' },
    { value: 'circle', label: 'Circle' },
    { value: 'square', label: 'Square' },
    { value: 'rounded-square', label: 'Rounded Square' },
    { value: 'triangle', label: 'Triangle' },
  ];

  const totalSteps = 3;

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleDownloadClick = async () => {
    if (logoRef.current) {
      const canvas = await html2canvas(logoRef.current, {
        backgroundColor: null,
        useCORS: true,
      });

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `${logoText}_wizard_logo.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('Logo downloaded!');
    } else {
      console.error('Logo preview element not found for download.');
    }
  };

  return (
    <div className="app-container">
      <h1>Welcome to Your Logo Wizard!</h1>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
      </div>
      <p className="step-indicator">Step {currentStep} of {totalSteps}</p>

      <div className="wizard-content">
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

        {currentStep === 2 && (
          <div className="step-section">
            <h2>Step 2: Choose Icon & Shape</h2>
            <div className="controls-area">
              <SelectInput
                label="Select Icon:"
                value={selectedIcon}
                onChange={handleIconChange}
                options={iconOptions}
              />
              <SelectInput
                label="Select Shape:"
                value={selectedShape}
                onChange={handleShapeChange}
                options={shapeOptions}
              />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="step-section">
            <h2>Step 3: Final Preview & Download</h2>
            <p>Review your logo and download it!</p>
            <button className="download-button" onClick={handleDownloadClick}>
              Download Final Logo
            </button>
          </div>
        )}
      </div>

      <LogoPreview
        logoText={logoText}
        fontFamily={fontFamily}
        fontSize={fontSize}
        textColor={textColor}
        backgroundColor={backgroundColor}
        selectedIcon={selectedIcon}    // Now passing the icon name string
        selectedShape={selectedShape}
        ref={logoRef}
      />

      <div className="navigation-buttons">
        {currentStep > 1 && (
          <button className="nav-button prev-button" onClick={prevStep}>Previous</button>
        )}
        {currentStep < totalSteps ? (
          <button className="nav-button next-button" onClick={nextStep}>Next</button>
        ) : (
          null
        )}
      </div>
    </div>
  );
}

export default App;