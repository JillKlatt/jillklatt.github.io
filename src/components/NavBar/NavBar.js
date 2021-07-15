import { MenuItems } from "./MenuItems";
import { useState } from 'react';
import Intro from "../Intro";
import About from '../About'
import Contact from '../Contact'
import Projects from '../Projects'
import Experience from "../Experience";
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