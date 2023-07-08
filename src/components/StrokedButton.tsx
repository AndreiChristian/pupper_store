import React from "react";

interface ButtonProps {
  text: string;
  type: "primary" | "accent" | "warning" | "success";
  onClick?: () => void;
}

const StrokedBtn: React.FC<ButtonProps> = ({ text, type, onClick }) => {
  const btnColors = {
    primary:
      "border-transparent text-astro-purple-500 hover:bg-astro-purple-500 hover:border-astro-purple-500 hover:text-white shadow-primary",
    accent:
      "border-transparent text-astro-blue-500 hover:bg-astro-blue-500 hover:border-astro-blue-500 hover:text-white shadow-accent",
    warning:
      "border-transparent text-astro-yellow-500 hover:bg-astro-yellow-500 hover:border-astro-yellow-500 hover:text-white shadow-warning",
    success:
      "border-transparent text-astro-green-500 hover:bg-astro-green-500 hover:border-astro-green-500 hover:text-white shadow-success",
  };

  return (
    <button
      onClick={onClick}
      className={`inline-block px-4 py-2 text-sm font-medium rounded-md ${btnColors[type]} transition duration-300 ease-in-out transform hover:shadow-none stroked-btn`}
    >
      {text}
    </button>
  );
};

export default StrokedBtn;
