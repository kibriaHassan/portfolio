import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Clipboard, Code, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (isOpen) toggleMenu(); // sidebar open থাকলে sidebar বন্ধ করবে
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Golam Kibria Hassan</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <button onClick={() => handleScroll("home")} className="hover:text-blue-500 transition">Home</button>
            <button onClick={() => handleScroll("about")} className="hover:text-blue-500 transition">About</button>
            <button onClick={() => handleScroll("skills")} className="hover:text-blue-500 transition">Skills</button>
            <button onClick={() => handleScroll("projects")} className="hover:text-blue-500 transition">Projects</button>
            <button onClick={() => handleScroll("contact")} className="hover:text-blue-500 transition">Contact</button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-transparent" onClick={toggleMenu} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64
          bg-gradient-to-b from-sky-100 to-blue-50 border-r border-blue-200
          text-gray-900 shadow-2xl rounded-r-3xl p-6
          transition-transform duration-300 ease-in-out z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <nav className="space-y-6 text-base font-medium">
          <button onClick={() => handleScroll("home")} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-200 hover:text-blue-800 transition w-full text-left">
            <Home className="w-5 h-5" /> Home
          </button>
          <button onClick={() => handleScroll("about")} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-200 hover:text-blue-800 transition w-full text-left">
            <User className="w-5 h-5" /> About
          </button>
          <button onClick={() => handleScroll("skills")} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-200 hover:text-blue-800 transition w-full text-left">
            <Clipboard className="w-5 h-5" /> Skills
          </button>
          <button onClick={() => handleScroll("projects")} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-200 hover:text-blue-800 transition w-full text-left">
            <Code className="w-5 h-5" /> Projects
          </button>
          <button onClick={() => handleScroll("contact")} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-200 hover:text-blue-800 transition w-full text-left">
            <Mail className="w-5 h-5" /> Contact
          </button>
        </nav>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
