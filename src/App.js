import React from "react";
import './App.css';

const App = () => {
  const portfolioData = {
    name: "Thotakura Sai Krishna Tulasi Annapurna",
    reg:"21BCE7443",
    email: "tulasithotakura568@gmail.com",
    place: "Vijayawada, India",
    skills: ["Data Analytics", "Machine learning", "App Development", "Public Speaking","Debate","Event Management"],
    projects: [
      {
        title: "Plant Disease Detection (SAFEMORE)",
        description: "Developed a robust plant disease detection system achieving an impressive accuracy rate of 96%. This project addresses the critical challenge of timely disease detection, facilitating efficient disease management and optimizing crop yield.",
      },
      {
        title: "Surveillance Car System (HIVEMIND)",
        description: "Designed a Surveillance Car System using Raspberry Pi, high-resolution cameras, real-time streaming, and sensor modules. Users can observe and navigate surroundings in real-time with an accuracy of 98%.",
      },
      {
        title: "Robotic Earthquake Management System (JAM DETECTOR)",
        description: "Engineered an advanced Robotic Earthquake Management System utilizing Raspberry Pi, heat sensors, and the YOLO (You Only Look Once) algorithm. Developed under the guidance of a Professor, the system automates damage assessment and earthquake rescue efforts, aiming to enhance disaster response.",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2><u>REGISTRATION NUMBER:</u> {portfolioData.reg}</h2>
          <h2><u>PLACE:</u> {portfolioData.place}</h2>
          <h2><u>CONTACT:</u></h2>
          <p>Email: <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a></p>
        </div>
        <div className="body">
          <div className="about">
            <h3><u>ABOUT ME</u></h3>
            <p>I'm a third-year student at Vellore Institute of Technology majoring in computer science. I have a solid background in software development and computer science as a BTech student. Artificial intelligence, machine learning, web development, and application development are just a few of the tech-related topics that I find fascinating.
Right now, I'm working as an intern in the software development industry, where I'm developing my talents and getting real-world experience. I'm enthusiastic about how technology is advancing and how it will continue to influence our future. 
</p>
          </div>
          <div className="skills">
            <h3><u>SKILLS</u></h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3><u>PROJECTS</u></h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              </ul>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
