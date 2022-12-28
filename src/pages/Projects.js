import React from 'react';
import '../components/ProjectItem.js';
import ProjectItem from '../components/ProjectItem.js';
import '../styles/Projects.css';
import { ProjectList } from '../helpers/ProjectList.js';

function Projects() {
  return (
    <div className='Projects'>
        <h1>My Personal Projects</h1> 
        <div className='container'>
        <div className='projectList'>
            {
              ProjectList.map((project, idx)=>{
                return <ProjectItem id = {idx} name={project.name} image={project.image} />
              })
            }
        </div>
        </div>
    </div>
  )
}

export default Projects