import ProjectItem from '../Components/ProjectItem';
import ProjectsData from '../Data/ProjectsData';

export default function Projects(){
    return(
        <div className="projects">
            <h1>Projects :</h1>
            project name:
            <input type="search"/>
            <label for="techs">Tech:</label>
            <select name="techs" id="techs">
                <option value="c#">C#</option>
                <option value="unity">Unity</option>
                <option value="2d">2D</option>
                <option value="3d">3D</option>
            </select>
            <div className='projects-grid'>
                {ProjectsData.map((project, index)=>(
                    <ProjectItem key={index} projectId={index} projectName={project.name} projectImg={project.img} projectDesc={project.desc} projectTech={project.tech}/>
                ))}
            </div>
        </div>
    )
}