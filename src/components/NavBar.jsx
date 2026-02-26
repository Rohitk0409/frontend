import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Achievements", link: "#achievements" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-800 text-transparent bg-clip-text">
          Portfolio
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-indigo-700 font-medium items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="hover:text-indigo-500 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <a
            href="
          https://drive.google.com/file/d/1ND7NgI8Ihdw4F9wRwu3-w0NDAxCliLIZ/view?usp=drive_link"
            className="flex gap-2  items-center bg-indigo-600 text-white px-3 py-2 rounded-md cursor-pointer font-serif"
          >
            Resume <Download size={15} className="font-bold" />
          </a>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-indigo-50 transition"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-indigo-700" />
          ) : (
            <Menu className="w-6 h-6 text-indigo-700" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-indigo-100 shadow-md">
          <ul className="flex flex-col items-center space-y-3 py-4 font-medium text-indigo-700">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block px-4 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
