// src/components/TextInput.jsx
import React from 'react';
import './TextInput.css';

// This component now accepts 'type' and 'step' props, and uses a dynamic ID.
function TextInput({ label, value, onChange, type = 'text', step }) {
  // Generate a unique ID from the label for accessibility (htmlFor/id pairing)
  const inputId = label.replace(/\s/g, '-') + '-input'; // Added '-input' to ensure uniqueness if label is used elsewhere

  return (
    <div className="text-input-container">
      {/* Label's htmlFor should match the input's id */}
      <label htmlFor={inputId}>{label}</label>
      <input
        type={type} // Use the type prop (e.g., "text", "number")
        id={inputId} // Use the dynamically generated unique ID
        className="logo-text-input"
        value={value}
        onChange={onChange}
        // Only show placeholder for text inputs, not for number/color pickers
        placeholder={type === 'text' ? "Enter your logo text here" : undefined}
        step={step} // Use the step prop for number inputs (e.g., 0.1)
      />
    </div>
  );
}

export default TextInput;