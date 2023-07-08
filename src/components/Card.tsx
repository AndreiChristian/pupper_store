import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm relative rounded overflow-hidden shadow-lg m-4 bg-astro-gray-100 dark:bg-astro-gray-900 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
      <span className="relative">
        <Image
          className="w-full"
          src={imageUrl}
          alt="Sunset in the mountains"
          width={100}
          height={100}
        />
      </span>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-astro-purple-500 dark:text-astro-purple-100">
          {title}
        </div>
        <p className="text-astro-gray-900 text-base dark:text-astro-gray-100">
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
