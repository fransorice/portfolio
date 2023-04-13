import React from 'react'
import './styles.scss'
import proyect1 from '../../img/technohousePreview.jpg'
import proyect2 from '../../img/coronavirusPreview.png'
import proyect3 from '../../img/javascriptPreview.jpg'
import proyect4 from '../../img/reactPreview.png'
import proyect5 from '../../img/todoPreview.jpg'

const Proyectos = () => {
  return (
    <section id='proyectos'>
        <h2>Proyectos</h2>
        <div className='proyects__container'>
            <div className='proyects__container-div'>
                <div className='proyect__container'>
                    <img src={proyect1} alt="Preview proyecto Technohouse" style={{width:500, height:300}}/>
                    <div className='proyects__container-div-a'>
                        <button><a href="https://github.com/fransorice/technohouse-sorice" className='repositorioLink' target="_blank">Repositorio</a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V7c0-1.103-.897-2-2-2h-6.1L9.616 3.213A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14h.007a1 1 0 0 0 .158.551zM17.341 18H4.517l2.143-5h12.824l-2.143 5zM18 7v4H6c-.4 0-.762.238-.919.606L4 14.129V7h14z"></path></svg></button>
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='svgRight'><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2 .001 4H4V5h16zM4 19v-8h16.001l.001 8H4z"></path><path d="M14 6h2v2h-2zm3 0h2v2h-2z"></path></svg><a href="https://technohousesorice.netlify.app/" className='proyectoLink' target="_blank">Proyecto</a></button>
                    </div>  
                </div>
                <div className='proyect__container'>
                    <img src={proyect2} alt="Preview proyecto Coronavirus blog" style={{width:500, height:300}}/>
                    <div className='proyects__container-div-a' style={{marginBottom:50}}>
                        <button><a href="https://github.com/fransorice/Coronavirus-blog" className='repositorioLink' target="_blank">Repositorio</a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V7c0-1.103-.897-2-2-2h-6.1L9.616 3.213A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14h.007a1 1 0 0 0 .158.551zM17.341 18H4.517l2.143-5h12.824l-2.143 5zM18 7v4H6c-.4 0-.762.238-.919.606L4 14.129V7h14z"></path></svg></button>
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='svgRight'><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2 .001 4H4V5h16zM4 19v-8h16.001l.001 8H4z"></path><path d="M14 6h2v2h-2zm3 0h2v2h-2z"></path></svg><a href="https://coronavirus-blog.netlify.app/" className='proyectoLink' target="_blank">Proyecto</a></button>
                    </div>  
                </div>
            </div>
            <div className='proyects__container-div'>
                <div className='proyect__container'>
                    <img src={proyect3} alt="Preview proyecto Piedra Papel o Tijera El Juego" style={{width:500, height:300}}/>
                    <div className='proyects__container-div-a'>
                        <button><a href="https://github.com/fransorice/proyecto-js" className='repositorioLink' target="_blank">Repositorio</a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V7c0-1.103-.897-2-2-2h-6.1L9.616 3.213A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14h.007a1 1 0 0 0 .158.551zM17.341 18H4.517l2.143-5h12.824l-2.143 5zM18 7v4H6c-.4 0-.762.238-.919.606L4 14.129V7h14z"></path></svg></button>
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='svgRight'><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2 .001 4H4V5h16zM4 19v-8h16.001l.001 8H4z"></path><path d="M14 6h2v2h-2zm3 0h2v2h-2z"></path></svg><a href="https://piedra-papel-tijera-sorice.netlify.app/" className='proyectoLink' target="_blank">Proyecto</a></button>
                    </div>   
                </div>
                <div className='proyect__container'>
                    <img src={proyect4} alt="Preview proyecto Supernova Store" style={{width:500, height:300}}/>
                    <div className='proyects__container-div-a' style={{marginBottom:100}}>
                        <button><a href="https://github.com/fransorice/supernovastore" className='repositorioLink' target="_blank">Repositorio</a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V7c0-1.103-.897-2-2-2h-6.1L9.616 3.213A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14h.007a1 1 0 0 0 .158.551zM17.341 18H4.517l2.143-5h12.824l-2.143 5zM18 7v4H6c-.4 0-.762.238-.919.606L4 14.129V7h14z"></path></svg></button>
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='svgRight'><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2 .001 4H4V5h16zM4 19v-8h16.001l.001 8H4z"></path><path d="M14 6h2v2h-2zm3 0h2v2h-2z"></path></svg><a href="https://supernovastore.netlify.app/" className='proyectoLink' target="_blank">Proyecto</a></button>
                    </div>  
                </div>
            </div>
            <div className='proyects__container-div'>
                <div className='proyect__container'>
                    <img src={proyect5} alt="Preview proyecto ToDo List" style={{width:500, height:300}}/>
                    <div className='proyects__container-div-a'>
                        <button><a href="https://github.com/fransorice/to-do-list" className='repositorioLink' target="_blank">Repositorio</a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V7c0-1.103-.897-2-2-2h-6.1L9.616 3.213A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14h.007a1 1 0 0 0 .158.551zM17.341 18H4.517l2.143-5h12.824l-2.143 5zM18 7v4H6c-.4 0-.762.238-.919.606L4 14.129V7h14z"></path></svg></button>
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='svgRight'><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2 .001 4H4V5h16zM4 19v-8h16.001l.001 8H4z"></path><path d="M14 6h2v2h-2zm3 0h2v2h-2z"></path></svg><a href="https://todo-list-sorice-franco.netlify.app/" className='proyectoLink' target="_blank">Proyecto</a></button>
                    </div>   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Proyectos