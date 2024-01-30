import Image from "next/image"
import bg from "@/app/assets/bg1.svg"

const Contact = () => {
    const textStyles = {
        backgroundImage: 'linear-gradient(to right, rgb(147, 51, 234), rgb(192, 132, 252), rgb(107, 33, 168))',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    };
    return (
        <>
            <div id="contact" className="flex justify-center items-center lg:px-32 px-8 lg:py-20 py-10 bg-gradient-to-r from-black via-black to-gray-900 transition ease-in-out duration-1000">
                <div className="container mx-auto">
                    <div className="flex lg:flex-row flex-col lg:gap-16 gap-8 glassmorphism rounded-lg lg:px-14 lg:py-12 px-8 py-8 relative overflow-hidden">
                    <div className='absolute overflow-hidden lg:-top-24 -top-2 left-0 w-full bg-blend-multiply '>
                <Image src={bg} alt='img'className='  w-full h-full object-fill ' style={{ opacity: 0.03}} />
                </div>

                        <div className="flex flex-col flex-1 ">

                            <h1 className='lg:text-4xl text-xl font-bold tracking-wide lg:pb-2 pb-1'>Let's <span style={textStyles} >Connect </span></h1>
                            <p className='lg:text-base text-sm  text-slate-400 lg:max-w-[470px]'>Need a beautiful, well-structured website that you can own and maintain yourself? Get in touch</p>
                            {/* <div className='flex flex-row flex-wrap lg:pt-5 pt-4 gap-2 '>
                                <p className='border rounded-full lg:px-4 lg:py-2  px-2 py-1 text-xs '>Frontend Development</p>
                                <p className='border rounded-full lg:px-4 lg:py-2  px-2 py-1 text-xs '>Software Development</p>
                                <p className='border rounded-full lg:px-4 lg:py-2  px-2 py-1 text-xs '>UI/UX Design</p>
                                <p className='border rounded-full lg:px-4 lg:py-2  px-2 py-1 text-xs '>Open Source</p>
                                <p className='border rounded-full lg:px-4 lg:py-2  px-2 py-1 text-xs '>Collaboration</p>
                            </div> */}
                        </div>

                        <div className="flex flex-col flex-1 my-auto">

                            <div className="flex lg:flex-row flex-wrap flex-col  lg:gap-10 gap-4 ">

                                <div className="flex flex-col gap-2">
                                    <p className='lg:text-sm text-xs text-left'>Reach me at</p>
                                    <h1 className='lg:text-xl text-sm font-semibold lg:tracking-wide break-words' style={textStyles} > khushimarothi16@gmail.com</h1>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className='lg:text-sm text-xs'>or Call</p>
                                    <h1 className='lg:text-xl text-sm font-semibold tracking-wide' style={textStyles} > +91-9340802902 </h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Contact;
