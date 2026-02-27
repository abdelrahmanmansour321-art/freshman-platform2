import React, { use } from 'react'
// import './lec.css'
import img1 from '../../../assets/math.jpeg'
import { MdDownload } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from 'react';
import pdf1 from "../../../assets/lec-img/comlaw/computer law pdf 1.pdf"
import pdf2 from "../../../assets/lec-img/comlaw/computer law pdf 2.pdf"
// firstweek
import lec1_1 from "../../../assets/lec-img/comlaw/week1/lec 1-1.jpeg"
import lec1_2 from "../../../assets/lec-img/comlaw/week1/lec 1-2.jpeg"
import lec1_3 from "../../../assets/lec-img/comlaw/week1/lec 1-3.jpeg"
// second week
import lec2_1 from "../../../assets/lec-img/comlaw/week2/lec 2-1.jpeg"
import lec2_2 from "../../../assets/lec-img/comlaw/week2/lec 2-2.jpeg"
import lec2_3 from "../../../assets/lec-img/comlaw/week2/lec 2-3.jpeg"
import lec2_4 from "../../../assets/lec-img/comlaw/week2/lec 2-4.jpeg"

// thired week
import lec3_1 from "../../../assets/lec-img/comlaw/week3/lec 3-1.jpeg"
import lec3_2 from "../../../assets/lec-img/comlaw/week3/lec 3-2.jpeg"
import lec3_3 from "../../../assets/lec-img/comlaw/week3/lec 3-3.jpeg"
import lec3_4 from "../../../assets/lec-img/comlaw/week3/lec 3-4.jpeg"

function comlaw_info() {
  const [active,setActive]= useState(false)
     const [active1,setActive1]=useState(false)
     const [active2,setActive2]=useState(false)
     const [active3,setActive3]=useState(false)
    
   
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
               <h3>week zero</h3>
               <span className='arrow'><IoIosArrowDropdown /></span>
               </div>
   
                 <div className={active1? "week-cont active1":"week-cont"}>
                   <ul>


                      <li >
                       <a href={pdf1} target='blank'>pdf 1</a>
                       <span className='arrow'><a href={pdf1} download className='dicon'>
                         <MdDownload /></a></span>
                      </li>


                      <li >
                       <a href={lec1_1} target='blank'>lec-img1</a>
                       <span className='arrow'><a href={lec1_1} download className='dicon'>
                         <MdDownload /></a></span>
                      </li>
                      <li >
                       <a href={lec1_2} target='blank'>lec-img2</a>
                       <span className='arrow'><a href={lec1_2} download className='dicon'>
                         <MdDownload /></a></span>
                      </li>
                      <li className='last'>
                       <a href={lec1_3} target='blank'>lec-img3</a>
                       <span className='arrow'><a href={lec1_3} download className='dicon'>
                         <MdDownload /></a></span>
                      </li>
   
                      
                      
                   </ul>
                 </div>
   
              {/* ////////////////////  first week*/}
   
               <div className='week' onClick={()=>setActive2(!active2)}>
               <h3>first week</h3>
               <span className='arrow'><IoIosArrowDropdown /></span>
               </div>
   
                  <div className={active2? "week-cont active1":"week-cont"}>
                   <ul>
                     <li >
                       <a href={pdf2} target='blank'>pdf 2</a>
                       <span  className='arrow'><a href={pdf2} download className='dicon'>
                         <MdDownload /></a></span>
                      </li>
                     <li >
                       <a href={lec2_1} target='blank'>lec-img1</a>
                       <span  className='arrow'><a href={lec2_1} download className='dicon'>
                         <MdDownload /></a></span>
                      </li>
                     <li >
                       <a href={lec2_2} target='blank'>lec-img2</a>
                       <span  className='arrow'><a href={lec2_2} download className='dicon'>
                         <MdDownload /></a></span>
                      </li>
                     <li >
                       <a href={lec2_3} target='blank'>lec-img3</a>
                       <span  className='arrow'><a href={lec2_3} download className='dicon'>
                         <MdDownload /></a></span>
                      </li>
                     <li className='last'>
                       <a href={lec2_4} target='blank'>lec-img4</a>
                       <span  className='arrow'><a href={lec2_4} download className='dicon'>
                         <MdDownload /></a></span>
                      </li>
                      
                   </ul>
                 </div>
{/* 
                 /////////// secondweek */}
                 
               <div className='week' onClick={()=>setActive3(!active3)}>
               <h3>second week</h3>
               <span className='arrow'><IoIosArrowDropdown /></span>
               </div>
   
                  <div className={active3? "week-cont active1":"week-cont"}>
                   <ul>
                     <li >
                       <a href={lec3_1} target='blank'>lec-img1</a>
                       <span  className='arrow'><a href={lec3_1} download className='dicon'>
                         <MdDownload /></a></span>
                      </li>
                     <li >
                       <a href={lec3_2} target='blank'>lec-img2</a>
                       <span  className='arrow'><a href={lec3_2} download className='dicon'>
                         <MdDownload /></a></span>
                      </li>
                     <li >
                       <a href={lec3_3} target='blank'>lec-img3</a>
                       <span  className='arrow'><a href={lec3_3} download className='dicon'>
                         <MdDownload /></a></span>
                      </li>
                     <li className='last'>
                       <a href={lec3_4} target='blank'>lec-img4</a>
                       <span  className='arrow'><a href={lec3_4} download className='dicon'>
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
