import './NavBar.css'
import { NavHashLink as Link } from 'react-router-hash-link';

function NavBar() {

    return (
        <div id='navbar' className='navbar'>
            <div className='home'>
                JK
            </div>
            <div className='link'>
                <Link smooth activeStyle={{ textDecoration: "overline" }} to="#about">About</Link>
                <Link smooth activeStyle={{ textDecoration: "overline" }} to="#projects">Projects</Link>
                <Link smooth activeStyle={{ textDecoration: "overline" }} to="#experience">Work Experience</Link>
                <Link smooth activeStyle={{ textDecoration: "overline" }} to="#contact">Contact</Link>
            </div>
        </div>
    )

}

export default NavBar