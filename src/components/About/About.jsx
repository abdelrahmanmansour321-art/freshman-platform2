import React from 'react'
import img from '../../assets/Working-rafiki.svg'
import { FaUniversity } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import './About.css'

function About() {
  return (
    <section className='about' id='about'>
        <div className='top-section'>
            <h5>get to know</h5>
            <h1>About</h1>
        </div>

        <div className='container about-container'>
            {/* img  */}
            <div className='about-me'>
                <div className='about-me-img'>

                    <img src={img} alt="" />

                </div>
            </div> 

            {/* content */}

            <div className='about-content'>
                    <div className='about-cards'>
                        <div className='about-card'>
                            <FaUniversity className='about-icon'/>
                            <h4>Suze universsity</h4>
                        </div>
                        <div className='about-card'>
                             <PiStudentBold className='about-icon'/>
                            <h4>Freshman</h4>
                        </div>
                    </div>

                            <p>Hi, I'm Abdelrahman from Suez University. 
                I created this completly ai free platform to make our studies easier and more efficient
                .If you encounter any issues, discover bugs, or have suggestions for
                improving this website, please feel free to reach out. </p>

                <a href="https://wa.me/qr/AQDXC2USSXEZD1" target='blank'  >
                <button className='button button-sec' id='bb'>Contact me</button></a>

            </div>
        </div>




    </section>
  )
}

export default About
