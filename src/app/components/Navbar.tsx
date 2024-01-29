"use client"
// import Link from "next/link";
// import { useState } from 'react';
// import { CgMenuRight } from "react-icons/cg";
// import { LiaTimesSolid } from "react-icons/lia";
// import Image from "next/image"

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const toggleMenu = () => {
//         setIsMenuOpen((prev) => !prev);
//       };

//     return (
//         <>
//              <div className="flex justify-between items-center px-5 py-5 pb-4 mx-auto bg-black z-50 ">
//             <div>
//               <h1 className='text-3xl font-semibold font-signature px-3 '> KM</h1>
//             </div>

//             <div className="flex items-center justify-center text-center gap-6">

//               <div
//                 className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[35vh] left-0 ${isMenuOpen ? 'top-[9%] z-50' : '-top-[100%] z-50 '
//                   } z-50 md:w-auto w-full flex items-center justify-center text-center px-5 transition-transform ease-in-out bg-black`}
//               >
//                 <ul className="flex md:flex-row flex-col justify-center items-center text-center md:gap-[1vw] gap-3  ">
//                   <li>
//                     <p className=" px-4 py-1 lg:text-base font-semibold "> About </p>
//                   </li>
//                   <li>
//                      <p className=" px-4 py-1 lg:text-base font-semibold "> Skills </p>
//                   </li>
//                   <li>
//                      <p className=" px-4 py-1 lg:text-base font-semibold "> Projects </p>
//                   </li>
//                   <li>
//                      <p className=" px-4 py-1 lg:text-base font-semibold "> Contact </p>
//                   </li>
                  
//                 </ul>

//               </div>
 
//               {isMenuOpen ? (
//                     <LiaTimesSolid onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden" />
//                 ) : (
//                     <CgMenuRight onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden" />
//                 )}
//             </div>
//           </div>
        
//         </>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import Link from "next/link"
import { LiaTimesSolid } from "react-icons/lia";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

 return (
   <nav className="flex items-center justify-between flex-wrap px-8 py-5 fixed w-full -top-1 z-50 bg-transparent nav-glass">
     <div className="flex items-center  text-white mr-6 lg:mr-72 mb-2 ">
     <h1 className='text-3xl font-semibold font-signature px-3 '> KM</h1>
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 transition-transform ease-in-out hover:text-black-400"
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
       className={`w-full block  lg:flex justify-centeritems-center text-center lg:w-auto  ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm ">
         <Link href="#about">
         <p className="block lg:text-base font-semibold mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-10">
           About
         </p>
        </Link>
        <Link href="#skills">  
         <p className="block lg:text-base font-semibold mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-10">
           Skills
         </p>
         </Link>
         <Link href="#experience"> 
         <p className="block lg:text-base font-semibold mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-10">
           Experience
         </p>
         </Link>
         <Link href="#project"> 
         <p className="block lg:text-base font-semibold mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-10">
           Portfolio
         </p>
         </Link>
         <Link href="#contact"> 
         <p className="block lg:text-base font-semibold mt-4 lg:inline-block lg:mt-0 text-white-200 w-min mx-auto  bg-gradient-to-r
         from-purple-900 to-purple-700 px-3 py-1 rounded-md 
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