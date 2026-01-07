import React, { useState, useEffect } from "react";
import { Link } from "react-router"; // ঠিক করা
import image from "../../assets/professional.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // navbar height + offset

      let current = "home";

      // সব সেকশন চেক করো (রিভার্স অর্ডারে – নিচ থেকে উপরে)
      [...navLinks].reverse().forEach((link) => {
        const section = document.getElementById(link.href.substring(1));
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          // যদি স্ক্রল পজিশন section-এর রেঞ্জে থাকে
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            current = link.href.substring(1);
          }
        }
      });

      // একদম নিচে পৌঁছালে Contact active করো (সেফটি নেট)
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

      if (nearBottom) {
        current = "contact";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // প্রথম লোডে

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-lg bg-gray-900/90 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-wide">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src={image}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-xl font-medium transition-all duration-300 relative
                    ${
                      activeSection === link.href.substring(1)
                        ? "text-cyan-400 scale-110 shadow-lg"
                        : "text-gray-300 hover:text-cyan-300 hover:scale-105"
                    }`}
                >
                  {link.name}
                  {/* অপশনাল: active indicator */}
                  {activeSection === link.href.substring(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 rounded-t-md"></span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Button & Menu – একই রাখো */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-cyan-600/50"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 border-t border-gray-700">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-lg font-medium transition ${
                  activeSection === link.href.substring(1)
                    ? "text-cyan-400 bg-cyan-900/50"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
