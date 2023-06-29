import React from 'react'
import facebook from "../images/ico-facebook.png"
import instagram from "../images/ico-instagram.png"
import tiktok from "../images/ico-tiktok.png"
import whatsapp from "../images/ico-whatsapp.png"
import logo from "../images/DH.png"
import { ContextGlobal } from './utils/global.context'
import { useContext } from "react";



const Footer = () => {
  const {tema} = useContext(ContextGlobal)

  return (
    <footer className='footer' style={{background:tema.footer}}>
      <div className='redes' >
        <p>Powered by</p>
        <a href="https://playground.digitalhouse.com/login"> <img className='icon' src={logo} alt="digital" />  </a>
        {/* <img src={logo} alt='DH-logo' /> */}
        <a  href="https://www.facebook.com/"><img className='face' src={facebook} alt='face' /> </a>
        <a href="https://instagram.com"><img className='insta' src={instagram} alt='' /></a>
        <a href="https://tiktok.com"><img className='tiktok' src={tiktok} alt='' /></a>
        <a href="https://whatspp"><img className='wsp' src={whatsapp} alt='' /></a>
        </div>
        

    </footer>
  )
}

export default Footer
