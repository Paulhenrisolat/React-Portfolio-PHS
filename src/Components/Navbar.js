import {NavLink} from 'react-router-dom';

export default function Navbar(){
    return(
        <div className="navbar">
            <ul>
                <li><NavLink to="/" className={({isActive})=>(isActive ? "activeLink" : undefined)}>Home</NavLink></li>
                <li><NavLink to="projects" className={({isActive})=>(isActive ? "activeLink" : undefined)}>Projects</NavLink></li>
                <li>Contact</li>
            </ul>
        </div>
    )
}