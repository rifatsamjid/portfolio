import React from "react";
import { Link } from "react-router";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-28 w-full bg-gradient-to-t from-gray-900 to-gray-800 text-white py-16">
      {/* Full-width background container */}
      <div className="w-full">
        {/* Content container - centered with max width */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center px-12 gap-12">
            {/* Contact Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Contact Me
              </h2>
              <p className="text-gray-300 text-lg">
                Feel free to reach out for collaboration or inquiries!
              </p>

              <div className="space-y-4 text-lg">
                <a
                  href="mailto:rifattamim74328@gmail.com"
                  className="flex items-center gap-3 hover:text-blue-400 transition-colors"
                >
                  <FaEnvelope className="text-xl" />
                  rifattamim74328@gmail.com
                </a>

                <a
                  href="https://wa.me/8801757968961"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-green-400 transition-colors"
                >
                  <FaPhone className="text-xl" />
                  +880 1757-968961
                </a>
              </div>
            </div>

            {/* Useful Links */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Quick Links
              </h2>
              <ul className="space-y-4 text-lg">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-purple-400 transition-colors flex items-center gap-2"
                  >
                    → About Me
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="hover:text-purple-400 transition-colors flex items-center gap-2"
                  >
                    → Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skills"
                    className="hover:text-purple-400 transition-colors flex items-center gap-2"
                  >
                    → Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-purple-400 transition-colors flex items-center gap-2"
                  >
                    → Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links
            <div className="space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent">
                Follow Me
              </h2>
              <div className="flex gap-8 text-4xl">
                <a
                  href="https://facebook.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transform hover:scale-125 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transform hover:scale-125 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transform hover:scale-125 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
              
            </div> */}
          </div>
        </div>

        {/* Bottom Wave Effect */}
        <div className="mt-12 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50"></div>
        <div className="flex justify-center items-center">
          <p className="text-gray-400 mt-8">
            © {new Date().getFullYear()} Rifat Samjid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
