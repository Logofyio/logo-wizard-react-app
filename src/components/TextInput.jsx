// src/components/TextInput.jsx
import React from 'react';
import './TextInput.css';

// This component now accepts 'type' and 'step' props, and uses a dynamic ID.
function TextInput({ label, value, onChange, type = 'text', step }) {
  // Generate a unique ID from the label for accessibility (htmlFor/id pairing)
  // We add '-input' to the end to ensure it's unique even if the label text itself is used elsewhere.
  const inputId = label.replace(/\s/g, '-') + '-input';

  return (
    <div className="text-input-container">
      {/* Label's htmlFor attribute should match the input's id for accessibility */}
      <label htmlFor={inputId}>{label}</label>
      <input
        type={type} // Use the type prop (e.g., "text", "number")
        id={inputId} // Use the dynamically generated unique ID
        className="logo-text-input"
        value={value}
        onChange={onChange}
        // Only show placeholder for text inputs (type="text"). Not relevant for number or color pickers.
        placeholder={type === 'text' ? "Enter your logo text here" : undefined}
        step={step} // Use the step prop for number inputs (e.g., 0.1 for decimals)
      />
    </div>
  );
}

export default TextInput;