// src/components/SelectInput.jsx
import React from 'react';
import './SelectInput.css'; // We'll create this CSS file next

function SelectInput({ label, value, onChange, options }) {
  return (
    <div className="select-input-container">
      <label htmlFor={label.replace(/\s/g, '-')}>{label}</label>
      <select
        id={label.replace(/\s/g, '-')}
        className="custom-select"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;