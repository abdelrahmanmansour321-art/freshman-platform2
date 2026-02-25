import React from 'react'
import img1 from "../../../assets/tech.jpeg"
import img2 from "../../../assets/corces.jpeg"
import img3 from "../../../assets/link.jpeg"
import img4 from '../../../assets/img4.jpeg'
import { Link } from 'react-router-dom'

function Link_dismath() {
  return (
    <div>
      <div className='cource-img'>
                     < img src= {img4} />
                   </div>
                      <div className='top'>
                       <h2>
                      Discrete math links
                       </h2>
                       </div>
      
           <article className='portofoli-item pp'>
                                 {/* img */}
                                 <div className='cource-img'>
                                     <img src={img3} alt="" />
                                 </div>
                             {/* titel */}
                             <div className='content'>
                                 <h3>Discrete math cource</h3>
                                 <h5>channel: spicy code</h5>
                                 {/* buttons */}
                                 <div className='portfolio-item-button'>
                                    <a href="https://youtu.be/Ho7BD7Yqqtk?si=Ak-2GEBj7dQdZXHm" target='blank'> <button className='button'>inter cource</button></a>
                                 </div>
                             </div>
                             </article>
    </div>
  )
}

export default Link_dismath
