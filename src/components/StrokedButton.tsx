import React from "react";

interface ButtonProps {
  text: string;
  type: "primary" | "accent" | "warning" | "success";
  onClick?: () => void;
}

const StrokedBtn: React.FC<ButtonProps> = ({ text, type, onClick }) => {
  const btnColors = {
    primary: "border-astro-purple-500 text-astro-purple-500 hover:bg-astro-purple-500 hover:text-white shadow-lg primary-shadow",
    accent: "border-astro-blue-500 text-astro-blue-500 hover:bg-astro-blue-500 hover:text-white shadow-lg accent-shadow",
    warning: "border-astro-yellow-500 text-astro-yellow-500 hover:bg-astro-yellow-500 hover:text-white shadow-lg warning-shadow",
    success: "border-astro-green-500 text-astro-green-500 hover:bg-astro-green-500 hover:text-white shadow-lg success-shadow",
  };
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded bg-transparent border ${btnColors[type]} transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}
    >
      {text}
    </button>
  );
};

export default StrokedBtn;
