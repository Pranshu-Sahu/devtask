import React from "react";

export default function Button({ children, onClick, type = "button", className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 ${className}`}
    >
      {children}
    </button>
  );
}
