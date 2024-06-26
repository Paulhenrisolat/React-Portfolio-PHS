import {NavLink} from 'react-router-dom';

export default function Button({btnLink, btnTitle, btnImg, btnDesc}){
    const basePath = "/React-Portfolio-PHS";
    
    return(
        <NavLink to={`${basePath}${btnLink}`} className={({isActive})=>(isActive ? "activeLink" : undefined)}>
            <div className="button">
                <div className='button-content'>
                    <h1 className='button-title'>{btnTitle}</h1>
                    <img className='button-image' src={btnImg} alt="PreviewIMG"/>
                    <p className='button-desc'>{btnDesc}</p>
                </div>
            </div>
        </NavLink>
    )
}