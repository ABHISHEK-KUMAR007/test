import React from 'react';

const Button = ({ children, variant, size, className, ...props }) => {
  const baseStyles = "inline-block rounded-lg font-medium text-center transition-all focus:outline-none transform active:scale-95";

  // Define variant styles with hover, focus, and active states
  const variantStyles = {
    default: "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-500 text-white shadow-md hover:shadow-lg",
    outline: "border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white shadow-sm hover:shadow-md",
    danger: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-500 text-white shadow-md hover:shadow-lg",
    success: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white shadow-md hover:shadow-lg",
    // Add more variants as needed
  };

  // Define size styles
  const sizeStyles = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-md",
    lg: "px-9 py-4 text-lg",
  };

  // Combine all styles
  const buttonClasses = `${baseStyles} ${variantStyles[variant] || variantStyles.default} ${sizeStyles[size] || sizeStyles.md} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
