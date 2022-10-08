import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const sendEmail = () => {

    }

  return (
    <div className="fixed w-90 h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
      

      {/*Menu*/}     
        <ul className="hidden md:flex">
          <li className="py-6 text-4xl" >
          <Link to="home" smooth={true} duration={500} >
            Home
          </Link>
          </li>
          <li className="py-6 text-4xl" >
          <Link to="about" smooth={true} offset={30} duration={500} >
            About
          </Link>
          </li>
          <li className="py-6 text-4xl" >
          <Link to="skills" smooth={true} offset={-50} duration={500} >
            Skills
          </Link>
          </li>
          <li className="py-6 text-4xl" >
          <Link to="work" smooth={true} offset={50} duration={500} >
            Work
          </Link>
          </li>          
        </ul> 

      {/*Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile Menu*/}
      <div className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl"><Link to="home" smooth={true} offset={50} duration={500} onClick={handleClick}>
            Home
          </Link></li>
        <li className="py-6 text-4xl"><Link to="about" smooth={true} offset={50} duration={500} onClick={handleClick}>
            About
          </Link></li>
        <li className="py-6 text-4xl"> <Link to="skills" smooth={true} offset={50} duration={500} onClick={handleClick}>
            Skills
          </Link></li>
        <li className="py-6 text-4xl"> <Link to="work" smooth={true} offset={50} duration={500} onClick={handleClick}>
            Work
          </Link></li>        
      </div>

      {/*Social Icon*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600" >
                <a className="flex justify-between items-center w-full text-gray-300"
                 href="https://www.linkedin.com/in/tung-yu-chen-678195108" target="_blank" rel="noreferrer">
                    LinkedIn <FaLinkedin size={30}/></a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]" >
                <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/TungYuChen" target="_blank" rel="noreferrer">
                    GitHub <FaGithub size={30}/></a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]" >
                <a className="flex justify-between items-center w-full text-gray-300" href="mailto:tungyuchen2021@gmail.com" target="_blank" rel="noreferrer">
                    Email <HiOutlineMail size={30}/></a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]" >
                <a className="flex justify-between items-center w-full text-gray-300"
                 href="https://drive.google.com/file/d/1mcJB9BvkbmeJ_WeHqMN4QdB6UZeTqdTX/view?usp=sharing" target="_blank" rel="noreferrer">
                    Resume <BsFillPersonLinesFill size={30}/></a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
