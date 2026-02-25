// import React from 'react'
// import './home.css'
// import img from '../../assets/mainpic.svg'
// // import Homeicons from './Homeicons'
// import Homeicons from './Homeicons'
// import { Link } from 'react-router-dom'

// function Home() {
//   return (
//     <div className='home' id='Home'>
//         <div className='container home-container'>
      
//             <h2>Easer study</h2>
        
//             <h1>Higher grades</h1>

//             <h4 className=' hh'> Learn smarter, not harder. <br /> This platform was built to be your ultimate study companion. 
//             </h4>

//             <div className="btn-wrap">
//             <a href="#services" ><button className='button'>view servises</button></a>
//             <a href="#cources"><button  className='button button-sec '>courses</button></a>
//             </div>


//             <div className='img'>
//             <img src={img} alt="" />
//             </div>

//             <Homeicons />
//         </div> 
//     </div>
//   )
// }

// export default Home
import React from 'react'
import './home.css'
import img from '../../assets/mainpic.svg'
// import Homeicons from './Homeicons'
import Homeicons from './Homeicons'

function Home() {
  return (
    <div className='home' id='Home'>
        <div className='container home-container'>
      
            <h2>Easer study</h2>
        
            <h1>Higher grades</h1>

            <h4 className=' hh'> Learn smarter, not harder. <br /> This platform was built to be your ultimate study companion. 
            </h4>

            <div className="btn-wrap">
            <a href="#services" ><button className='button'>view servises</button></a>
            <a href="#cources"><button  className='button button-sec '>courses</button></a>
            </div>


            <div className='img'>
            <img src={img} alt="" />
            </div>

            <Homeicons />
        </div> 
    </div>
  )
}

export default Home
