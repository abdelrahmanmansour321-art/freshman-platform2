import React from 'react'
import './Courses.css'
import img1 from '../../assets/math.jpeg'
import img2 from '../../assets/tech.jpeg'
import img3 from '../../assets/img2.jpeg'
import img4 from '../../assets/img4.jpeg'
import img5 from '../../assets/img5.jpeg'
import img6 from '../../assets/img6.jpeg'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'



function Courses() {


  return (
   <section className='cources' id='cources'>
    <div className='top-section' >
            <h4> available cources</h4>
            <h1>Cources</h1>

        <div className=' cources-container'>

           



            <article className='portofoli-item'>
                {/* img */}
                <div className='cource-img'>
                    <img src={img2} alt="" />
                </div>
            {/* titel */}
            <div className='content'>
                <h3>Math 2</h3>
                <h5>Dr: Ibrahim Abadi</h5>
                
                {/* buttons */}
                <div className='portfolio-item-button'>
                   <Link to={"/conn-math"}> <button className='button'>inter cource</button></Link>
                </div>
            </div>
            </article>



            <article className='portofoli-item'>
                {/* img */}
                <div className='cource-img'>
                    <img src={img1} alt="" />
                </div>
            {/* titel */}
            <div className='content'>
                <h3>Computer law</h3>
                <h5>Dr: Faiza ahmed</h5>
                {/* buttons */}
                <div className='portfolio-item-button'>
                    <Link to={'/conn-comlaw'}><button className='button'>inter cource</button></Link> 
                </div>
            </div>
            </article>


            
            

            {/* crossed math */}
            <article className='portofoli-item'>
                {/* img */}
                <div className='cource-img'>
                    <img src={img4} alt="" />
                </div>
            {/* titel */}
            <div className='content'>
                <h3>Discrete math</h3>
                <h5>Dr: Ibrahim Abadi</h5>
                
                {/* buttons */}
                <div className='portfolio-item-button'>
                 <Link to={"/conn-dismath"}> <button className='button'>inter cource</button></Link>
                </div>
            </div>
            </article>

             {/* programming fund */}
            <article className='portofoli-item'>
                {/* img */}
                <div className='cource-img'>
                    <img src={img3} alt="" />
                </div>
            {/* titel */}
            <div className='content'>
                <h3>Programming Fundamentals</h3>
                <h5>Dr: Yasser Fouad</h5>

                
                {/* buttons */}
                <div className='portfolio-item-button'>
                    <Link to={'/conn'}><button className='button'>
                        inter cource</button></Link>
                </div>
            </div>
            </article>


            <article className='portofoli-item'>
                {/* img */}
                <div className='cource-img'>
                    <img src={img5} alt="" />
                </div>
            {/* titel */}
            <div className='content'>
                <h3>Computer Architecture</h3>
                <h5>Dr: Mohamed Ali</h5>
                
                
                {/* buttons */}
                <div className='portfolio-item-button'>
                  <Link to={"/conn-combuild"}> <button className='button'>inter cource</button></Link>
                </div>
            </div>
            </article>


            <article className='portofoli-item'>
                {/* img */}
                <div className='cource-img'>
                    <img src={img6} alt="" />
                </div>
            {/* titel */}
            <div className='content'>
                <h3>Computer History</h3>
                <h5>Dr: Ahmad abdel hamid</h5>
                
                {/* buttons */}
                <div className='portfolio-item-button'>
                   <Link to={"/conn-comhis"}><button className='button'>inter cource</button></Link> 
                </div>
            </div>
            </article>


        </div>


    </div>
   </section>
  )
}

export default Courses
