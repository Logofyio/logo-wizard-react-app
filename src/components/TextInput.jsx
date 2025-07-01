// src/components/TextInput.jsx
import React from 'react';
import './TextInput.css'; // We'll create this CSS file next

function TextInput({ label, value, onChange }) {
  return (
    <div className="text-input-container">
      <label htmlFor="logoText">{label}</label>
      <input
        type="text"
        id="logoText"
        className="logo-text-input"
        value={value}
        onChange={onChange}
        placeholder="Enter your logo text here"
      />
    </div>
  );
}

export default TextInput;