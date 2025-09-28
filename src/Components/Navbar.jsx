import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header data-aos="fade-down" className="fixed bg-white dark:bg-gray-800 shadow-md  w-full  top-0 left-0 z-40">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Mohamed Sellak</h1>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#projects" className="hover:underline">Projets</a>
          <a href="#skills" className="hover:underline">Compétences</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Bouton burger pour mobile */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md flex flex-col items-center py-6 space-y-4">
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:underline">Projets</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:underline">Compétences</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:underline">Contact</a>
        </div>
      )}
    </header>
  );
}
