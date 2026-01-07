import React from "react";

const About = () => {
  return (
    <section className="mt-20 lg:mt-32 py-16 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
        About Me
      </h2>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
            <p className="text-lg leading-relaxed text-gray-700">
              Hi, I’m <span className="font-semibold text-gray-900">Rifat</span>{" "}
              from Rajshahi. I’m passionate about frontend development and
              building user-friendly web applications.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              I’m fluent in Bangla, English, and Hindi, which helps me
              collaborate effectively with diverse teams. Determined and
              hardworking, I embrace challenges and stay committed to achieving
              my goals with honesty and fairness.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              Skilled in JavaScript, HTML, CSS, React, and modern tools, I’m
              excited to solve real-world problems through clean, responsive
              code and continue growing as a developer.
            </p>
          </div>
        </div>

        {/* Developer Illustration */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-40 animate-pulse"></div>
            <img
              src="https://media.istockphoto.com/id/1446486926/vector/front-and-back-end-of-development-responsive-web-design-website-interface-coding-and.jpg?s=612x612&w=0&k=20&c=EygMvCkwJwl1_tifxDKIP2ornYNxZhKxlFh7--HfXBM="
              alt="Frontend Developer Illustration"
              className="relative z-10 w-full max-w-md rounded-2xl shadow-2xl border-8 border-white hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default About;
