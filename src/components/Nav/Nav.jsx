import React from 'react'
import './Nav.css'
import { IoMdHome } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaBook } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { GrAction } from "react-icons/gr";
import { Route,Routes,Link } from 'react-router-dom';
// import { Link } from 'react-scroll';

function Nav() {
  return (
    <nav>

       <Link to={"/freshman-platform2"} className='active'> <IoMdHome /></Link>
        
      <a href="#services"><MdMiscellaneousServices /></a>
      <a href="#about" ><GrAction /></a>

       <a href="#cources"><FaBook /></a>

        <Link to={"/login"} >
        <CgProfile />
        </Link> 
     
    </nav>
  )
}

export default Nav
