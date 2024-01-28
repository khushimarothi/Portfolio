import Image from "next/image";
import project1 from "@/app/assets/project1.png"
import project2 from "@/app/assets/project2.png"

const Projects = () => {
    const textStyles = {
        backgroundImage: 'linear-gradient(to right, rgb(147, 51, 234), rgb(192, 132, 252), rgb(107, 33, 168))',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    };
    return (
        <>
            <div className="flex justify-center items-center lg:px-32 px-8 lg:py-20 py-10 bg-gradient-to-r from-black via-black to-gray-900 ">

                <div className="container mx-auto">
                    <div className="lg:pb-14 pb-8">
                        <h1 className="font-bold lg:text-4xl text-2xl ">Portfolio</h1>
                    </div>

                    <div className="flex lg:flex-row flex-col justify-evenly  items-center lg:gap-16 gap-8 ">


                        <div className="flex  flex-1 justify-center items-center lg:gap-1 gap-9 ">
                            <Image
                                src={project1}
                                alt="pro"
                                className="lg:h-full lg:w-full w-96 h-56 "
                            />
                        </div>

                        <div className="flex flex-col flex-1 lg:gap-5 gap-2 lg:-ml-36">
                            <h1 className="lg:text-3xl text-lg font-semibold pb-2 lg:text-right">Talent Tie</h1>

                            <div className="flex flex-row gap-5 lg:justify-end">
                                <div>
                                    <button className="px-4 py-2 border rounded-lg lg:text-base text-sm glassmorphism"> Source Code </button>
                                </div>
                                <div>
                                    <button className="px-4 py-2 border rounded-lg lg:text-base text-sm glassmorphism" > Live demo </button>
                                </div>
                            </div>

                            <p className="lg:text-base text-sm text-gray-400 py-4 text-left lg:text-right lg:bg-gradient-to-r from-gray-950 to-gray-800 lg:px-5 rounded-sm ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi perferendis fugiat laudantium, eaque porro odio accusamus est blanditiis eius at neque vero quae delectus voluptas aut doloremque dolore ratione autem provident perspiciatis sed! Totam dolore provident, facilis qui non, amet maxime laborum suscipit magnam repellendus alias fugiat voluptate deleniti ab.</p>

                            <div className="flex flex-row flex-wrap gap-8 items-center lg:justify-end">
                                <p className=" lg:text-sm text-xs ">TypeScript</p>
                                <p className=" lg:text-sm text-xs ">TailwindCSS</p>
                                <p className=" lg:text-sm text-xs ">NextJs</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex lg:flex-row flex-col justify-evenly  items-center lg:gap-16 gap-8 lg:pt-36 pt-16 ">


                        <div className="flex flex-col  flex-1 justify-center items-center lg:gap-1 gap-9 order-1 lg:order-2 ">
                            <Image
                                src={project2}
                                alt="pro"
                                className="lg:h-full lg:w-full  "
                            />
                        </div>

                        <div className="flex flex-col flex-1 lg:gap-5 gap-2 lg:-mr-36 z-30 order-2 lg:order-1 ">
                            <h1 className="lg:text-3xl text-lg font-semibold pb-2 lg:text-left">Talent Tie</h1>

                            <div className="flex flex-row gap-5 ">
                                <div>
                                    <button className="px-4 py-2 border rounded-lg lg:text-base text-sm glassmorphism"> Source Code </button>
                                </div>
                                <div>
                                    <button className="px-4 py-2 border rounded-lg lg:text-base text-sm glassmorphism" > Live demo </button>
                                </div>
                            </div>

                            <p className="lg:text-base text-sm text-gray-400 py-4 text-left  lg:bg-gradient-to-l from-gray-950 to-gray-800 lg:px-5 rounded-sm ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi perferendis fugiat laudantium, eaque porro odio accusamus est blanditiis eius at neque vero quae delectus voluptas aut doloremque dolore ratione autem provident perspiciatis sed! Totam dolore provident, facilis qui non, amet maxime laborum suscipit magnam repellendus alias fugiat voluptate deleniti ab.</p>

                            <div className="flex flex-row flex-wrap gap-8 items-center ">
                                <p className=" lg:text-sm text-xs " >TypeScript</p>
                                <p className=" lg:text-sm text-xs ">TailwindCSS</p>
                                <p className=" lg:text-sm text-xs ">NextJs</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Projects;
