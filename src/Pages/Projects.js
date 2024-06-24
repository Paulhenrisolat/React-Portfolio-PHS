import { useState } from 'react';

import ProjectItem from '../Components/ProjectItem';
import ProjectsData from '../Data/ProjectsData';

export default function Projects(){
    const[searchInput, setSearchInput] = useState('');
    const[searchTech, setSearchTech] = useState('');

    const handleInputChange = (inputChanged)=>{
        setSearchInput(inputChanged.target.value)
    };
    const handleTechChange = (techChanged)=>{
        setSearchTech(techChanged.target.value)
    };

    const filteredProjects = ProjectsData.filter((project) => {
        const matchesSearchInput = project.name.toLowerCase().includes(searchInput.toLowerCase());
        const matchesTech = searchTech ? project.tech.includes(searchTech) : true;
        return matchesSearchInput && matchesTech;
    });

    return(
        <div className="projects">
            <h1>Projects :</h1>
            <label htmlFor="search">Project name:</label><input type="search" id="search" value={searchInput} onChange={handleInputChange}/>
            <label htmlFor="techs">Tech:</label>
            <select name="techs" id="techs" value={searchTech} onChange={handleTechChange}>
                <option value=""></option>
                <option value="C#">C#</option>
                <option value="Unity">Unity</option>
                <option value="2D">2D</option>
                <option value="3D">3D</option>
            </select>
            <div className='projects-grid'>
                {filteredProjects.map((project, index)=>(
                    <ProjectItem key={index} projectId={index} projectName={project.name} projectImg={project.img[0]} projectDesc={project.desc} projectTech={project.tech}/>
                ))}
            </div>
        </div>
    )
}