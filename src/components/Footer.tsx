import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-space-dark text-white-pure py-6 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold mb-3">About Us</h3>
          <p className="text-base">
            We at PupperStore are passionate about digital dog art and love
            sharing our creations with the world.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3">Links</h3>
          <ul>
            <li>
              <Link href="/" className="text-base hover:text-space-neon">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-base hover:text-space-neon">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-base hover:text-space-neon">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3">Contact</h3>
          <p className="text-base">123 Street, City, State, Country</p>
          <p className="text-base">Email: info@pupperstore.com</p>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-space-medium">
        © {new Date().getFullYear()} PupperStore. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
