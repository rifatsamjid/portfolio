import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import MySills from "../MySkills/MySills";
import About from "../About/About";
import Project from "../Project/Project";
import Educational from "../Educational/Educational";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  });
  return (
    <div>
      <section id="home">
        <Banner />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Educational />
      </section>

      {/* Skills */}
      <section id="skills">
        <MySills />
      </section>

      {/* Projects */}
      <section id="projects">
        <Project projects={projects} />
      </section>
    </div>
  );
};

export default Home;
