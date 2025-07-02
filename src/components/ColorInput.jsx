// src/components/ColorInput.jsx
import React from 'react';
import './ColorInput.css'; // We'll create this CSS file next

function ColorInput({ label, value, onChange }) {
  return (
    <div className="color-input-container">
      <label htmlFor={label.replace(/\s/g, '-')}>{label}</label>
      <input
        type="color"
        id={label.replace(/\s/g, '-')}
        className="color-picker"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default ColorInput;