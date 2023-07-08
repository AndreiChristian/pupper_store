import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="sticky w-full z-10 top-0 bg-light-astro-gray-100 dark:bg-dark-astro-gray-800 text-light-astro-blue-500 dark:text-dark-astro-blue-500 shadow-md py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex space-x-4">
          <Link
            href="/art"
            className="hover:text-light-astro-purple-500 dark:hover:text-dark-astro-purple-500"
          >
            Art
          </Link>
          <Link
            href="/categories"
            className="hover:text-light-astro-purple-500 dark:hover:text-dark-astro-purple-500"
          >
            Categories
          </Link>
          <Link
            href="/breeds"
            className="hover:text-light-astro-purple-500 dark:hover:text-dark-astro-purple-500"
          >
            Breeds
          </Link>
          <Link
            href="/about"
            className="hover:text-light-astro-purple-500 dark:hover:text-dark-astro-purple-500"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
