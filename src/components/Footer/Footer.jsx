import React from "react";
import { Link } from "react-router";

import Contract from "../Contract/Contract";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="mt-36 rounded-sm w-full bg-gradient-to-t from-gray-900 to-gray-800 text-white py-16"
    >
      {/* Full-width background container */}
      <div className="w-full">
        <section>
          {/* Content container - centered with max width */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-center px-12 gap-12">
              {/* Contact Section */}
              <Contract />
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
            </div>
          </div>

          {/* Bottom Wave Effect */}
          <div className="mt-12 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50"></div>
          <div className="flex justify-center items-center">
            <p className="text-gray-400 mt-8">
              © {new Date().getFullYear()} Rifat Samjid. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
