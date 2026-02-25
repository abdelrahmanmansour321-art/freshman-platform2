import React from 'react'
import './Footer.css'
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
   <footer>
        <a href="" className='footer-logo'> Abdelrahman Mansour </a>

        <ul className='permalinks'>
            <li><a href="#Home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#cources">Courses</a></li>
         
        </ul>
        
        <div className="footer-icons">
           
                <a href="https://github.com/abdelrahmanmansour321-art" target='blank'> <FaGithubSquare /></a>
                <a href="mailto:abdomansmansor@gmail.com" target='blank'><SiGmail /></a>
                <a href="https://wa.me/qr/AQDXC2USSXEZD1" target='blank'><FaSquareWhatsapp /></a>

        </div>

        <div className='footer-copyrhight'>
            <small>&copy; <a href="">Abdelrahman mansour</a> all rights reserved</small>
        </div>
   </footer>
  )
}

export default Footer
