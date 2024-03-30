import Link from 'next/link'
import Image from "next/image"
import {FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import logo from "@/app/assets/logo1.png"

const Footer = () => {
    const textStyles = {
        backgroundImage: 'linear-gradient(to right, rgb(147, 51, 234), rgb(192, 132, 252), rgb(107, 33, 168))',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    };

    return (
        <>
            <div className="py-3 px-8 bg-gradient-to-r from-gray-900 to-gray-950">
                <div className="flex md:flex-row flex-col gap-2 md:justify-between justify-center item-center mx-auto">
                    <div className=" px-3 py-2 flex justify-center items-center">
                        {/* <h1 className='font-signature text-3xl text-center font-bold'>KM</h1> */}
                        <Image src={logo} alt='logo' className="lg:h-9 lg:w-12 h-6 w-8 text-center" height={360} width={403}/>
                    </div>

                    <div className='social-icon py-2 flex flex-row  gap-5 justify-center items-center text-center'>

                        <Link href="https://www.linkedin.com/in/khushi-marothi/" aria-label='linkedin' ><FaLinkedin size={25} className='cursor-pointer' /> </Link>
                        <Link href="https://www.github.com/khushimarothi/" aria-label='github' ><FaGithub size={25} className='cursor-pointer' /> </Link>
                        <Link href="https://www.leetcode.com/khushi_marothi/" aria-label='leetcode' ><SiLeetcode size={25} className='cursor-pointer' /> </Link>
                        <Link href="https://twitter.com/KhushiMarothi" aria-label='twitter' ><FaXTwitter size={25} className='cursor-pointer' /> </Link>
                        {/* <Link href="https://www.linkedin.com/in/khushi-marothi/" ><FaInstagram size={25} className='cursor-pointer'  /></Link> */}

                    </div>
                </div>

            </div>

            <div className="py-2 px-8 flex flex-row justify-center items-center text-center bg-gradient-to-r from-gray-900 to-gray-950"> 
            <h1 className="lg:text-sm text-xs text-gray-400"> All rights reserved. Designed & Developed by <span className='text-purple-300'>Khushi Marothi</span></h1>
            </div>
        </>
    );
};

export default Footer;
