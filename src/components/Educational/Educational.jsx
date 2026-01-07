import React from 'react';

const Educational = () => {
  return (
    // Educational Journey Section
    <section id="education" className="mt-20 py-16 px-8">  {/* এখানে id যোগ করলাম */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          My Educational Journey
        </h3>

        {/* Horizontal Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Undergraduate / Bachelor's Degree */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 text-white shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-3 transition-all duration-500">
            <h4 className="text-2xl md:text-3xl font-bold mb-6">
              B.Sc. in Computer Science & Engineering
            </h4>
            <div className="space-y-4 text-lg">
              <p><span className="font-semibold">Institute:</span> Varendra University, Rajshahi</p>
              <p><span className="font-semibold">Subject:</span> Computer Science & Engineering</p>
              <p><span className="font-semibold">Status:</span> Ongoing</p>
              <p><span className="font-semibold">Expected Graduation:</span> 2030</p>
            </div>
          </div>

          {/* HSC */}
          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-8 text-white shadow-2xl hover:shadow-green-500/50 hover:-translate-y-3 transition-all duration-500">
            <h4 className="text-2xl md:text-3xl font-bold mb-6">
              Higher Secondary Certificate (HSC)
            </h4>
            <div className="space-y-4 text-lg">
              <p><span className="font-semibold">Institute:</span> Mosjid Mission Academy (School and College), Rajshahi</p>
              <p><span className="font-semibold">Group:</span> Science</p>
              <p><span className="font-semibold">GPA:</span> 5.00 (Out of 5.0)</p>
              <p><span className="font-semibold">Passing Year:</span> 2024</p>
            </div>
          </div>

          {/* SSC */}
          <div className="bg-gradient-to-br from-teal-400 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl hover:shadow-teal-500/50 hover:-translate-y-3 transition-all duration-500">
            <h4 className="text-2xl md:text-3xl font-bold mb-6">
              Secondary School Certificate (SSC)
            </h4>
            <div className="space-y-4 text-lg">
              <p><span className="font-semibold">Institute:</span> Dhopapra High School, Rajshahi</p>
              <p><span className="font-semibold">Group:</span> Science</p>
              <p><span className="font-semibold">GPA:</span> 5.00 (Out of 5.0)</p>
              <p><span className="font-semibold">Passing Year:</span> 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educational;