import React from "react";
import { TypeAnimation } from "react-type-animation";
import bannerImg from "../../assets/banner.jpg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Banner = () => {
  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=1DZlx3ylrHRN-PrPuujDchwi3sVd5GXrU";

  const handleDownload = () => {
    // Create a temporary link and trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Rifat-Samjid-Resume.pdf"; // Optional: sets the saved file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-20 lg:mt-28 min-h-screen lg:min-h-0 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Left Side - Text */}
      <div className="flex-1 text-center lg:text-left space-y-6">
        <h2 className="text-3xl md:text-3xl lg:text-5xl font-light text-gray-700">
          Hi, I am <span className="font-bold text-gray-900">Rifat</span>
        </h2>

        {/* Typing Animation */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          <TypeAnimation
            sequence={[
              "I AM A Frontend Developer.",
              2000,
              "I AM A React Developer.",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            cursor={true}
            style={{ display: "block" }}
          />
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            onClick={handleDownload}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-8 mt-8">
          <a
            href="https://www.facebook.com/ri.f.at.906819"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-blue-600 hover:text-blue-800 transform hover:scale-125 transition-all duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>

          <a
            href="https://github.com/rifatsamjid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-800 hover:text-black transform hover:scale-125 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:rifattamim74328@gmail.com"
            className="text-4xl text-red-600 hover:text-red-800 transform hover:scale-125 transition-all duration-300"
            aria-label="Email"
          >
            <MdEmail />
          </a>

          <a
            href="https://www.linkedin.com/in/rifat-samjid/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-blue-700 hover:text-blue-900 transform hover:scale-125 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <img
            className="relative z-10 h-80 w-80 md:h-96 md:w-96 object-cover rounded-full border-8 border-white shadow-2xl hover:scale-105 transition-transform duration-500"
            src={bannerImg}
            alt="Rifat Samjid"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
