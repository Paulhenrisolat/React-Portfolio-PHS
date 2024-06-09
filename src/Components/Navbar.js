import {NavLink} from 'react-router-dom';

export default function Navbar(){
    const basePath = "/React-Portfolio-PHS";

    return(
        <div className="navbar">
            <ul>
                <li><NavLink to={`${basePath}/`} className={({isActive})=>(isActive ? "activeLink" : undefined)}>Home</NavLink></li>
                <li><NavLink to={`${basePath}/projects`} className={({isActive})=>(isActive ? "activeLink" : undefined)}>Projects</NavLink></li>
                <li><NavLink to={`${basePath}/contact`} className={({isActive})=>(isActive ? "activeLink" : undefined)}>Contact</NavLink></li>
            </ul>
        </div>
    )
}