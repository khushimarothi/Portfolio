import Link from 'next/link'
import {FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const textStyles = {
        backgroundImage: 'linear-gradient(to right, rgb(147, 51, 234), rgb(192, 132, 252), rgb(107, 33, 168))',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    };

    return (
        <>
            <div className="py-3 px-8 bg-black">
                <div className="flex md:flex-row flex-col gap-2 md:justify-between justify-center item-center mx-auto">
                    <div className=" px-3 py-2">
                        <h1 className='font-signature text-3xl text-center font-bold'>KM</h1>
                    </div>

                    <div className='social-icon py-2 flex flex-row  gap-5 justify-center items-center text-center'>

                        <Link href="https://www.linkedin.com/in/khushi-marothi/" ><FaLinkedin size={25} className='cursor-pointer' /> </Link>
                        <Link href="https://www.github.com/khushimarothi/" ><FaGithub size={25} className='cursor-pointer' /> </Link>
                        <Link href="https://www.leetcode.com/khushi_marothi/" ><SiLeetcode size={25} className='cursor-pointer' /> </Link>
                        <Link href="https://twitter.com/KhushiMarothi" ><FaXTwitter size={25} className='cursor-pointer' /> </Link>
                        {/* <Link href="https://www.linkedin.com/in/khushi-marothi/" ><FaInstagram size={25} className='cursor-pointer'  /></Link> */}

                    </div>
                </div>

            </div>

            <div className="py-2 px-8 flex flex-row justify-center items-center text-center bg-black"> 
            <h1 className="lg:text-sm text-xs text-gray-400"> All rights reserved. Designed & Developed by <span style={textStyles}>Khushi Marothi</span></h1>
            </div>
        </>
    );
};

export default Footer;
