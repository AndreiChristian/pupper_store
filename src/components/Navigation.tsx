import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link href={"/art"}>Art</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/breeds"}>Breeds</Link>
        <Link href={"/categories"}>Categories</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
