"use client"
import React, { useState } from 'react';

const Experience = () => {
	const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');
	const [hoveredTab, setHoveredTab] = useState<string | null>(null);

	const handleTabClick = (tab: 'work' | 'education') => {
		setActiveTab(tab);
	};

	const textStyles = {
		backgroundImage: 'linear-gradient(to right, rgb(147, 51, 234), rgb(192, 132, 252), rgb(107, 33, 168))',
		WebkitBackgroundClip: 'text',
		backgroundClip: 'text',
		color: 'transparent',
	};

	return (
		<>
			<div id='experience' className="flex justify-start  min-h-screen lg:px-32 px-8 lg:py-20 py-10 bg-gradient-to-r from-black via-black to-gray-900 transition ease-in-out duration-1000 ">

				<div className="container mx-auto">
					<div className="lg:pb-14 pb-8">
						<h1 className="font-bold lg:text-4xl text-2xl "> Experience <span style={textStyles}>& Qualification </span>  </h1>
					</div>
					<div className="flex lg:flex-row flex-col justify-evenly items-start lg:gap-16 gap-8 ">

						<div className="flex flex-col gap-5 flex-1">
							<div className='flex flex-row gap-5 text-center justify-center  '>
								<div className={`gap-10 rounded-md p-5 lg:w-2/4 cursor-pointer glassmorphism ${(activeTab === 'work' || hoveredTab === 'work') ? 'bg-gradient-to-r from-purple-800 to-purple-700' : ''
									}`}
									onClick={() => handleTabClick('work')}
									onMouseEnter={() => setHoveredTab('work')}
									onMouseLeave={() => setHoveredTab(null)}
									aria-label='work experience'
									>
									<h1 className='lg:text-xl text-sm font-bold text-center'>Work Experience </h1>
								</div>
								<div className={`gap-10 flex justify-center rounded-md p-5 lg:w-2/4 cursor-pointer glassmorphism ${(activeTab === 'education' || hoveredTab === 'education') ? 'bg-gradient-to-r from-purple-800 to-purple-700' : ''
									}`}
									onClick={() => handleTabClick('education')}
									onMouseEnter={() => setHoveredTab('education')}
									onMouseLeave={() => setHoveredTab(null)}
									aria-label='education'
									>
									<h1 className='lg:text-xl text-sm font-bold text-center flex justify-center items-center my-auto'>Education</h1>

								</div>
							</div>
						</div>

						<div className='flex flex-col  gap-5 flex-1'>
							{activeTab === 'work' && (
								<div className=" text-gray-100" >
									<div className="container  mx-auto">
										<div className="grid gap-4 ">
											<div className="relative col-span-12 px-4 space-y-6 ">
												<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700">
													<div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-600">
														<h2 className="lg:text-xl text-lg font-semibold tracki">Software Development Intern </h2>
														<h3 className="lg:text-lg text-base font-medium tracki pb-1  text-purple-300" >Walkover Web Solution</h3>
														<time className="text-xs tracki uppercase text-gray-400">Feb 2024 - Present</time>
														<ul className="list-disc py-2 list-inside   text-sm">
															<li className='mt-3'>Played a pivotal role in the development of integration page of viaSocket, a key product at Walkover, focusing on feature enhancement.
															</li>
															<li className='mt-3'>Collaborating closely with the team to optimize functionality and user experience, contributing to the overall improvement of the product through innovative solutions.
															</li>

														</ul>
													</div>
													<div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-600">
														<h2 className="lg:text-xl text-lg font-semibold tracki">Frontend Development Intern </h2>
														<h3 className="lg:text-lg text-base font-medium tracki pb-1  text-purple-300" >CrewLance.in</h3>
														<time className="text-xs tracki uppercase text-gray-400">Dec 2023 - Jan 2024</time>
														<ul className="list-disc py-2 list-inside   text-sm">
															<li className='mt-3'>Integral part of a dynamic team, contributing to the creation of CrewLance's official website frontend from inception. Actively involved in designing and implementing user interfaces using  TypeScript, Next.js, and Tailwind CSS.</li>
															<li className='mt-3'>Focused on elevating the frontend experience, actively participating in the development of visual elements and user interactions for the official website.</li>
														</ul>
													</div>
													<div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-600">
														<h2 className="lg:text-xl text-lg font-semibold tracki">DevRel Contributor </h2>
														<h3 className="lg:text-lg text-base font-medium tracki pb-1 text-purple-300">Keploy</h3>
														<time className="text-xs tracki uppercase text-gray-400">May 2023 - June 2023</time>
														<ul className="list-disc py-2 list-inside   text-sm">
															<li className='mt-3'>Promoted Keploy to a  wider audience by participating in online discussions and  posts about the tool.</li>
															<li className='mt-3'>Actively participated in Keploy sessions, demonstrating a strong grasp of the tool's concepts and practical applications.</li>
														</ul>
													</div>
													<div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-600">
														<h2 className="lg:text-xl text-lg font-semibold tracki">Open Source Contributor </h2>
														<h3 className="lg:text-lg text-base font-medium tracki pb-1 text-purple-300">JWoC</h3>
														<time className="text-xs tracki uppercase text-gray-400">Feb 2023 - March 2023</time>
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
								<div className=" text-gray-100" >
									<div className="container   mx-auto">
										<div className="grid gap-4 ">
											<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
												<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700">
													<div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-600">
														<h2 className="lg:text-xl text-lg font-semibold tracki">B.Tech ( Computer Science & Business System ) </h2>
														<h3 className="lg:text-lg text-base font-medium tracki pb-1 text-purple-300">School of Information Technology, RGPV </h3>
														<time className="text-xs tracki uppercase text-gray-400">2020 - Present</time>
														<p className="mt-3"><span className='font-bold text-base'>CGPA</span> - 8.87 / 10</p>
													</div>
													<div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-600">
														<h3 className="lg:text-xl text-lg font-semibold tracki">Senior Secondary Education ( CBSE ) </h3>
														<h3 className="lg:text-lg text-base font-medium tracki pb-1 text-purple-300">St. John's Sr Sec School ( Damoh ) </h3>
														<time className="text-xs tracki uppercase text-gray-400">2018 - 2020</time>
														<p className="mt-3"><span className='font-bold text-base'>Percentage</span> - 94.8%</p>
													</div>
													<div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-600">
														<h2 className="lg:text-xl text-lg font-semibold tracki">Secondary Education ( CBSE ) </h2>
														<h3 className="lg:text-lg text-base font-medium tracki pb-1 text-purple-300">St. John's Sr Sec School ( Damoh ) </h3>
														<time className="text-xs tracki uppercase text-gray-400">2018</time>
														<p className="mt-3"><span className='font-bold text-base'>Percentage</span> - 91.4%</p>
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
