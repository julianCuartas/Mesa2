import React from 'react'
import './CSS/footerContainer.css'
import facebook from '../Assets/facebook.svg'
import insta from '../Assets/insta.svg'
import whats from '../Assets/whats.svg'

function Footer() {
  return (
    <div className='footerContainer'>
    <div className='footerElements'>
        <div className='footerImgContainer'>
            <img className='footerImg' src='https://res.cloudinary.com/dz1rjmgc8/image/upload/v1710364213/LogoMesaTecnica-03_vaknei.png'></img>
            <p className='txtFooter'>Buscamos visibilizar la producción de café especial del valle del cauca al rededor de todo el mundo. </p>
        </div>
        <div className='containerNuestrasRedes'>
            <p className='footerTittle'>Nuestras redes</p>
            <div>
                <a href='https://www.facebook.com/mesa.tecnica.de.cafes.especiales.del.val'><img src={facebook}></img></a>
                <a href='https://www.instagram.com/mesa.tecn.cafespecialesvalle/'><img src={insta}></img></a>
                <a href=''><img src={whats}></img></a>
            </div>
        </div>
        <div >
            <p className='footerTittle'>Sobre nosotros</p>
                <div>
                    <p className='txtFooter'>Quienes somos</p>
                    <p className='txtFooter'>Beneficios</p>
                    <p className='txtFooter'>Aliados</p>
                    <p className='txtFooter'>Eventos</p>
                </div>
        </div>
    </div>
    <p className='txtFin'>¡El Valle también es café!</p>
    <div className='lineFooter'></div>
    <p className='txtFooter'>by Seers agencia multimedia</p>
    </div>
  )
}

export default Footer