import React from 'react'

import img1 from "../../../assets/tech.jpeg"
import img2 from "../../../assets/corces.jpeg"
import img3 from "../../../assets/link.jpeg"
import { Link } from 'react-router-dom'

function Link_math2() {
  return (
    <div>

      <div className='cource-img'>
               < img src= {img1} />
             </div>
                <div className='top'>
                 <h2>
                math 2 links
                 </h2>
                 </div>

     <article className='portofoli-item pp'>
                           {/* img */}
                           <div className='cource-img'>
                               <img src={img3} alt="" />
                           </div>
                       {/* titel */}
                       <div className='content'>
                           <h3>math 2 course</h3>
                           <h5>channel: Youssef refaat</h5>
                           {/* buttons */}
                           <div className='portfolio-item-button'>
                              <a href="https://youtu.be/OzrM8eGhDPI?si=j7oPrrT_0B4uGZW4" target='blank'> <button className='button'>inter cource</button></a>
                           </div>
                       </div>
                       </article>
    </div>
  )
}

export default Link_math2
