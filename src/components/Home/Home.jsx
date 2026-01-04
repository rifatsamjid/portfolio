import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import MySills from "../MySkills/MySills";
import About from "../About/About";
import Project from "../Project/Project";


const Home = () => {
  const[projects, setProjects]=useState([])

  useEffect(()=>{
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setProjects(data));
  })
  return (
    <div>
      <Banner />
      <About />
      <MySills />
      <Project projects={projects}/>
    </div>
  );
};

export default Home;
