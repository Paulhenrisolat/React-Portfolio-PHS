import TechData from "../Data/TechData";

export default function TechButton({name}){
    const tech = TechData.find(t => t.name === name);
    const { name: techName, logo: techLogo, link: techLink } = tech || {};
    const basePathImg = "/React-Portfolio-PHS/Images/";

    return(
        <div className="techButton-grid">
            <div className="techButton-item">
                {techLogo && <img className='techButton-logo' src={`${basePathImg}${techLogo}`} alt="Img-none"/>}
            </div>
            <div className="techButton-item">
                <h1>{techName || "NoTech"}</h1>
            </div>
            {techLink && (
            <div className="techButton-item">
                 <a href={techLink} target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
            )}
        </div>
    )
}