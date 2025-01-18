import React, { useState } from 'react';

export const Select = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`relative ${className}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen,
          toggleDropdown,
        })
      )}
    </div>
  );
};

export const SelectTrigger = ({ children, className, onClick, isOpen, toggleDropdown }) => {
  return (
    <button
      onClick={(e) => {
        toggleDropdown(); // Toggle the dropdown visibility
        if (onClick) onClick(e); // Optionally call any parent onClick
      }}
      className={`w-full flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
    >
      {children}
      <span className="ml-2">{isOpen ? '▲' : '▼'}</span>
    </button>
  );
};

export const SelectValue = ({ value, placeholder, className }) => {
  return (
    <span className={`text-gray-700 ${className}`}>
      {value || placeholder || 'Select an option'}
    </span>
  );
};

export const SelectContent = ({ children, isOpen, className }) => {
  return (
    <div
      className={`absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg ${isOpen ? 'block' : 'hidden'} ${className}`}
    >
      {children}
    </div>
  );
};

export const SelectItem = ({ value, onSelect, children, className }) => {
  return (
    <div
      onClick={() => onSelect(value)} // Handle selection
      className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${className}`}
    >
      {children}
    </div>
  );
};
