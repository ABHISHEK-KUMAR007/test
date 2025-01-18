// src/components/ui/input.jsx
import React from 'react';

export const Input = ({ id, label, type = "text", placeholder, value, onChange, ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <Label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </Label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};
