import React, { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const {theme,toggleTheme}=useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--nav)] text-white flex justify-between items-center p-4">
      <div>
        <Link to="/" className="text-3xl font-extrabold">
          👩🏻‍🎓MySite
        </Link>
      </div>
      {/* Hamburger Icon */}
      <div className="md:hidden" onClick={toggleMenu}>
        <svg
          className="w-6 h-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <ul
        className={`p-2 gap-4 font-bold md:flex md:items-center md:static z-50 absolute bg-[var(--nav)] w-full md:w-auto left-0 top-16  md:top-0 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-200"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-200"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-200"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Portfolio"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-200"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <button onClick={toggleTheme}
                className="px-3 py-1 rounded bg-[var(--nav)] hover:opacity-80 transition"
        >
          {theme === "light" ? "🌙 Dark" : "☀ Light"}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
