import React from "react";
import htmlImg from "../../assets/MySkills/html5.jpg";
import cssImg from "../../assets/MySkills/CSS3_logo.svg.png";
import tailwindImg from "../../assets/MySkills/tailwind.png";
import jsImg from "../../assets/MySkills/Unofficial_JavaScript_logo_2.svg.png";
import reactImg from "../../assets/MySkills/React-icon.svg.png";
import mongoImg from "../../assets/MySkills/Mongo.png";
import vscodeImg from "../../assets/MySkills/Visual_Studio_Code_1.35_icon.svg.png";
import figmaImg from "../../assets/MySkills/Figma-logo.svg.png";

const MySkills = () => {
  const SkillCard = ({ imgSrc, label }) => (
    <div className="group flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-2">
      <img
        src={imgSrc}
        alt={label}
        className="w-24 h-24 object-contain mb-4 drop-shadow-md"
      />
      <p className="text-gray-700 font-medium text-lg">{label}</p>
    </div>
  );

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        My Skills
      </h2>

      {/* Frontend Skills */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-center mb-8 text-gray-700">
          Frontend
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          <SkillCard imgSrc={htmlImg} label="HTML5" />
          <SkillCard imgSrc={cssImg} label="CSS3" />
          <SkillCard imgSrc={tailwindImg} label="Tailwind CSS" />
          <SkillCard imgSrc={jsImg} label="JavaScript" />
          <SkillCard imgSrc={reactImg} label="React" />
        </div>
      </div>

      {/* Backend Skills */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-center mb-8 text-gray-700">
          Backend
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center ">
          <SkillCard imgSrc={mongoImg} label="MongoDB" />
          
        </div>
      </div>

      {/* Tools */}
      <div>
        <h3 className="text-3xl font-semibold text-center mb-8 text-gray-700">
          Tools
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          <SkillCard imgSrc={figmaImg} label="Figma" />
          <SkillCard imgSrc={vscodeImg} label="VS Code" />
          
        </div>
      </div>
    </section>
  );
};

export default MySkills;
