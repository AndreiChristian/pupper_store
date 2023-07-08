import React from "react";

interface ButtonProps {
  text: string;
  type: "primary" | "accent" | "warning" | "success";
  onClick?: () => void;
}

const RaisedBtn: React.FC<ButtonProps> = ({ text, type, onClick }) => {
  const btnColors = {
    primary: "from-astro-purple-500 to-astro-purple-300 hover:from-astro-purple-700 hover:to-astro-purple-500",
    accent: "from-astro-blue-500 to-astro-blue-300 hover:from-astro-blue-700 hover:to-astro-blue-500",
    warning: "from-astro-yellow-500 to-astro-yellow-300 hover:from-astro-yellow-700 hover:to-astro-yellow-500",
    success: "from-astro-green-500 to-astro-green-300 hover:from-astro-green-700 hover:to-astro-green-500",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded text-white bg-gradient-to-r shadow-md ${btnColors[type]} transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}
    >
      {text}
    </button>
  );
};

export default RaisedBtn;
