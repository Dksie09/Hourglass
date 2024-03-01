"use client";
import React, { useEffect, useState } from 'react';

function Quote() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate rotation based on scroll position
    const rotation = scrollY * 0.1; // Adjust the multiplier for more or less rotation

    return (
        <div className='w-full flex flex-col items-center justify-center pt-20 px-20 bg-[#FFDB97] relative overflow-x-clip'>
            <h1 className='text-7xl font-extrabold shadow-outline text-white'>Our Stores</h1>
            <div className="group py-5 cursor-pointer">
                <span className="text-2xl font-extralight text-black">
                    Find the nearest one right now
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </span>
            </div>

            <div className=' flex flex-col justify-center mb-44 items-center'>

                {/* <button className=' bg-white w-40 px-4 py-2 mx-20 border-2 border-black rounded-lg text-black  uppercase'>Find nearest</button> */}
                <div
                    className='mx-20 my-5 rounded-3xl bg-white w-4/5 text-black flex flex-col items-center gap-10 border-4 border-black relative overflow-clip'
                    style={{ opacity: 1, transform: `translateY(0px)` }}
                >
                    {/* <h1 className='text-8xl font-extrabold'>Lorem ipsum dolor sit amet</h1> */}
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sit aliquet enim senectus dui eros nullam porttitor nascetur tortor.</p> */}
                    <img src='./map.png' alt='kids' className=' w-full rounded-3xl scale-150' />
                    <img src='./choco-draw.png' alt='smoking' className='h-52 absolute bottom-16 right-2 transform translate-x-1/2 translate-y-1/2' />
                </div>
                <img src='./bite1.png' alt='hemp' className='absolute top-6 -left-28 h-3/6' style={{ transform: `rotate(${rotation}deg)` }} />
                <img src='./bite2.png' alt='hemp' className='absolute -top-40 -right-20 h-2/6' style={{ transform: `rotate(${-rotation}deg)` }} />
            </div>

        </div>
    );
}

export default Quote;
