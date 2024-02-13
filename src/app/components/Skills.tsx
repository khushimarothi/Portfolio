"use client"
import { useState } from 'react';
import Link from "next/link"
import Image from 'next/image';

import frontend from "@/app/assets/frontenddev.svg"
import tools from "@/app/assets/tools.svg"
import softskills from "@/app/assets/softskills.svg"
import other from "@/app/assets/other.svg"

import html from "@/app/assets/frontend/html.svg"
import css from "@/app/assets/frontend/css.svg"
import javascript from "@/app/assets/frontend/javascript.svg"
import react from "@/app/assets/frontend/react.svg"
import typescript from "@/app/assets/frontend/typescript.svg"
import bootstrap from "@/app/assets/frontend/bootstrap.svg"
import tailwind from "@/app/assets/frontend/tailwind.png"
import nextjs from "@/app/assets/frontend/nextimg.png"

import git from "@/app/assets/tools/git.svg"
import github from "@/app/assets/tools/github.svg"
import vscode from "@/app/assets/tools/vscode.png"

import cpp from "@/app/assets/others/cpp.svg"
import figma from "@/app/assets/others/figma.svg"
import mysql from "@/app/assets/others/mysql.svg"
import c from "@/app/assets/others/c.png"

import leetcode from "@/app/assets/platforms/Leetcode.png"
import gfg from "@/app/assets/platforms/gfg.svg"
import hackerrank from "@/app/assets/platforms/hackerrank.svg"

const Skills = () => {
  const categoryImages: { [key: string]: any } = {
    Frontend: frontend,
    Tools: tools, 
    Others: softskills,
    'CP Platform': other,
  };

  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Frontend']);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories([category]);
  };

  const skillsData: {
    [key: string]: {
      skill: string;
      image: string;
      link?: string;
    }[];
  } = {
    Frontend: [
      { skill: 'HTML', image: html },
      { skill: 'CSS', image: css },
      { skill: 'TailwindCSS', image: tailwind },
      { skill: 'Bootstrap', image: bootstrap },
      { skill: 'JavaScript', image: javascript },
      { skill: 'ReactJS', image: react },
      { skill: 'Typescript', image: typescript },
      { skill: 'NextJS', image: nextjs },
    ],
    Tools: [
      { skill: 'Git', image: git },
      { skill: 'Github', image: github },
      { skill: 'VS Code', image: vscode },
    ],
    Others: [
      { skill: 'C++', image: cpp},
      { skill: 'C', image: c },
      { skill: 'MySQL', image: mysql },
      { skill: 'Figma', image: figma },
    ],
    'CP Platform': [
      { skill: 'Leetcode', image: leetcode, link: 'https://leetcode.com/khushi_marothi' },
      { skill: 'GeeksforGeeks', image: gfg, link: 'https://auth.geeksforgeeks.org/user/khushimarothi2002' },
      { skill: 'HackerRank', image: hackerrank, link: 'https://www.hackerrank.com/profile/khushimarothi201' },
      
    ],
    
  };

  const renderProgressBar = (skills: { skill: string; image: string; link?: string }[]) => (
    <div className='flex flex-row flex-wrap gap-5'>
      {skills.map(({ skill, image, link }) => (
        <div key={skill} className='flex flex-col justify-center items-center gap-3 lg:mr-5 my-2 '>
          {link ? (
            <Link href={link} target="_blank" rel="noopener noreferrer" >
              <Image
                src={image}
                alt={skill}
                className={`h-16 w-16 ${['NextJS', 'Github'].includes(skill) ? 'invert' : ''}`}
                style={{ filter: ['NextJS', 'Github'].includes(skill) ? 'invert(1)' : 'none' }}
              />
            </Link>
          ) : (
            <Image
              src={image}
              alt={skill}
              className={`h-16 w-16 ${['NextJS', 'Github'].includes(skill) ? 'invert' : ''}`}
              style={{ filter: ['NextJS', 'Github'].includes(skill) ? 'invert(1)' : 'none' }}
            />
          )}
          <p className='text-xs text-gray-400 font-normal'>{skill}</p>
        </div>
      ))}
    </div>
  );
  
  
  const [isHovered, setHovered] = useState(false)
  const textStyles = {
    backgroundImage: 'linear-gradient(to right, rgb(147, 51, 234), rgb(192, 132, 252), rgb(107, 33, 168))',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <>
      <div id="skills" className="flex justify-center items-center lg:px-32 px-8 lg:py-20 py-10  bg-gradient-to-r from-black via-black to-gray-900 transition ease-in-out duration-1000 ">


        <div className="container mx-auto ">
          <div className=" lg:pb-14 pb-8">
            <h1 className="font-bold lg:text-4xl text-2xl " >Technical <span style={textStyles}>Proficiency </span> </h1>
          </div>

          <div className="flex lg:flex-row flex-col justify-evenly lg:gap-16 gap-8  ">

            <div className="flex flex-col gap-5 flex-1">
              <div className="grid grid-cols-2  lg:grid-cols-2 lg:gap-10 gap-8">

                {['Frontend', 'Tools', 'Others', 'CP Platform'].map((category) => (
                  <div
                    key={category}
                    className={`gap-10 rounded-lg p-5 relative grid items-center justify-center cursor-pointer h-[100px] glassmorphism
   ${selectedCategories.includes(category) ? 'bg-gradient-to-r from-purple-900 to-purple-600 glassmorphism' : '  '}
   ${isHovered && !selectedCategories.includes(category) ? 'hover:bg-gradient-to-r hover:from-purple-900 hover:to-purple-600' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <div className='absolute -top-4 -left-4  text-white bg-gradient-to-r from-gray-800 to-gray-700 px-2 py-2 rounded-md text-center '>
                      <Image src={categoryImages[category]} alt='' className='h-7 w-7 bg-cover fill-current' />
                    </div>
                    <h1 className="lg:text-xl text-sm font-bold text-center break-all">{category}</h1>
                  </div>
                ))}


              </div>

            </div>

            <div className="flex flex-col gap-5 flex-1 min-h-[27rem] ">
              <div className=" rounded-lg  ">

                <div className=' mb-2'>
                 
                  <p className=' mb-2 lg:text-lg text-base font-semibold'>{selectedCategories[0]} </p>
                  <div className='bg-gradient-to-r from-purple-800 to-purple-500 rounded-full w-10 h-2 '></div>
                </div>

                <div className='flex flex-col gap-5  mx-auto py-5'>

                  {renderProgressBar(skillsData[selectedCategories[0]])}

                  {/* <div className='flex flex-row flex-wrap gap-5'>
                    <div className="flex flex-col justify-center items-center gap-y-2">
                    <Image src={html} alt='' className='h-12 w-12' />
                    <p className='text-xs text-gray-400'>HTML</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-y-2">
                    <Image src={html} alt='' className='h-12 w-12' />
                    <p className='text-xs text-gray-400'>CSS</p>
                    </div>

                  </div> */}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
