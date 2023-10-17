import React from 'react';
import projects from './Projects.json'; 
import './Projects.css';

function ProjectList() {
  return (
    <div className="Main">
      <div className="Info">

          <p>Heyy, these projects are a demonstration of my passion for learning, building, problem-solving, and experimenting with tech stacks.</p>

      </div>
      <div className="ProjectList">
        {projects.map((project) => (
          <li key={project.id}>
            <div className="pro_title">
              {project.title}
            </div>
            <p>{project.description}</p>
          </li>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
