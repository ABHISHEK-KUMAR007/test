// src/components/ui/textarea.jsx
import React from 'react';

export const Textarea = ({ id, label, placeholder, value, onChange, rows = 4, ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <Label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </Label>
      )}
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        {...props}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};
