/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

function Select({ value, handleInputChange, options, Name, label }) {
  return (
    <label htmlFor={Name}>
      {label}
      <select value={value} onChange={handleInputChange} id={Name} name={Name}>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
export default Select;
