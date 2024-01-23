"use client"
import React, { useState } from 'react';

const Experience = () => {
    const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

	const handleTabClick = (tab: 'work' | 'education') => {
	  setActiveTab(tab);
	};

    return (
        <>
            <div className="flex justify-center items-center lg:px-32 px-8 lg:py-20 py-10 bg-gradient-to-r from-black via-black to-gray-900 ">

                <div className="container mx-auto">
                    <div className="lg:pb-14 pb-8">
                        <h1 className="font-bold lg:text-4xl text-2xl "> Experience & Qualification </h1>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-evenly items-start lg:gap-16 gap-8 ">

                        <div className="flex flex-col gap-5 flex-1">
                        <div className='flex flex-row gap-5 text-center justify-center  '>
								<div  className={`border gap-10 border-white rounded-md p-5 lg:w-2/4 cursor-pointer ${
                    activeTab === 'work' ? 'bg-indigo-400' : ''
                  }`}
                  onClick={() => handleTabClick('work')}>
									<h1 className='lg:text-xl text-sm font-bold text-center'>Work Experience </h1>
								</div>
								<div className={`border gap-10 border-white rounded-md p-5 lg:w-2/4 cursor-pointer ${
                    activeTab === 'education' ? 'bg-indigo-400' : ''
                  }`}
                  onClick={() => handleTabClick('education')}>
									<h1 className='lg:text-xl text-sm font-bold text-center flex justify-center items-center my-auto'>Education</h1>

								</div>
							</div>
                        </div>

                        <div className='flex flex-col  gap-5 flex-1'>
						{activeTab === 'work' && (
                <div className=" dark:text-gray-100" >
				<div className="container   mx-auto">
					<div className="grid gap-4 ">
						<div className="relative col-span-12 px-4 space-y-6 ">
							<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-gray-700">
								<div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-indigo-400">
								   <h3 className="lg:text-xl text-lg font-semibold tracki">Frontend Development Intern </h3>
								   <h3 className="lg:text-lg text-base font-medium tracki pb-1 dark:text-gray-300">CrewLance.in</h3>
								   <time className="text-xs tracki uppercase dark:text-gray-400">Dec 2023 - Jan 2024</time>
								  <ul className="list-disc py-2 list-inside   text-sm">
									<li className='mt-3'>Integral part of a dynamic team, contributing to the creation of CrewLance's official website frontend from inception. Actively involved in designing and implementing user interfaces using  TypeScript, Next.js, and Tailwind CSS.</li>
									<li className='mt-3'>Focused on elevating the frontend experience, actively participating in the development of visual elements and user interactions for the official website.</li>
								  </ul>
								</div>
								<div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-indigo-400">
								   <h3 className="lg:text-xl text-lg font-semibold tracki">DevRel Contributor </h3>
								   <h3 className="lg:text-lg text-base font-medium tracki pb-1 dark:text-gray-300">Keploy</h3>
								   <time className="text-xs tracki uppercase dark:text-gray-400">May 2023 - June 2023</time>
								  <ul className="list-disc py-2 list-inside   text-sm">
									<li className='mt-3'>Promoted Keploy to a  wider audience by participating in online discussions and  posts about the tool.</li>
									<li className='mt-3'>Actively participated in Keploy sessions, demonstrating a strong grasp of the tool's concepts and practical applications.</li>
								  </ul>
								</div>
								<div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-indigo-400">
									<h3 className="lg:text-xl text-lg font-semibold tracki">Open Source Contributor </h3>
								   <h3 className="lg:text-lg text-base font-medium tracki pb-1 dark:text-gray-300">JWoC</h3>
								   <time className="text-xs tracki uppercase dark:text-gray-400">Feb 2023 - March 2023</time>
								  <ul className="list-disc py-2 list-inside   text-sm">
									<li className='mt-3'>Achieved  11th place out of  60+ participants in this prestigious  Open-Source event, showcasing strong problem-solving abilities and a commitment to excellence.</li>
									<li className='mt-3'>Actively contributed to multiple open-source projects, demonstrating proficiency in code development and collaborative integration.</li>
								  </ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
              )}

{activeTab === 'education' && (
               <div className=" dark:text-gray-100" >
			   <div className="container   mx-auto">
				   <div className="grid gap-4 ">
					   <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
						   <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-gray-700">
							   <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-indigo-400">
								   <h3 className="lg:text-xl text-lg font-semibold tracki">B.Tech ( Computer Science & Business System ) </h3>
								   <h3 className="lg:text-lg text-base font-medium tracki pb-1 dark:text-gray-300">School of Information Technology, RGPV </h3>
								   <time className="text-xs tracki uppercase dark:text-gray-400">2020 - Present</time>
								   <p className="mt-3"><span className='font-bold text-base'>CGPA</span> - 8.84 / 10</p>
							   </div>
							   <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-indigo-400">
							       <h3 className="lg:text-xl text-lg font-semibold tracki">Higher Secondary Education ( CBSE ) </h3>
								   <h3 className="lg:text-lg text-base font-medium tracki pb-1 dark:text-gray-300">St. John's Sr Sec School ( Damoh ) </h3>
								   <time className="text-xs tracki uppercase dark:text-gray-400">2018 - 2020</time>
								   <p className="mt-3"><span className='font-bold text-base'>Percentage</span> - 94.8%</p>
							   </div>
							 
						   </div>
					   </div>
				   </div>
			   </div>
		   </div>
              )}
							
						</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;
