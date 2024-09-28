// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Dynamic Pricing Using Reinforcement Learning</h3>
        <p>Implemented reinforcement learning algorithms to optimize pricing decisions.</p>
      </div>
      <div className="project-card">
        <h3>Real-Time Object Detection</h3>
        <p>Used the YOLO model for real-time object detection in complex environments.</p>
      </div>
      <div className="project-card">
        <h3>Rekart Innovations Tool</h3>
        <p>Developed a project order automation tool using React, Node.js, and MongoDB.</p>
      </div>
    </div>
  );
};

export default Projects;
