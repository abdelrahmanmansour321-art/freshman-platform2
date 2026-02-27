import React from 'react'
import img1 from "../../../assets/summary.jpeg"
import img2 from "../../../assets/corces.jpeg"
import img3 from "../../../assets/link.jpeg"
import { Link } from 'react-router-dom'


function Conn_comhis() {
  return (
    <div >
      <article className='portofoli-item'>
           {/* img */}
                              <div className='cource-img'>
                                        <img src={img2} alt="" />
                                       </div>
                                 {/* titel */}
                                            <div className='content'>
                                    <h3>Sheets & Lectures</h3>
                                         <h5>Dr: Ahmad abdel Hamid</h5>
                                       {/* buttons */}
                                    <div className='portfolio-item-button'>
                                        <Link to={"/lec-comhis"}> <button className='button'>inter course</button></Link>
                               </div>
                                            </div>
                                            </article>
                                           
                                            <article className='portofoli-item'>
                                                {/* img */}
                                                <div className='cource-img'>
                                                    <img src={img3} alt="" />
                                                </div>
                                            {/* titel */}
                                            <div className='content'>
                                                <h3>Important Links</h3>
                                                <h5>Dr: Ahmad abdel Hamid</h5>
                                                {/* buttons */}
                                                <div className='portfolio-item-button'>
                                                    <Link to={"/link-comlaw"}> <button className='button'>inter course</button></Link>
                                                </div>
                                            </div>
                                            </article>


                                             <article className='portofoli-item pp' id='ii'>
                                                {/* img */}
                                                <div className='cource-img'>
                                                    <img src={img1} alt="" />
                                                </div>
                                            {/* titel */}
                                            <div className='content'>
                                                <h3>Summrys</h3>
                                                <h5>Dr: Ahmad abdel Hamid</h5>
                                                {/* buttons */}
                                                <div className='portfolio-item-button'>
                                                    <Link to={"/sum"}><button className='button'>inter course</button></Link>
                                                </div>
                                            </div>
                                            </article>
    </div>
  )
}

export default Conn_comhis
