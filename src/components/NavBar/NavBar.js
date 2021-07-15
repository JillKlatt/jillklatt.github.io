import { MenuItems } from "./MenuItems";
import { useState } from 'react';
import About from '../About'
import Contact from '../Contact'
import Projects from '../Projects'
import Experience from "../Experience";
import { NavLink } from 'react-router-dom';


function NavBar() {

    return (
        <div>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/experience'>Work Experience</NavLink>
            <NavLink to ='/contact'>Contact</NavLink>

        </div>
    )

}

export default NavBar