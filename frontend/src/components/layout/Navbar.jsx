import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer">
          Ritik.
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-cyan-400 cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 cursor-pointer">About</li>
          <li className="hover:text-cyan-400 cursor-pointer">Skills</li>
          <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
          <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
        </ul>

        {/* Resume Button */}
        <button className="hidden md:block bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition">
          Resume
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800">
          <ul className="flex flex-col items-center py-4 gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>

            <button className="bg-cyan-500 px-4 py-2 rounded-lg">
              Resume
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;