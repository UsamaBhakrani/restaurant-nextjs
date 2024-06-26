import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-red-800 font-bold text-2xl" href="">
        Burger Shack
      </Link>
      <nav className="flex items-center gap-6 text-gray-500 font-semibold">
        <Link href="">Home</Link>
        <Link href="">Menu</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
        <Link className="bg-red-800 text-white px-6 py-2 rounded-lg" href="">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
