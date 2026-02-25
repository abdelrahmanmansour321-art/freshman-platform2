import React from 'react'
import img1 from "../../assets/tech.jpeg"
import img2 from '../../assets/img2.jpeg'
import img3 from "../../assets/link.jpeg"


function Link() {
  return (
    <div>
      <div className='cource-img'>
                     < img src= {img2} />
                   </div>
                      <div className='top i'>
                       <h2>
                      programming fundmentals
                       </h2>
                       </div>
      
           <article className='portofoli-item '>
                                 {/* img */}
                                 <div className='cource-img'>
                                     <img src={img3} alt="" />
                                 </div>
                             {/* titel */}
                             <div className='content'>
                                 <h3> Cpp  cource</h3>
                                 <h5>channel: Elzero web school</h5>
                                 {/* buttons */}
                                 <div className='portfolio-item-button'>
                                    <a href="https://youtu.be/XDuWyYxksXU?si=fIkTNhZ83S2RAZKm" target='blank'> <button className='button'>inter cource</button></a>
                                 </div>
                             </div>
                             </article>
           <article className='portofoli-item pp'>
                                 {/* img */}
                                 <div className='cource-img'>
                                     <img src={img3} alt="" />
                                 </div>
                             {/* titel */}
                             <div className='content'>
                                 <h3> Cpp  Problem solving</h3>
                                 <h5>channel: Elzero web school</h5>
                                 {/* buttons */}
                                 <div className='portfolio-item-button'>
                                    <a href="https://youtu.be/YwiXDtIJ9Vo?si=aDVi7JsYmXc4-kl_" target='blank'> <button className='button'>inter cource</button></a>
                                 </div>
                             </div>
                             </article>
    </div>
  )
}

export default Link
