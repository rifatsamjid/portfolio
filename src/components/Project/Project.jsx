import React from "react";
import { Link } from "react-router";

const Project = ({ projects }) => {
  return (
    <section className="mt-20 lg:mt-32 py-16 px-6 lg:px-12 bg-gray-900">
      {/* Section Title */}
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="group bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-4 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-8 text-center space-y-4">
              <h3 className="text-3xl font-bold text-white">{project.title}</h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                {project.paragraph}
              </p>

              <Link
                to={`/details/${project.id}`}
                className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
