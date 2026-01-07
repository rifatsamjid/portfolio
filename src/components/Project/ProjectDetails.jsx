import { useLoaderData, useNavigate } from "react-router"; // Added useNavigate

const ProjectDetails = () => {
  const project = useLoaderData();
  const navigate = useNavigate(); // For going back

  const handleGoBack = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <div className="min-h-screen mt-16 bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button - Top Left of Image */}
        <button
          onClick={handleGoBack}
          className="absolute top-28 left-4 lg:left-52 flex items-center gap-2 px-5 py-3 bg-black text-white font-medium rounded-lg shadow-lg hover:bg-gray-600 transition transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
        {/* Image Section with Back Button */}
        <div className="relative flex justify-center mt-16 mb-12">
          <img
            src={project.img}
            alt={project.title}
            className="rounded-xl shadow-2xl max-w-full h-auto object-cover max-h-[600px]"
          />
        </div>

        {/* Sub-title and Description - Centered below image */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {project.sub_title}
          </h1>
          {project.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {project.description}
            </p>
          )}
          {project.paragraph && !project.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {project.paragraph}
            </p>
          )}
        </div>

        {/* Details Section */}
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-10 text-left">
            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technology.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Challenges
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {project.challenges}
              </p>
            </div>

            {/* Future Updates */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Future Updates
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {project.futureUpdate}
              </p>
            </div>
          </div>
          <div className="md:col-span-1"></div>
        </div>

        {/* Buttons - Repository & Live Link */}
        <div className="flex justify-center gap-6 mt-16">
          <a
            href={project["git-repo"]}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition shadow-lg"
          >
            View Repository
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition shadow-lg"
          >
            Visit Live Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
