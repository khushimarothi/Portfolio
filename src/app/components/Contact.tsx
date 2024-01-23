import React from 'react';

const Contact = () => {
    return (
        <>
           <div className="flex justify-center items-center lg:px-32 px-8 lg:pt-28 lg:pb-16 py-10 bg-gradient-to-r from-black via-black to-gray-900 ">

<div className="container mx-auto">
    <div className="flex lg:flex-row flex-col justify-evenly items-center lg:gap-16  bg-slate-800 rounded-lg">

        <div className="flex flex-col flex-1 lg:px-14 lg:py-12 px-8 py-8">
           
           <h1 className='lg:text-4xl text-xl font-bold tracking-wide lg:pb-2 pb-1'>Let's Connect</h1>
           <p className='lg:text-lg text-sm tracking-wider text-slate-400'>I'm always interested about</p>
           <div className='flex flex-row flex-wrap lg:pt-5 pt-4 gap-2 '>
<p className='border rounded-full lg:px-4 lg:py-2  px-2 py-1 text-xs '>Frontend Development</p>
<p className='border rounded-full lg:px-4 lg:py-2  px-2 py-1 text-xs '>Software Development</p>
<p className='border rounded-full lg:px-4 lg:py-2  px-2 py-1 text-xs '>UI/UX Design</p>
<p className='border rounded-full lg:px-4 lg:py-2  px-2 py-1 text-xs '>Open Source</p>
<p className='border rounded-full lg:px-4 lg:py-2  px-2 py-1 text-xs '>Collaboration</p>
           </div>
        </div>

        <div className="flex flex-col flex-1  lg:px-14 lg:py-12 px-8 py-8">
            
            <div className="flex lg:flex-row flex-col lg:gap-10 gap-4">

<div className="flex flex-col">
    <p className='text-sm'>Reach me at</p>
    <h1 className='lg:text-lg text-base font-semibold tracking-wide'>khushimarothi16@gmail.com</h1>
</div>
<div className="flex flex-col">
    <p className='text-sm'>or Call</p>
    <h1 className='lg:text-lg text-base font-semibold tracking-wide'>+91 9340802902</h1>
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
