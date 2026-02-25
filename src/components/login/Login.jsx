import React from 'react'
import './login.css'
import { MdAlternateEmail } from "react-icons/md"
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from "axios"
import { useState } from 'react';
import { SiAwesomelists } from 'react-icons/si';



function Login() {

  const API_URL=import.meta.env.VITE_API_BASE_URL

const [username,setUsername]= useState("")
  const [email,setEmail]=useState("")
  
  const sendData= async ()=>{

  try{
  const respons= await axios.post(`${API_URL}/getData`,
    {username:username,
      email:email
    }
  )}catch(err){
      console.log(err)
   }}


  return (
    <section className="login"id='login'>
        
                <div className='card'>

                    <div className='cont'>
                        <div className='h'></div>
                    <h1 >login</h1>

                    <input type="text" placeholder='Username' 
                    onChange={(e)=> setUsername(e.target.value)} />
                    <input type="text" placeholder='Email'
                    onChange={(e)=> setEmail(e.target.value)}/>
                  
                    <Link to={"/user"}>
                    <button className='button-log'
                     onClick={sendData}>submit</button>
                    </Link>
                    </div>
                </div>
    </section>
  )
}

export default Login
