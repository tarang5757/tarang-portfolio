import React from "react";
import Link from "next/link";

type NavbarProps = {
  currentPage: "about" | "blog" | "projects" | "experiences";
};

const Navbar = ({ currentPage }: NavbarProps) => {
  return (
    <nav className="mb-10">
      <ul className="flex space-x-8">
        <li>
          <Link
            href="/"
            className={`text-lg ${
              currentPage === "about"
                ? "font-semibold text-theme"
                : "text-gray-700 hover:text-theme"
            } transition-colors`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={`text-lg ${
              currentPage === "blog"
                ? "font-semibold text-theme"
                : "text-gray-700 hover:text-theme"
            } transition-colors`}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={`text-lg ${
              currentPage === "projects"
                ? "font-semibold text-theme"
                : "text-gray-700 hover:text-theme"
            } transition-colors`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/experiences"
            className={`text-lg ${
              currentPage === "experiences"
                ? "font-semibold text-theme"
                : "text-gray-700 hover:text-theme"
            } transition-colors`}
          >
            Experiences
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
