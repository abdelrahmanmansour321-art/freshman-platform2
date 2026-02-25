import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { MdQuiz } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa"
import './Services.css'

function Services() {
  return (
    <section className='services' id='services'>
           <div className='top-section'>
            <h5>What i offer</h5>
            <h1>Services</h1>
        </div>

        {/* card1 */}

        <div className=' container-services'>
            <div className='serv-card'>
                <div className='info'>
                 <FaRegListAlt className='serv-icon'/>
                <h3 >sheets & boards</h3>
                  <p className='hh'> here you can have all of the sheets and 
                    boards in an easy orgnaized way </p>
                    </div>
            </div>

            {/* card2 */}

            <div className='serv-card'>
    
                <IoIosNotifications className='serv-icon' />
                <div className='info'>
                        <h3>notifeactions</h3>
                        <p class="text">once you have regesterd your account we
                            will notify you with every up coming quize or sheet</p>
                </div>
            </div>

            {/* card3 */}

            <div className='serv-card'>
                <MdQuiz className='serv-icon'/>
                <div className='info'>
                        <h3>Summarys & links</h3>
                        <p class="text"> we will provide important links summrys and resorces to make studey easier</p>
                  </div>
            </div>

        </div>

    </section>
  )
}

export default Services
