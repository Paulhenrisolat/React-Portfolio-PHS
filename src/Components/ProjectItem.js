import {NavLink} from "react-router-dom"

export default function ProjectItem({projectId,projectName, projectImg, projectDesc, projectTech}){
    const basePath = "/React-Portfolio-PHS";
    const basePathImg = "/React-Portfolio-PHS/Images/";
    return(
        <NavLink to={`${basePath}/project/${projectId}`} state={{projectName, projectImg, projectDesc, projectTech}}>
            <div className="projectItem-grid">
                <div className="projectItem-grid-item">
                    <h1 className="projectTitle">{projectName || 'Name-none'}</h1>
                </div>
                <div className="projectItem-grid-item">
                    <img className='projectItem-image' src={`${basePathImg}${projectImg}`} alt="Img-none"/>
                </div>
                <div className="projectItem-grid-item">
                    <h1>{projectDesc || 'Desc-none'}</h1>
                </div>
                <div className="projectItem-grid-item">
                    <h1>{projectTech.join(', ') || 'Tech-none'}</h1>
                </div>
            </div>
        </NavLink>
    )
}