import {NavLink} from 'react-router-dom';

export default function Navbar(){
    return(
        <div className="navbar">
            <ul>
                <li><NavLink to="React-Portfolio-PHS" className={({isActive})=>(isActive ? "activeLink" : undefined)}>Home</NavLink></li>
                <li><NavLink to="projects" className={({isActive})=>(isActive ? "activeLink" : undefined)}>Projects</NavLink></li>
                <li><NavLink to="contact" className={({isActive})=>(isActive ? "activeLink" : undefined)}>Contact</NavLink></li>
            </ul>
        </div>
    )
}