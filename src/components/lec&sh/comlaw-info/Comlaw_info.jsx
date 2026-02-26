import React, { use } from 'react'
// import './lec.css'
import img1 from '../../../assets/math.jpeg'
import { MdDownload } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from 'react';
import pdf1 from "../../../assets/lec-img/comlaw/computer law pdf 1.pdf"
import pdf2 from "../../../assets/lec-img/comlaw/computer law pdf 2.pdf"

function comlaw_info() {
  const [active,setActive]= useState(false)
     const [active1,setActive1]=useState(false)
     const [active2,setActive2]=useState(false)
     const [arrow,setArrow]=useState(false)
   
     return (
   
   
   
       <div>
       
         <div className='cource-img'>
           < img src= {img1} />
         </div>
            <div className='top'>
             <h2>
            computer law
             </h2>
             </div>
        
         <div className='drop'>
           <div className='wrap'>
             <div className='month' onClick={()=>setActive(!active)}>
                 <h2>first month </h2>
                 <span className='arrow'><IoIosArrowDropdown /></span>
             </div>
   
             {/* content */}
   
             <div  className={active? "weeks active":"weeks"}>
               <div className='week' onClick={()=>setActive1(!active1)}>
               <h3>first week</h3>
               <span className='arrow'><IoIosArrowDropdown /></span>
               </div>
   
                 <div className={active1? "week-cont active1":"week-cont"}>
                   <ul>
                      
   
                      <li className='last'>
                       <a href={pdf1} target='blank'>pdf 1</a>
                       <span className='arrow'><a href={pdf1} download className='dicon'>
                         <MdDownload /></a></span>
                      </li>
   
                      
                      
                   </ul>
                 </div>
   
              {/* ////////////////////  second week*/}
   
               <div className='week' onClick={()=>setActive2(!active2)}>
               <h3>second week</h3>
               <span className='arrow'><IoIosArrowDropdown /></span>
               </div>
   
                  <div className={active2? "week-cont active1":"week-cont"}>
                   <ul>
                     <li className='last'>
                       <a href={pdf2} target='blank'>pdf 2</a>
                       <span  className='arrow'><a href={pdf2} download className='dicon'>
                         <MdDownload /></a></span>
                      </li>
                      
                   </ul>
                 </div>
   
   
             </div>
   
             
   
           </div>
         </div>
         
       </div>
   
      
     )
   }

export default comlaw_info
