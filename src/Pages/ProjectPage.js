import { useLocation } from "react-router-dom";
import React, { useState } from "react";

import ProjectsData from "../Data/ProjectsData";
import TechButton from "../Components/TechButton";
import UnityPlay from "../Components/UnityPlay"; // <-- notre nouveau composant

export default function ProjectPage() {
  const location = useLocation();
  const { projectName } = location.state || {};

  const basePathImg = "/React-Portfolio-PHS/Images/";

  const project = ProjectsData.find((p) => p.name === projectName);

  // destructure unity + garder les autres champs
  const { img: projectImages, desc: projectDesc, tech: projectTechs, unity } = project;

  const [showGame, setShowGame] = useState(false);
  const [imageSelected, setImageSelected] = useState(projectImages[0]);
  const handleImageClick = (img) => setImageSelected(img);

  const formatTextWithBreaks = (text) =>
    text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  return (
    <div className="">
      <h1 className="projectTitle">{projectName || "No Project Name"}</h1>

      <div className="projectTech-grid">
        {projectTechs.map((tech, index) => (
          <TechButton key={index} name={tech} />
        ))}
      </div>

      <h1 className="centerTxt">Click to zoom !</h1>
      <div className="projectImg-grid">
        <img
          className="projectImg-selected"
          src={`${basePathImg}${imageSelected}`}
          alt="Selected"
        />
        {projectImages.map((img, index) => (
          <img
            key={index}
            className="projectImg"
            src={`${basePathImg}${img}`}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(img)}
          />
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
                allowFullScreen
              />
            ) : (
              <p className="centerTxt">Coming Soon</p>
            )}
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
            {showGame && <UnityPlay unity={unity} />}
          </div>
        </div>
      )}
    </div>
  );
}
