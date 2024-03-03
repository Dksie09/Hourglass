import React from 'react';

function Last() {
    return (
        <div className='flex flex-col py-10 items-center justify-center w-full h-96 bg-[#FFDB97] relative'>
            <div className='flex flex-col items-center justify-center w-full h-full'>
                <img src='./granola-hand.png' alt='kids' className='md:-top-1/2 top-5 absolute w-1/3 h-72 object-cover rounded-3xl hidden md:block' />
                <h1 className='text-4xl md:text-6xl lg:text-6xl px-10 text-center font-extrabold  text-white'>Sign up to our Newsletter</h1>
                <input className=' bg-white sm:w-1/3 w-2/3 mt-10 p-5 rounded-full border' placeholder='Enter your email' />
            </div>
        </div>
    );
}

export default Last;
