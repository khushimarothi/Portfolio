import React from 'react';
import Image from "next/image"
import heroimg from "@/app/assets/heroImage.png"

const Hero = () => {
    return (
        <>
            <div className="flex justify-center items-center lg:px-32 px-8 lg:py-16 py-10 lg:h-[90vh] bg-gradient-to-r from-black via-slate-900  to-indigo-950 ">

                <div className="container mx-auto">
                    <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-16 gap-8 ">

                        <div className="flex flex-col flex-1 order-2 lg:order-1">
                            <div>
                                <h1 className='text-base  py-1 rounded-md font-bold'> Hello </h1>
                                <h1 className='lg:text-5xl text-3xl rounded-md font-medium '> I'm <span> Khushi Marothi </span>  </h1>

                                <div className='flex flex-row flex-wrap items-center py-3'>
                                    <div className="border-b text-white w-10 border-white mr-3 hidden lg:block"></div>
                                    <h1 className='lg:text-xl text-lg rounded-md font-light '> Frontend Developer, Open Source Enthusiast </h1>
                                </div>

                                {/* <p className='lg:text-lg text-base py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestiae deleniti, nulla numquam dicta pariatur iure obcaecati. Nemo iure fugiat sit nam explicabo distinctio, dolorum quasi officiis architecto, amet eum?</p> */}
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 justify-center items-center order-1 lg:order-2">
                            <Image src={heroimg} alt="hero image" className='h-3/4 w-4/6' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Hero;
