import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

 return (
  <div className='fixed w-full h-[80px] flex justify-evenly items-center px-4 bg-[#4cc9f0] text-white'><img src="https://www.svgrepo.com/show/265821/butterfly.svg" alt="logo image" className="w-5 h-5" />
    <div>
       
       <span className='sm:text-xl font:bold text-[#7209b7]'>MONARCH SALON</span>
    </div>
    {/*Menu */}
    
      <ul className='hidden md:flex'>
       <li>
         <Link to="home" smooth={true} duration={500}>
         HOME</Link></li>
       <li>
       <Link to="about" smooth={true} duration={500}>
         ABOUT</Link></li>
       <li>
       <Link to="skills" smooth={true} duration={500}>
         SERVICES</Link></li>
       <li>
       <Link to="work" smooth={true} duration={500}>
         LOOKBOOK</Link></li>
       <li>
       <Link to="contact" smooth={true} duration={500}>
         CONTACT</Link></li>
      </ul>
   
{/*Hamburger*/}
<div onClick={handleClick} className='md:hidden z-10'>
 {!nav ? <FaBars /> : <FaTimes />}
</div>
{/*mobile menu*/}
<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#4cc9f0] flex flex-col justify-center items-center overflow-hidden'}>
       <li  className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
         Home</Link></li>
       <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
         About</Link></li>
       <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
         Services</Link></li>
       <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>
         Lookbook</Link></li>
       <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
         Contact</Link></li>
</ul>
  </div>
 )
}

export default Navbar
