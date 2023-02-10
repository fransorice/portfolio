import React from 'react'
import './styles.scss'
import perfil from '../../img/fotoperfil.png'
import ScrollDown from '../ScrollDown'
import { Link } from 'react-scroll'

const Inicio = () => {
  return (
    <div className='inicio__container' id='inicio'>
        <div className='descripcion__container'>
            <div>
                <h2>¡Hola! Soy Franco .<span>&#160;</span></h2>
            </div>
            <h5>Front-end Web Developer</h5>
            <div><hr/></div>
            <p>
                Desarrollador web Front-end dedicado en construir páginas web junto a buenas prácticas y en busca de mi <br/> primer experiencia laboral. 
            </p>
            <div className='conectemos__container'>
                <Link to="contactMe" spy={true} smooth={true} offset={-100} duration={500}>
                    <button>
                        <p>Conectemos</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0092E4" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"/></svg>
                    </button>
                </Link>
                <ScrollDown/>
            </div>     
        </div>
        <img src={perfil} alt="foto de perfil" width={350} height={350} style={{marginRight:200}}/>
    </div>
  )
}

export default Inicio