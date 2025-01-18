// src/components/ui/card.jsx
import React from 'react';

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => {
  return (
    <div className={`p-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className }) => {
  return (
    <h2 className={`text-lg font-bold text-gray-900 ${className}`}>
      {children}
    </h2>
  );
};

export const CardDescription = ({ children, className }) => {
  return (
    <p className={`text-sm text-gray-600 ${className}`}>
      {children}
    </p>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};
