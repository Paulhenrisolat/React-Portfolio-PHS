import { useLocation } from "react-router-dom";
import React, { useState , Suspense, lazy } from "react";

import ProjectsData from "../Data/ProjectsData";
import TechButton from "../Components/TechButton";

// Lazy load du composant Unity
const UnityPlay = lazy(() => import("../Components/UnityPlay"));

export default function ProjectPage(){
    const location = useLocation();
    const{projectName} = location.state ||{};
    const basePath = "/React-Portfolio-PHS";
    const basePathImg = "/React-Portfolio-PHS/Images/";

    const project = ProjectsData.find(p => p.name === projectName);

   // Ajout minimal ici : destructure unity + garder les autres champs
    const { img: projectImages, desc: projectDesc, tech: projectTechs, unity } = project;
    
    // Ajout minimal : état pour afficher le jeu
    const [showGame, setShowGame] = useState(false);

    const [imageSelected, setImageSelected] = useState(projectImages[0]);
    const handleImageClick = (img) => {
        setImageSelected(img);
    };

    //Reformat \n in text for html
    const formatTextWithBreaks = (text) => {
        return text.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ));
      };

    return(
        <div className="">
            <h1 className="projectTitle">{projectName || 'No Project Name'}</h1>
            <div className='projectTech-grid'>
                {projectTechs.map((tech, index) => (<TechButton key={index} name={tech}/>))}
            </div>
            <h1 className="centerTxt">Click to zoom !</h1>
            <div className="projectImg-grid">
                <img className="projectImg-selected" src={`${basePathImg}${imageSelected}`} alt="Selected" />
                {projectImages.map((img, index) => (
                    <img key={index} className="projectImg" src={`${basePathImg}${img}`} alt={`Image ${index + 1}`}
                        onClick={() => handleImageClick(img)}/>
                ))}
            </div>

            
            <div className="projectDescription-parent">
                <div className="projectDescription">
                    <h1 className="projectDescriptionTitle">Description</h1>
                    <p>{formatTextWithBreaks(projectDesc)}</p>
                </div>
            </div>

            <div className="projectDescription-parent">
                <div className="projectDescription">
                    <h1 className="projectDescriptionTitle">Video</h1>
                    <div>
                        {project.youtube ? (
                            <iframe
                                width="560"
                                height="315"
                                src={project.youtube}
                                title="Project Video"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                        ) : (<p className="centerTxt">Coming Soon</p>)}
                    </div>
                </div>
            </div>

            {/* ---------------- Unity Game ---------------- */}
            {unity && (
                <div className="projectDescription-parent">
                    <div className="projectDescription">
                        <h1 className="projectDescriptionTitle">Play Game</h1>
                        {!showGame && (
                            <button onClick={() => setShowGame(true)}>▶ Launch Game</button>
                        )}
                        {showGame && (
                            <Suspense fallback={<p>Loading game...</p>}>
                                <UnityPlay unity={unity} />
                            </Suspense>
                        )}
                    </div>
                </div>
            )}

        </div>
    )
}