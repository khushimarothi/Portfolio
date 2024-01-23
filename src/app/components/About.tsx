import { LuAward } from "react-icons/lu";

const About = () => {
    return (
        <>
            <div className="flex justify-center items-center lg:px-32 px-8 lg:pt-28 lg:pb-16 py-10 bg-gradient-to-r from-black via-black to-gray-900 ">

                <div className="container mx-auto">
                <div className="lg:pb-14 pb-8">
                        <h1 className="font-bold lg:text-4xl text-2xl ">About Me</h1>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-evenly  lg:gap-16 gap-8 ">

                    <div className="flex flex-col  flex-1 gap-3  ">
                        <h3 className="lg:text-3xl text-lg font-bold">I design and code beautifully simple things, and I love what I do.</h3>
                            <p className="lg:text-base text-sm text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, corporis vero ab est autem, ex, ut aliquam fugiat magnam excepturi explicabo adipisci quo! Veniam, dolo. ipsum dolor sit amet consectetur adipisicing elit. Fuga, corporis vero ab est autem, ex, ut aliquam fugiat magnam excepturi explicabo adipisci quo! Veniam, dolo</p>
                        </div>
                       
                        <div className="flex flex-col  gap-5 ">
                            
                                <div className="flex flex-col border items-center gap-2 border-white rounded-md p-5 ">
                                    <LuAward size={25} /> 
                                    <h1 className='lg:text-lg text-base font-bold'>Experience</h1>
                                    <h1 className='lg:text-sm text-xs font-normal'>1+ year</h1>
                                </div>
                            
                                <div className="flex flex-col border items-center gap-2 border-white rounded-md p-5 ">
                                    <LuAward size={25} /> 
                                    <h1 className='lg:text-lg text-base font-bold'>Projects</h1>
                                    <h1 className='lg:text-sm text-xs font-normal'>3+ completed</h1>
                                </div>

                                <div className="flex flex-col border items-center gap-2 border-white rounded-md p-5 ">
                                    <LuAward size={25} /> 
                                    <h1 className='lg:text-lg text-base font-bold'>Open Source Program</h1>
                                    <h1 className='lg:text-sm text-xs font-normal'> Participated in 4+ </h1>
                                </div>
                        </div>

                        <div className="flex flex-col flex-1">
                            <h1 className="lg:text-2xl text-lg font-semibold pb-6">Participations</h1>
        <div className="pb-3">
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
                            </div>

                            <h1 className="lg:text-2xl text-lg font-semibold pb-6 pt-6">Position of Responsibility</h1>
        <div className="pb-3">
                            <div className='flex flex-row flex-wrap justify-between pb-1 '>
                                <h4 className="text-base">Open Source Executive</h4>
                                <p className="text-base">Dec 2022 - Oct 2023</p>
                            </div>
                            <p className="text-sm text-gray-400"> Asper</p>
                            </div>
                            <div className="pb-3">
                            <div className='flex flex-row flex-wrap justify-between pb-1 '>
                                <h4 className="text-base"> Cohead Web Development</h4>
                                <p className="text-base">Feb 2022 - Nov 2022</p>
                            </div>
                            <p className="text-sm text-gray-400"> Asper</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>

        </>
    );
};

export default About;
