import React from 'react';
import {
    FaCartPlus,
    FaEnvelope,
    FaFacebook,
    FaFacebookF,
    FaFacebookSquare,
    FaInstagram,
    FaLocationArrow,
    FaPhone,
    FaTwitter,
  } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
      <div className="topbar hidden lg:block">
        <div className="text-white flex justify-center items-center w-[100%] h-[50px]">
          <div className="bg-black flex justify-center items-center gap-x-[50px] h-[50px] w-[70%]">
            <div className="flex justify-center items-center gap-x-2 ">
              <FaPhone className="animate-pulse" />|
              <div className="">+8801776817368</div>
            </div>
            <div className="flex justify-center items-center gap-x-2 ">
              <FaEnvelope className="animate-pulse" />|
              <div className="">mahabubulkabir@gmail.com</div>
            </div>
            <div className="flex justify-center items-center gap-x-2 ">
              <FaLocationArrow className="animate-pulse" />|
              <div className="">Dhanmondi,Dhaka</div>
            </div>
          </div>
          <div className="pl-7 flex justify-start items-center gap-x-2 h-[50px] red w-[40%]">
            Follow Now
            <div className="bg-white h-[30px] w-[40px] flex justify-center text-red-600 items-center cursor-pointer hover:bg-gray-600 hover:text-white transition duration-500 ease-in-out">
              <FaFacebookF className="animate-bounce hover:animate-none" />
            </div>
            <div className="bg-white h-[30px] w-[40px] flex justify-center text-red-600 items-center cursor-pointer hover:bg-gray-600 hover:text-white transition duration-500 ease-in-out">
              <FaInstagram className="animate-bounce hover:animate-none" />
            </div>
            <div className="bg-white h-[30px] w-[40px] flex justify-center text-red-600 items-center cursor-pointer hover:bg-gray-600 hover:text-white transition duration-500 ease-in-out">
              <FaTwitter className="animate-bounce hover:animate-none" />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar bg-gray-00 shadow-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
<Link to="/">        <li>Users</li>
</Link>       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">USERS LIST</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link to="/"><li>Users List</li></Link>
     
      

    </ul>
    <ul className="menu menu-horizontal px-1">
      <Link to="/"><li>About Us</li></Link>
     
      

    </ul>
    <ul className="menu menu-horizontal px-1">
      <Link to="/"><li>Contact us</li></Link>
     
      

    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Register</a>
  </div>
</div>

      {/* --------------------- Mobile section --------------------------- */}

      
    </div>
    );
};

export default Navbar;