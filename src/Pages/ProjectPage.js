import { useLocation } from "react-router-dom";

export default function ProjectPage(){
    const location = useLocation();
    const{projectName} = location.state ||{};

    return(
        <div className="">
            <h1>{projectName || 'No Project Name'}</h1>
        </div>
    )
}