
import React, { use } from 'react'
// import './lec.css'
import img1 from '../../../assets/tech.jpeg'
import { MdDownload } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from 'react';

import lec_img1 from "../../../assets/lec-img/math2/math2-lec/math2lec1_1jpeg.jpeg"
import lec_img2 from "../../../assets/lec-img/math2/math2-lec/math2 lec 1-2.jpeg"
import lec_img3 from "../../../assets/lec-img/math2/math2-lec/math2 lec 1-3.jpeg"
import sec_img1 from "../../../assets/lec-img/math2/math2-sec/sec 1-1.jpeg"
import sec_img2 from "../../../assets/lec-img/math2/math2-sec/sec 1-2.jpeg"
import sec_img3 from "../../../assets/lec-img/math2/math2-sec/sec 1-3.jpeg"
import sec_img4 from "../../../assets/lec-img/math2/math2-sec/sec 1-4.jpeg"
import sec_img5 from "../../../assets/lec-img/math2/math2-sec/sec 1-5.jpeg"
import sec_sheet from "../../../assets/lec-img/math2/math2-sec/sec sheet.jpeg"

//////second week

// import lec_img_2_1 from "../../../assets/lec-img/math2/math2-sec/week2/math2 lec 2-1.jpeg"
import lec_img_2_1 from "../../../assets/lec-img/math2/math2-lec/week2/math2 lec 2-1.jpeg"
import lec_img_2_2 from "../../../assets/lec-img/math2/math2-lec/week2/math2 lec 2-2.jpeg"
import lec_img_2_3 from "../../../assets/lec-img/math2/math2-lec/week2/math2 lec 2-3.jpeg"
import lec_img_2_4 from "../../../assets/lec-img/math2/math2-lec/week2/math2 lec 2-4.jpeg"
import lec_img_2_5 from "../../../assets/lec-img/math2/math2-lec/week2/math2 lec 2-5.jpeg"
import lec_img_2_6 from "../../../assets/lec-img/math2/math2-lec/week2/math2 lec 2-6.jpeg"

function Lec_math2() {
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
          math 2
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
                    <li>
                     <a href={lec_img1} target='blank'>lec-img 1</a>
                     <span  className='arrow'><a href={lec_img1} download className='dicon'>
                       <MdDownload /></a></span>
                    </li>
 
                    <li>
                     <a href={lec_img2} target='blank'>lec-img 2</a>
                     <span className='arrow'><a href={lec_img2} download className='dicon'>
                       <MdDownload /></a></span>
                    </li>
 
                    <li >
                     <a href={lec_img3} target='blank' >lec-img 3</a>
                     <span  className='arrow'><a href={lec_img3} download className='dicon'>
                       <MdDownload /></a></span>
                    </li>
                    {/* ////////secthions///// */}
                    <li >
                     <a href={sec_img1} target='blank' >sec-img 1</a>
                     <span  className='arrow'><a href={sec_img1} download className='dicon'>
                       <MdDownload /></a></span>
                    </li>
                    <li >
                     <a href={sec_img2} target='blank' >sec-img 2</a>
                     <span  className='arrow'><a href={sec_img2} download className='dicon'>
                       <MdDownload /></a></span>
                    </li>
                    <li >
                     <a href={sec_img3} target='blank' >sec-img 3</a>
                     <span  className='arrow'><a href={sec_img3} download className='dicon'>
                       <MdDownload /></a></span>
                    </li>
                    <li >
                     <a href={sec_img4} target='blank' >sec-img 4</a>
                     <span  className='arrow'><a href={sec_img4} download className='dicon'>
                       <MdDownload /></a></span>
                    </li>
                    <li >
                     <a href={sec_img5} target='blank' >sec-img 5</a>
                     <span  className='arrow'><a href={sec_img5} download className='dicon'>
                       <MdDownload /></a></span>
                    </li>
                    <li className='last' >
                     <a href={sec_sheet} target='blank' >sec-sheet</a>
                     <span  className='arrow'><a href={sec_sheet} download className='dicon'>
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
                    <li>
                     <a href={lec_img_2_1} target='blank'>lec-img 1</a>
                     <span  className='arrow'><a href={lec_img_2_1} download className='dicon'>
                       <MdDownload /></a></span>
                    </li>
 
                    <li>
                     <a href={lec_img_2_2} target='blank'>lec-img 2</a>
                     <span  className='arrow'><a href={lec_img_2_2} download className='dicon'>
                       <MdDownload /></a></span>
                    </li>
 
                    <li>
                     <a href={lec_img_2_3} target='blank'>lec-img 3</a>
                     <span  className='arrow'><a href={lec_img_2_3} download className='dicon'>
                       <MdDownload /></a></span>
                    </li>
 
                    <li>
                     <a href={lec_img_2_4} target='blank'>lec-img 4</a>
                     <span  className='arrow'><a href={lec_img_2_4} download className='dicon'>
                       <MdDownload /></a></span>
                    </li>
 
                    <li>
                     <a href={lec_img_2_5} target='blank'>lec-img 5</a>
                     <span  className='arrow'><a href={lec_img_2_5} download className='dicon'>
                       <MdDownload /></a></span>
                    </li>
 
                    <li className='lastt'>
                     <a href={lec_img_2_6} target='blank'>lec-img 6</a>
                     <span  className='arrow'><a href={lec_img_2_6} download className='dicon'>
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
 
export default Lec_math2
