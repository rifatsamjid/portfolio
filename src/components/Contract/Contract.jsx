import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contract = () => {
  return (
    <section >
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
    </section>
  );
};

export default Contract;
