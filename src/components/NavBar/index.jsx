import React, { useState } from 'react'
import './styles.scss'
import { Link } from "react-scroll";

const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);

  const scroll = () => {
    if(window.scrollY >= 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  window.addEventListener('scroll', scroll)

  return (
    <nav className={scrolled ? "navbar active" : "navbar"}>
        <div className="navbar-container">
            <h2><Link to="inicio" spy={true} smooth={true} offset={-260} duration={500}>Franco Sorice</Link></h2>
            <ul className='navbar__ul'>
               <li><Link to="inicio" spy={true} smooth={true} offset={-260} duration={500}>Inicio</Link></li>
               <li><Link to="sobreMi" spy={true} smooth={true} offset={-130} duration={500}>Sobre mi</Link></li>
               <li><Link to="skills" spy={true} smooth={true} offset={-200} duration={500}>Tecnologias</Link></li>
               <li><Link to="proyectos" spy={true} smooth={true} offset={-100} duration={500}>Proyectos</Link></li>
            </ul>
            <div className='navbar__contact'>
            <Link to="contactMe" spy={true} smooth={true} offset={-100} duration={500}><button className='contactButton'>Contactame</button></Link>
            </div>
        </div>
    </nav>
  )
}

export default NavBar