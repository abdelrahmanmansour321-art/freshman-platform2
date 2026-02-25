import React from 'react'
import img1 from "../../../assets/summary.jpeg"
import img2 from "../../../assets/corces.jpeg"
import img3 from "../../../assets/link.jpeg"
import { Link } from 'react-router-dom'


function Conn_math2() {
  return (
    <div >
        <article className='portofoli-item'>
                      {/* img */}
                      <div className='cource-img'>
                          <img src={img2} alt="" />
                      </div>
                  {/* titel */}
                  <div className='content'>
                      <h3>sheets & luctures</h3>
                      <h5>Dr: Ibrahim Abadi</h5>
                      {/* buttons */}
                      <div className='portfolio-item-button'>
                          <Link to={"/lec-math2"}> <button className='button'>inter cource</button></Link>
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
                      <h3> Important links</h3>
                      <h5>Dr: Ibrahim Abadi</h5>
                      {/* buttons */}
                      <div className='portfolio-item-button'>
                          <Link to={"/link-math2"}> <button className='button'>inter cource</button></Link>
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
                      <h3>Summarys</h3>
                      <h5>Dr: Ibrahim Abadi</h5>
                      {/* buttons */}
                      <div className='portfolio-item-button'>
                          <Link to={"/sum"}><button className='button'>inter cource</button></Link>
                      </div>
                  </div>
                  </article>
    </div>
  )
}

export default Conn_math2
