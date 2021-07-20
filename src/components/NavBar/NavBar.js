import './NavBar.css'
import { NavHashLink as Link } from 'react-router-hash-link';

function NavBar() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        })
    }

    return (
        <div id='navbar' className='navbar'>
            <div className='home'>
                <Link id='home-btn' smooth to='#'>♦</Link>
                {/* <button onClick={scrollToTop}>♦</button> */}
            </div>
            <div className='link'>
                <Link smooth activeStyle={{ textDecoration: "overline" }} to="#about">About</Link>
                <Link smooth activeStyle={{ textDecoration: "overline" }} to="#projects">Projects</Link>
                <Link smooth activeStyle={{ textDecoration: "overline" }} to="#experience">Experience</Link>
                <Link smooth activeStyle={{ textDecoration: "overline" }} to="#contact">Contact</Link>
            </div>
        </div>
    )

}

export default NavBar