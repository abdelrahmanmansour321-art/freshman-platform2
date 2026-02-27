import React from 'react'
import img1 from "../../assets/summary.jpeg"
import img2 from "../../assets/corces.jpeg"
import img3 from "../../assets/link.jpeg"
import { Link } from 'react-router-dom'


// import img2 from "../../assets/"
// import img from 

function Conn() {
  return (
    <div >
      

                  <article className='portofoli-item'>
                      {/* img */}
                      <div className='cource-img'>
                          <img src={img2} alt="" />
                      </div>
                  {/* titel */}
                  <div className='content'>
                      <h3>sheets & lectures</h3>
                      <h5>Dr: Yasser fouad</h5>
                      {/* buttons */}
                      <div className='portfolio-item-button'>
                          <Link to={"/lec"}> <button className='button'>inter course</button></Link>
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
                      <h3>Important links</h3>
                      <h5>Dr: Yasser fouad</h5>
                      {/* buttons */}
                      <div className='portfolio-item-button'>
                          <Link to={"/link"}> <button className='button'>inter course</button></Link>
                      </div>
                  </div>
                  </article>


                    <article className='portofoli-item pp'>
                      {/* img */}
                      <div className='cource-img'>
                          <img src={img1} alt="" />
                      </div>
                  {/* titel */}
                  <div className='content'>
                      <h3>Summrys</h3>
                      <h5>Dr: Yasser fouad</h5>
                      {/* buttons */}
                      <div className='portfolio-item-button'>
                          <Link to={"/sum"}><button className='button'>inter course</button></Link>
                      </div>
                  </div>
                  </article>
                  
    </div>
  )
}

export default Conn
