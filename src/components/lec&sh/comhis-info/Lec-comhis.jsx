import React, { use } from 'react'
// import './lec.css'
import img1 from '../../../assets/img6.jpeg'
import { MdDownload } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from 'react';

function Lec_comhis() {
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
                Computer History
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
                      {/* <ul>
                         <li>
                          <a href={img1}>first img</a>
                          <span  className='arrow'><a href={img1} download className='dicon'>
                            <MdDownload /></a></span>
                         </li>
      
                         <li>
                          <a href={img1}>first img</a>
                          <span className='arrow'><a href={img1} download className='dicon'>
                            <MdDownload /></a></span>
                         </li>
      
                         <li className='last'>
                          <a href={img1}>first img</a>
                          <span  className='arrow'><a href={img1} download className='dicon'>
                            <MdDownload /></a></span>
                         </li>
                         
                      </ul> */}
                    </div>
      
                 {/* ////////////////////  second week*/}
      
                  <div className='week' onClick={()=>setActive2(!active2)}>
                  <h3>second week week</h3>
                  <span className='arrow'><IoIosArrowDropdown /></span>
                  </div>
      
                     <div className={active2? "week-cont active1":"week-cont"}>
                      {/* <ul>
                         <li>
                          <a href={img1}>first img</a>
                          <span  className='arrow'><a href={img1} download className='dicon'>
                            <MdDownload /></a></span>
                         </li>
      
                         <li>
                          <a href={img1}>first img</a>
                          <span className='arrow'><a href={img1} download className='dicon'>
                            <MdDownload /></a></span>
                         </li>
      
                         <li className='last'>
                          <a href={img1}>first img</a>
                          <span  className='arrow'><a href={img1} download className='dicon'>
                            <MdDownload /></a></span>
                         </li>
                         
                      </ul> */}
                    </div>
      
      
                </div>
      
                
      
              </div>
            </div>
            
          </div>
      
         
        )
      }

export default Lec_comhis

