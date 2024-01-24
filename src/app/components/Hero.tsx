import React from 'react';
import Image from "next/image"
import heroimg from "@/app/assets/heroImage.png"
import bg from "@/app/assets/bg.svg"

const Hero = () => {
    const textStyles = {
        backgroundImage: 'linear-gradient(to right, rgb(147, 51, 234), rgb(192, 132, 252), rgb(107, 33, 168))',
        
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    };
    const backgroundStyles = {
        backgroundImage: 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // You can adjust the alpha (last value) to control the darkness
        backgroundBlendMode: 'multiply', 
    };
    const imgStyles = {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        opacity: 0.5,
    };
    return (
        <>
            <div  className="flex justify-center items-center lg:px-32 px-8 lg:py-16 py-10 lg:h-[90vh]  overflow-hidden from-purple-900 via-purple-900 to-black relative" style={backgroundStyles} >
                <div className='absolute overflow-hidden -top-24 left-0 w-full bg-blend-multiply '>
                <Image src={bg} alt='img'className=' opacity-5 w-full h-full object-fill '  />
                <Image src={bg} alt='img'className=' opacity-5 w-full h-full object-fill -mt-12 lg:hidden block'  />
                </div>

                <div className="container mx-auto z-40">
                    <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-16 gap-8 ">

                        <div className="flex flex-col flex-1 order-2 lg:order-1">
                            <div>
                                <h1 className='lg:text-4xl text-base  py-1 rounded-md font-bold'>  </h1>
                                <h1 className='lg:text-6xl text-3xl rounded-md font-medium'> I'm </h1>
                                <h1 style={textStyles}  className='lg:text-7xl text-3xl rounded-md font-semibold ' >  Khushi Marothi  </h1>

                                <div className='flex flex-row flex-wrap items-center py-3'>
                                    <div className="border-b text-white w-10 border-white mr-3 hidden lg:block"></div>
                                    <h1 className='lg:text-lg text-sm rounded-md font-normal text-gray-400 '> Frontend Developer, Open Source Enthusiast </h1>
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
