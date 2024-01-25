"use client"
import Link from "next/link";
import { useState } from 'react';
import { CgMenuRight } from "react-icons/cg";
import { LiaTimesSolid } from "react-icons/lia";
import Image from "next/image"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
      };
    return (
        <>
             <div className="flex justify-between items-center px-5 py-5 pb-4 mx-auto bg-black z-50 ">
            <div>
              <h1 className='text-3xl font-semibold font-signature px-3 '> KM</h1>
            </div>

            <div className="flex items-center justify-center text-center gap-6">

              <div
                className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[35vh] left-0 ${isMenuOpen ? 'top-[9%] z-50' : '-top-[100%] z-50 '
                  } z-50 md:w-auto w-full flex items-center justify-center text-center px-5 transition-transform ease-in-out bg-black`}
              >
                <ul className="flex md:flex-row flex-col justify-center items-center text-center md:gap-[1vw] gap-3  ">
                  <li>
                    <p className=" px-4 py-1 lg:text-base font-semibold "> About </p>
                  </li>
                  <li>
                     <p className=" px-4 py-1 lg:text-base font-semibold "> Skills </p>
                  </li>
                  <li>
                     <p className=" px-4 py-1 lg:text-base font-semibold "> Projects </p>
                  </li>
                  <li>
                     <p className=" px-4 py-1 lg:text-base font-semibold "> Contact </p>
                  </li>
                  
                </ul>

              </div>
 
              {isMenuOpen ? (
                    <LiaTimesSolid onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden" />
                ) : (
                    <CgMenuRight onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden" />
                )}
            </div>
          </div>
        
        </>
    );
};

export default Navbar;
