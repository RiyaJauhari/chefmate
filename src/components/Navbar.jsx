import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // beautiful icons (install lucide-react if not already)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-white font-bold text-2xl tracking-wide"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="logo"
            className="w-8 h-8 rounded-full shadow-md"
          />
          <span>FoodieApp</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <Link
            to="/"
            className="relative hover:text-yellow-200 transition duration-200 after:absolute after:w-0 after:h-0.5 after:bg-yellow-200 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
          >
            Home
          </Link>
          <Link
            to="/categories"
            className="relative hover:text-yellow-200 transition duration-200 after:absolute after:w-0 after:h-0.5 after:bg-yellow-200 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
          >
            Categories
          </Link>
          <Link
            to="/ai-suggestions"
            className="relative hover:text-yellow-200 transition duration-200 after:absolute after:w-0 after:h-0.5 after:bg-yellow-200 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
          >
            AI Chef
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-linear-to-b from-orange-500 to-yellow-400 text-white text-center py-4 space-y-3">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:bg-orange-600 py-2 rounded-md transition"
          >
            Home
          </Link>
          <Link
            to="/categories"
            onClick={() => setMenuOpen(false)}
            className="block hover:bg-orange-600 py-2 rounded-md transition"
          >
            Categories
          </Link>
          <Link
            to="/ai-suggestions"
            onClick={() => setMenuOpen(false)}
            className="block hover:bg-orange-600 py-2 rounded-md transition"
          >
            AI Chef
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
