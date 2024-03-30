import Image from "next/image";
import project1 from "@/app/assets/project1.png"
import project2 from "@/app/assets/project2.png"
import { PiShareFatLight } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link"

const Projects = () => {
    const textStyles = {
        backgroundImage: 'linear-gradient(to right, rgb(147, 51, 234), rgb(192, 132, 252), rgb(107, 33, 168))',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    };
    const gradientHoverEffect = {
        backgroundImage: 'linear-gradient(to right, rgb(107, 33, 168), rgb(126, 34, 206))',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        transition: 'background-image 0.3s ease-in-out',  // Add a smooth transition for a better visual effect
    };

    const buttonHoverEffect = {
        backgroundImage: 'linear-gradient(to right, rgb(107, 33, 168), rgb(126, 34, 206))',
        transition: 'background-image 0.3s ease-in-out',
    };
    return (
        <>
            <div id="project" className="flex justify-center items-center lg:px-32 px-8 lg:py-20 py-10 bg-gradient-to-r from-black via-black to-gray-900 transition ease-in-out duration-1000 ">

                <div className="container mx-auto">
                    <div className="lg:pb-14 pb-8">
                        <h1 className="font-bold lg:text-4xl text-2xl ">Portfolio</h1>
                    </div>

                    <div className="flex lg:flex-row flex-col justify-evenly  items-center lg:gap-16 gap-8 ">


                        <div className="flex  flex-1 justify-center items-center lg:gap-1 gap-9 ">
                            <Image
                                src={project1}
                                alt="pro"
                                className="lg:h-full lg:w-full "
                            />
                        </div>

                        <div className="flex flex-col flex-1 lg:gap-5 gap-2 lg:-ml-36">
                            <h1 className="lg:text-3xl text-lg font-semibold lg:text-right pb-1">Talent Tie</h1>

                            <div className="flex flex-row gap-5 lg:justify-end">
                                <div>
                                    <Link href="https://github.com/khushimarothi/TalentTie" aria-label="soucecode">
                                <button className="px-4 py-2 border rounded-lg lg:text-base text-sm glassmorphism flex flex-wrap justify-center items-center gap-2" aria-label="soucecode"  style={buttonHoverEffect}> <FaGithub size={20}/> <span>Source Code</span> </button></Link>
                                </div>
                                <div>
                                    <Link href="https://talent-tie.vercel.app/" aria-label="live"> 
                                    <button className="px-4 py-2 border rounded-lg lg:text-base text-sm glassmorphism flex flex-wrap justify-center items-center gap-2 gradient" aria-label="live" > <PiShareFatLight size={20}/> <span>Live demo</span> </button></Link>
                                </div>
                            </div>

                            <p className="xl:text-base text-sm text-gray-400 py-4 text-left lg:text-right lg:bg-gradient-to-r from-gray-950 to-gray-800 lg:px-5 rounded-md xl:my-2">Talent Tie is a revolutionary social media platform fostering meaningful connections between students, alumni, and teachers. Empowering students to engage with alumni for valuable insights, referrals, and community participation, the platform also offers domain-specific learning opportunities. With an innovative chatbot feature, users can receive prompt assistance, ensuring a seamless experience even when direct support is unavailable.</p>

                            <div className="flex flex-row flex-wrap lg:gap-8 md:gap-6 gap-4 items-center lg:justify-end">
                                <p className=" lg:text-sm text-xs ">TypeScript</p>
                                <p className=" lg:text-sm text-xs ">TailwindCSS</p>
                                <p className=" lg:text-sm text-xs ">Nextjs</p>
                            </div>
                        </div>

                    </div>

{/* ------------------------------------------------------------------------------------------------------------------------- */}


                    <div className="flex lg:flex-row flex-col justify-evenly  items-center lg:gap-16 gap-8 lg:pt-36 pt-16 ">


                        <div className="flex flex-col  flex-1 justify-center items-center lg:gap-1 gap-9 order-1 lg:order-2 ">
                            <Image
                                src={project2}
                                alt="pro"
                                className="lg:h-full lg:w-full  "
                            />
                        </div>

                        <div className="flex flex-col flex-1 lg:gap-5 gap-2 lg:-mr-36 z-30 order-2 lg:order-1 ">
                            <h1 className="lg:text-3xl text-lg font-semibold pb-1 lg:text-left">Fiverr Clone</h1>

                            <div className="flex flex-row gap-5 ">
                                <div>
                                    <Link href="https://github.com/khushimarothi/fiverr_clone_ui" aria-label="soucecode">
                                <button className="px-4 py-2 border rounded-lg lg:text-base text-sm glassmorphism flex flex-wrap justify-center items-center gap-2" aria-label="soucecode" style={buttonHoverEffect}> <FaGithub size={20}/> <span>Source Code</span> </button>
                                </Link>
                                </div>
                                <div>
                                <Link href="https://fiverr-clone-ui.netlify.app/" aria-label="live"> 
                                    <button className="px-4 py-2 border rounded-lg lg:text-base text-sm glassmorphism flex flex-wrap justify-center items-center gap-2" aria-label="live" > <PiShareFatLight size={20}/> <span>Live demo</span> </button> 
                                </Link>
                                </div>
                            </div>

                            <p className="xl:text-base text-sm text-gray-400 py-4 text-left  lg:bg-gradient-to-l from-gray-950 to-gray-800 lg:px-5 rounded-md xl:my-2">Fiver Clone UI mirrors the renowned Fiverr website's frontend, showcasing a user-friendly design across various pages, including features such as gig creation and listing. This UI replica captures the essence of Fiverr's interface, providing a familiar and intuitive experience for users exploring and adding new gigs.</p>

                            <div className="flex flex-row flex-wrap lg:gap-8 md:gap-6 gap-4 items-center ">
                                <p className=" lg:text-sm text-xs ">ReactJs</p>
                                <p className=" lg:text-sm text-xs ">SCSS</p>
                           
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
};

export default Projects;
