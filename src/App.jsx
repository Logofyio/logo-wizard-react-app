// src/App.jsx
import React, { useState } from 'react'; // Import useState hook
import './App.css';
import LogoPreview from './components/LogoPreview';
import TextInput from './components/TextInput'; // Import the new TextInput component

function App() {
  // Declare a state variable for logoText
  // initial value is 'Your Logo'
  const [logoText, setLogoText] = useState('Your Logo');

  // Event handler function to update logoText state
  const handleLogoTextChange = (event) => {
    setLogoText(event.target.value); // Update the state with the new input value
  };

  return (
    <div className="app-container">
      <h1>Welcome to Your Logo Wizard!</h1>

      <div className="controls-area"> {/* New container for controls */}
        {/* ADDED FOR TESTING: Check if plain HTML renders here */}
       
        <TextInput
          label="Logo Text:"
          value={logoText}           // Pass current state value as a prop
          onChange={handleLogoTextChange} // Pass the event handler as a prop
        />
        {/* Other controls will go here */}
      </div>

      {/* CORRECTED: Pass logoText prop to LogoPreview to display the text */}
      <LogoPreview logoText={logoText} />
    </div>
  );
}

export default App;