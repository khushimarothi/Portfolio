"use client"
import Image from "next/image"
import React, { useState, useEffect } from 'react';
import Link from "next/link"
import { CgMenuRight } from "react-icons/cg";
import logo from "@/app/assets/logo1.png"


const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClass = `flex items-center justify-between flex-wrap px-8 py-4 fixed w-full -top-1 z-50 ${
    scrolling ? 'bg-gradient-to-r from-gray-900 to-gray-950 ' : 'nav-glass'
  }`;

  const closeNav = () => {
    setIsOpen(false);
  };

 return (
   <nav className={navClass}>
     <div className=" text-white mr-6 lg:mr-72 mb-2 ">
     {/* <h1 className='text-2xl font-semibold font-signature mt-2'> KM</h1> */}
     <Link href="#head" aria-label="home" >
     <Image src={logo} alt='logo' className="lg:h-9 lg:w-12 h-6 w-8 mt-2" height={360} width={403} />
     </Link>
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center rounded text-black-500 transition-transform ease-in-out hover:text-black-400"
         aria-label="button"
       >

<CgMenuRight className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`} />
         <svg
           className={`fill-current h-4 w-4 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block  lg:flex justify-centeritems-center text-center lg:w-auto  transition-all duration-700  ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm ">
         <Link href="#about" aria-label="about">
         <p  onClick={closeNav}  className="block lg:text-base font-semibold mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-10 transition-all duration-700">
           About
         </p>
        </Link>
        <Link href="#skills" aria-label="skills" >  
         <p onClick={closeNav}  className="block lg:text-base font-semibold mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-10 transition-all duration-700">
           Skills
         </p>
         </Link>
         <Link href="#experience" aria-label="experience"> 
         <p onClick={closeNav}  className="block lg:text-base font-semibold mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-10 transition-all duration-700">
           Experience
         </p>
         </Link>
         <Link href="#project" aria-label="project"> 
         <p onClick={closeNav}  className="block lg:text-base font-semibold mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-10 transition-all duration-700">
           Portfolio
         </p>
         </Link>
         <Link href="#contact" aria-label="contact"> 
         <p onClick={closeNav}  className="block lg:text-base font-semibold mt-4 lg:inline-block lg:mt-0 text-white-200 w-min mx-auto  bg-gradient-to-r
         from-purple-900 to-purple-700 px-3 py-1 rounded-md transition-all duration-700
         ">
          Contact
         </p>
         </Link>

       </div>
      
     </div>
   </nav>
 );
}
export default Navbar;