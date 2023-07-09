import { useDrawer } from "@/contexts/DrawerContext";
import Link from "next/link";
import { useEffect } from "react";

const Navigation = () => {
  const { closeDrawer, isDrawerOpen, openDrawer } = useDrawer();

  useEffect(() => {
    console.log(isDrawerOpen);
  }, [isDrawerOpen]);

  return (
    <nav className="sticky w-full z-10 top-0 bg-space-dark bg-opacity-80 text-white-pure shadow-md py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="hover:text-space-neon">
          Home
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/art" className="hover:text-space-neon">
            Art
          </Link>
          <Link href="/categories" className="hover:text-space-neon">
            Categories
          </Link>
          <Link href="/breeds" className="hover:text-space-neon">
            Breeds
          </Link>
          <Link href="/about" className="hover:text-space-neon">
            About
          </Link>
          <button
            onClick={() => {
              if (isDrawerOpen) {
                closeDrawer();
              } else {
                openDrawer();
              }
            }}
          >
            Hello
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
