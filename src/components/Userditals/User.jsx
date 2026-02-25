import React from 'react'
import img1 from '../../assets/cat.jpeg'
import './user.css'

function User() {
  return (
     <>
   <div className='user'>
      <div className='img-cover'>
         <img src={img1}  />
     </div>
    </div>
    

   <div className='container-u'>
     
      <h2>thank you for logging in </h2>
      <h4>now you will be updated with <br />all  
     of the new information</h4>
      
      <h5>if you didnot gat an email pleas try to inter your email again or contact me for help</h5>
   </div>
    
    </>
  )
}

export default User
