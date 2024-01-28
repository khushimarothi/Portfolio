"use client"
import { useState } from 'react';
import { FiCode } from 'react-icons/fi';

const Skills = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Frontend']);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories([category]);
  };

  const skillsData: {
    [key: string]: {
      skill: string;
      percentage: number;
    }[];
  } = {
    Frontend: [
      { skill: 'HTML', percentage: 90 },
      { skill: 'CSS', percentage: 90 },
      { skill: 'JavaScript', percentage: 75 },
      { skill: 'ReactJS', percentage: 65 },
      { skill: 'Typescript', percentage: 40 },
      { skill: 'TailwindCSS', percentage: 70 },
      { skill: 'NextJS', percentage: 30 },
    ],
    Tools: [
      { skill: 'Git & Github', percentage: 85 },
      { skill: 'Visual Studio Code', percentage: 70 },
    ],
    'Soft Skills': [
      { skill: 'Problem-solving', percentage: 75 },
      { skill: 'Collaboration', percentage: 90 },
      { skill: 'Team-work', percentage: 95 },
      { skill: 'Quick Learner', percentage: 90 },
    ],
    Others: [
      { skill: 'Figma', percentage: 80 },
      { skill: 'C++', percentage: 75 },
      { skill: 'MySQL', percentage: 60 },
    ],
  };

  const renderProgressBar = (skills: { skill: string; percentage: number }[]) => (
    <div className='flex flex-col '>
      {skills.map(({ skill, percentage }) => (
        <div key={skill} className='mb-4'>
          <div className='flex flex-row justify-between'>
            <h2 className='text-xs mb-2'>{skill}</h2>
            <h2 className='text-xs mb-2'>{percentage}%</h2>
          </div>
          <div className='bg-stroke dark:bg-gray-300 relative h-1.5 w-full rounded-2xl'>
            <div className={` bg-gradient-to-r from-purple-900  to-purple-600 absolute top-0 left-0 h-full rounded-2xl`} style={{ width: `${percentage}%` }}></div>
          </div>
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
      <div className="flex justify-center items-center lg:px-32 px-8 lg:py-20 py-10  bg-gradient-to-r from-black via-black to-gray-900 ">

        <div className="container mx-auto ">
        {/* <div className="text-center sm:text-right before:block before:w-20 before:h-2 before:mb-2 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-gradient-to-r before:from-purple-800 
          before:via-purple-600 before:to-purple-400 before:bg-opacity-80 ">
				</div> */}
          <div className=" lg:pb-14 pb-8">
            <h1 className="font-bold lg:text-4xl text-2xl " >Technical <span style={textStyles}>Proficiency </span> </h1>
          </div>
          
          <div className="flex lg:flex-row flex-col justify-evenly lg:gap-16 gap-8  ">

            <div className="flex flex-col gap-5 flex-1">
              <div className="grid grid-cols-2  lg:grid-cols-2 lg:gap-10 gap-8">

                {['Frontend', 'Tools', 'Soft Skills', 'Others'].map((category) => (
                  <div
                    key={category}
                    className={`gap-10 rounded-lg p-5 relative grid items-center justify-center cursor-pointer h-[100px] glassmorphism
   ${selectedCategories.includes(category) ? 'bg-gradient-to-r from-purple-900 to-purple-600 glassmorphism' : '  '}
   ${isHovered && !selectedCategories.includes(category) ? 'hover:bg-gradient-to-r hover:from-purple-900 hover:to-purple-600' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <div className='absolute -top-4 -left-4  text-white bg-gradient-to-r from-gray-800 to-gray-700 px-3 py-3 rounded-md text-center '>
                      <FiCode className="text-xl  text-white text-center" />
                    </div>
                    <h1 className="lg:text-xl text-sm font-bold text-center break-all">{category}</h1>
                  </div>
                ))}


              </div>

            </div>

            <div className="flex flex-col gap-5 flex-1 min-h-[27rem] ">
              <div className=" rounded-lg glassmorphism ">

                <div className=' mb-2' style={{ border: '1px solid rgba(255, 255, 255, 0.125)' }}>
                  <p className='px-5 py-3 lg:text-lg text-sm font-semibold'>{selectedCategories[0]} </p>
                </div>

                <div className='flex flex-col gap-5 p-5'>

                  {renderProgressBar(skillsData[selectedCategories[0]])}
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
