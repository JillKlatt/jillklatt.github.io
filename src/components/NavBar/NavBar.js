import './NavBar.css'
import { NavHashLink as Link } from 'react-router-hash-link';

function NavBar() {

    return (
        <div id='navbar' className='navbar'>
            <div className='link'>
                <Link smooth to="#about">About</Link>
                <Link smooth to="#projects">Projects</Link>
                <Link smooth to="#experience">Work Experience</Link>
                <Link smooth to="#contact">Contact</Link>
            </div>
        </div>
    )

}

export default NavBar