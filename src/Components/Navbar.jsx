import React, { useState, useEffect } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
  
     useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // effet lors du scroll : ajoute un fond plus opaque
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#projects", label: t("navbar.projects") },
    { href: "#about", label: t("navbar.about") },
    { href: "#skills", label: t("navbar.skills") },
    { href: "#experience", label: t("navbar.experience") },
    { href: "#contact", label: t("navbar.contact") },
  ];

  return (
   <header
  className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
    scrolling
      ? "backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-md"
      : "bg-transparent"
  }`}
>
  <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
    
    {/* Logo */}
   <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight relative inline-block
  bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500
  bg-clip-text text-transparent
  transition-transform duration-300 hover:scale-110
  after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-500 after:via-purple-600 after:to-pink-500 after:blur-xl after:opacity-40
  drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]
">
  MS
</h1>


    {/* Menu Desktop */}
    <nav className="hidden md:flex items-center space-x-8 text-gray-800 dark:text-gray-100 font-medium">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="relative group hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {link.label}
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}

       {/* 🌍 Language Switcher */}
          <div className="flex items-center gap-2 ml-4 border border-gray-300 dark:border-gray-700 rounded-lg p-1 bg-gray-100 dark:bg-gray-800">
  <button
    onClick={() => i18n.changeLanguage("fr")}
    className={`px-3 py-1 rounded-lg transition-colors duration-200 ${
      i18n.language === "fr"
        ? "text-white bg-gradient-to-r from-blue-600 to-purple-600"
        : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
    }`}
  >
    FR
  </button>
  <button
    onClick={() => i18n.changeLanguage("en")}
    className={`px-3 py-1 rounded-lg transition-colors duration-200 ${
      i18n.language === "en"
        ? "text-white bg-gradient-to-r from-blue-600 to-purple-600"
        : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
    }`}
  >
    EN
  </button>
</div>



      {/* Bouton Dark Mode pour desktop */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
      >
        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800 dark:text-gray-100" />}
      </button>
    </nav>

    {/* Menu Burger + Dark Mode pour mobile */}
    <div className="flex items-center md:hidden space-x-3">
      {/* Bouton Dark Mode */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
      >
        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800 dark:text-gray-100" />}
      </button>

      {/* Burger Menu */}
      <button
        className="text-2xl text-gray-800 dark:text-gray-100 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  </div>

  {/* Menu Mobile */}
  <AnimatePresence>
    {menuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="md:hidden flex flex-col items-center space-y-6 py-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-700"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {link.label}
          </a>
        ))}

         <div className="flex gap-3 mt-4">

    <button
       onClick={() => i18n.changeLanguage("fr")}
      className={`px-4 py-2 rounded-lg font-medium transition ${
        i18n.language === "fr"
          ? "text-white bg-gradient-to-r from-blue-600 to-purple-600"
          : "bg-gray-200 dark:bg-gray-700"
      }`}
    >
      Fr
    </button>

    <button
        onClick={() => i18n.changeLanguage("en")}
      className={`px-4 py-2 rounded-lg font-medium transition ${
        i18n.language === "en"
          ? "text-white bg-gradient-to-r from-blue-600 to-purple-600"
          : "bg-gray-200 dark:bg-gray-700"
      }`}
    >
      En
    </button>

  </div>
      </motion.div>
    )}
  </AnimatePresence>
</header>

  );
}
