import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-light-astro-gray-100 dark:bg-dark-astro-gray-800">
      <Image className="w-full" src={imageUrl} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-light-astro-purple-500 dark:text-dark-astro-purple-500">
          {title}
        </div>
        <p className="text-gray-700 text-base dark:text-gray-300">
          {description}
        </p>
      </div>
      <div className="px-6 py-4">
        {/* you can add extra stuff here like tags, buttons etc. */}
      </div>
    </div>
  );
};

export default Card;
