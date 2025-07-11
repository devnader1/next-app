import Link from "next/link";
import React from "react";

function Header() {
  const pages = [
    { id: 1, path: "/", title: "Home" },
    { id: 2, path: "/about", title: "About" },
    { id: 3, path: "/products", title: "Products" },
  ];
  return (
    <header className="flex  justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-3xl font-semibold">LOGO</h1>
      <nav>
        <ul className="flex space-x-4">
          {pages.map((page) => (
            <li key={page.id}>
              <Link href={page.path}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
