import { useLocation } from "react-router-dom";
import React, { useState } from "react";

import ProjectsData from "../Data/ProjectsData";
import TechButton from "../Components/TechButton";

export default function ProjectPage(){
    const location = useLocation();
    const{projectName} = location.state ||{};
    const basePath = "/React-Portfolio-PHS";
    const basePathImg = "/React-Portfolio-PHS/Images/";

    const project = ProjectsData.find(p => p.name === projectName);
    const { img: projectImages, desc: projectDesc, tech: projectTechs } = project;

    const [imageSelected, setImageSelected] = useState(projectImages[0]);
    const handleImageClick = (img) => {
        setImageSelected(img);
    };

    return(
        <div className="">
            <h1 className="projectTitle">{projectName || 'No Project Name'}</h1>
            <div className='projectTech-grid'>
                {projectTechs.map((tech, index) => (<TechButton key={index} name={tech}/>))}
            </div>
            <div className="projectImg-grid">
                <img className="projectImg-selected" src={`${basePathImg}${imageSelected}`} alt="Selected" />
                {projectImages.map((img, index) => (
                    <img key={index} className="projectImg" src={`${basePathImg}${img}`} alt={`Image ${index + 1}`}
                        onClick={() => handleImageClick(img)}/>
                ))}
            </div>

            <div className="projectDescription">
                <h1>Description</h1>
                <p>{projectDesc}</p>
            </div>

        </div>
    )
}