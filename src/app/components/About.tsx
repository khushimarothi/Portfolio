import { LuAward } from "react-icons/lu";

const About = () => {
    const textStyles = {
        backgroundImage: 'linear-gradient(to right, rgb(147, 51, 234), rgb(192, 132, 252), rgb(107, 33, 168))',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    };
    return (
        <div className='xl:min-h-[100vh] bg-gradient-to-r from-black via-black to-gray-900 '>
            <div className="flex justify-center items-center  lg:px-32 px-8 lg:pt-28 lg:pb-16 py-10">

                <div className="container mx-auto ">
                <div className="lg:pb-14 pb-8">
                        <h1 className="font-bold lg:text-4xl text-2xl ">About <span style={textStyles} > Me  </span></h1>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-evenly  lg:gap-16 gap-8 ">

                    <div className="flex flex-col  flex-1 gap-3 ">
                        <h3 className="lg:text-3xl text-lg font-bold pb-4 lg:max-w-[550px] " >I <span style={textStyles} > design </span>  and <span style={textStyles} > code </span> beautifully simple things, and I <span style={textStyles} > love </span>  what <span style={textStyles} > I do</span>.</h3>
                            <p className="lg:text-base text-sm text-gray-400 lg:max-w-[525px]">Hello there, I'm Khushi Marothi – your friendly neighborhood frontend wizard, competitive coding ninja, and the self-proclaimed Picasso of pixels! When I'm not busy crafting delightful UI/UX experiences that make websites jealous, you can catch me in a coding duel, challenging bugs to a friendly match. Open source is my playground, where I've left my mark on more projects than my coffee cup has left on my keyboard. They say laughter is the best medicine, but have you tried debugging with a punchline? Spoiler alert: It works wonders!</p>
                        </div>
                       
                    <div className="flex flex-col flex-1 justify-start gap-5 relative">

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

<h1 className="lg:text-3xl text-lg font-semibold  pb-2 ">Why <span style={textStyles}> Collaborate  </span> With Me</h1>

<div className='relative flex flex-col gap-5'>
<div className="flex flex-row gap-1  ">

<div className="flex flex-col bg-gray-900 lg:px-8 lg:py-6 px-6 py-4 max-w-[25rem] lg:min-h-[11rem] rounded-md glassmorphism">
 
    <h1 className="lg:text-lg text-base font-semibold pb-3" > Dedicated Work Ethic</h1>
    <p className="lg:text-base text-sm text-gray-400"> I prioritize precision in execution, consistently exceeding expectations and delivering high-quality results.</p>
</div>
</div>

<div className="flex flex-row gap-1 ">
<div className="flex flex-col bg-gray-900 lg:px-8 lg:py-6 px-6 py-4 max-w-[25rem] lg:min-h-[11rem] rounded-md glassmorphism xl:absolute xl:right-0 xl:-mt-10 ">
 
    <h1 className="lg:text-lg text-base font-semibold  pb-3" > Rapid Learning Ability</h1>
    <p className="lg:text-base text-sm text-gray-400"> I excel in swiftly adapting to dynamic environments, quickly grasping new concepts, and staying ahead by acquiring new skills. </p>
</div>
</div>
</div>
                    </div>

                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
