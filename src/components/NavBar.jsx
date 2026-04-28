import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Achievements", link: "#achievements" },
  ];

  const resumeLink = "/Rohit_Kumar_Resume.pdf";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-black text-xl">R</span>
          </div>
          <h1 className="text-xl font-black tracking-tighter text-white">
            ROHIT<span className="text-indigo-500">.</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors duration-300 relative group tracking-wide"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Glowing Resume Button */}
          <a
            href={resumeLink}
            download="Rohit_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 group"
          >
            <Download size={16} className="group-hover:animate-bounce" />
            <span>Resume</span>
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 top-[60px] w-full bg-[#030712]/95 backdrop-blur-2xl z-40 md:hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <li
              key={index}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} transition-all duration-500`}
            >
              <a
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li
            className={`${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} transition-all duration-700 delay-300`}
          >
            <a
              href={resumeLink}
              className="flex items-center gap-3 px-8 py-4 bg-indigo-600 rounded-2xl text-white font-bold text-lg"
            >
              <Download /> Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
