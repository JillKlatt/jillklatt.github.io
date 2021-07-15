import { MenuItems } from "./MenuItems";
import { useState } from 'react';
import Intro from "../Intro/Intro";
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Experience from "../Experience/Experience";
import { NavHashLink } from 'react-router-hash-link';
import { HashLink as Link } from 'react-router-hash-link';
//import { NavLink } from 'react-router-dom'



function NavBar() {

    return (
        <div>
        <div>
            <Link smooth to="#about">About</Link>
            <Link smooth to="#projects">Projects</Link>
            <Link smooth to="#experience">Work Experience</Link>
            <Link smooth to="#contact">Contact</Link>

        </div>
        <div>
        </div>
        </div>

    )

}

export default NavBar