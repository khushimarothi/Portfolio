import { LuAward } from "react-icons/lu";

const About = () => {
    const textStyles = {
        backgroundImage: 'linear-gradient(to right, rgb(147, 51, 234), rgb(192, 132, 252), rgb(107, 33, 168))',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    };
    return (
        <>
            <div className="flex justify-center items-center lg:px-32 px-8 lg:pt-28 lg:pb-16 py-10 bg-gradient-to-r from-black via-black to-gray-900 ">

                <div className="container mx-auto">
                <div className="lg:pb-14 pb-8">
                        <h1 className="font-bold lg:text-4xl text-2xl ">About Me</h1>
                    </div>
                    {/* <div className="text-center sm:text-left before:block before:w-20 before:h-2 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-gradient-to-r before:from-purple-800  before:via-purple-600 before:to-purple-400 before:bg-opacity-5  lg:pb-14 pb-8">
				</div> */}
                    <div className="flex lg:flex-row flex-col justify-evenly  lg:gap-16 gap-8 ">

                    <div className="flex flex-col  flex-1 gap-3 ">
                        <h3 className="lg:text-3xl text-lg font-bold" style={textStyles}>I design and code beautifully simple things, and I love what I do.</h3>
                            <p className="lg:text-base text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, corporis vero ab est autem, ex, ut aliquam fugiat magnam excepturi explicabo adipisci quo! Veniam, dolo. ipsum dolor sit amet consectetur adipisicing elit. Fuga, corporis vero ab est autem, ex, ut aliquam fugiat magnam excepturi explicabo adipisci quo! Veniam, dolo</p>
                        </div>
                       
                    <div className="flex flex-col flex-1 gap-5">

                        {/* <div className="lg:flex flex-row flex-wrap gap-4 hidden">
                            <div className="flex flex-col border items-center gap-2 border-white rounded-md p-5 ">
                                   
                                    <h1 className='lg:text-lg text-base font-bold'>Experience</h1>
                                    <h1 className='lg:text-sm text-xs font-normal'>1+ year</h1>
                                </div>
                            <div className="flex flex-col border items-center gap-2 border-white rounded-md p-5 ">
                                   
                                    <h1 className='lg:text-lg text-base font-bold'>Open Source Program</h1>
                                    <h1 className='lg:text-sm text-xs font-normal'>Participated in 4+</h1>
                                </div>
                        </div> */}

<h1 className="lg:text-3xl text-lg font-semibold  pb-2  ">Why Collaborate With Me</h1>

<div className="flex flex-row gap-1 justify-center items-center  ">
<h1 className="lg:text-3xl text-base font-semibold lg:pr-3 lg:block hidden">1. </h1>
<div className="flex flex-col ">
 
    <h1 className="lg:text-lg text-base font-semibold" style={textStyles}> Dedicated Work Ethic</h1>
    <p className="lg:text-base text-sm text-gray-400"> My approach to every project is marked by an unwavering commitment to excellence. I prioritize precision in execution, consistently exceeding expectations and delivering high-quality results.</p>
</div>
</div>

<div className="flex flex-row gap-1 justify-center items-center ">
<h1 className="lg:text-3xl text-base font-semibold lg:pr-3 lg:block hidden">2. </h1>
<div className="flex flex-col ">
 
    <h1 className="lg:text-lg text-base font-semibold" style={textStyles}> Rapid Learning Ability</h1>
    <p className="lg:text-base text-sm text-gray-400"> I excel in swiftly adapting to dynamic environments, quickly grasping new concepts, and staying ahead by acquiring new skills. My passion for learning enables me to thrive in challenging work settings.</p>
</div>
</div>

        {/* <div className="">
                            <div className='flex flex-row flex-wrap justify-between pb-1 '>
                                <h4 className="text-base">DesignUX - Organised by DoIT, RGPV </h4>
                                <p className="text-base">June 2021</p>
                            </div>
                            <p className="text-sm"> Status : <span className="italic text-green-400 font-normal">Won</span> </p>
                            </div>
 <div className="pb-3">
                            <div className='flex flex-row flex-wrap justify-between pb-1 '>
                                <h4 className="text-base"> Hackathon - Organised by MANIT </h4>
                                <p className="text-base">Feb 2023</p>
                            </div>
                            <p className="text-sm"> Status : <span className="italic text-indigo-400 font-normal">Participated</span> </p>
                            </div> */}

                    </div>

                       
                    </div>
                </div>
            </div>

        </>
    );
};

export default About;
