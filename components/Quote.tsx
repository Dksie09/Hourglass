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
        <div className='w-full flex flex-col items-center justify-center p-20 bg-[#FFDB97] relative'>
            <div
                className='m-20 rounded-3xl bg-white p-20 w-2/3 text-black flex flex-col items-center gap-10 border-4 border-black relative'
                style={{ opacity: 1, transform: `translateY(0px)` }}
            >
                <h1 className='text-8xl font-extrabold'>Lorem ipsum dolor sit amet</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sit aliquet enim senectus dui eros nullam porttitor nascetur tortor.</p>
                <img src='./smoking.png' alt='smoking' className='h-40 absolute bottom-16 right-10 transform translate-x-1/2 translate-y-1/2' />
            </div>
            <img src='./hemp-r.png' alt='hemp' className='absolute top-6 -left-28 h-4/6' style={{ transform: `rotate(${rotation}deg)` }} />
            <img src='./hemp-l.png' alt='hemp' className='absolute  -top-64 -right-28 h-4/6' style={{ transform: `rotate(${-rotation}deg)` }} />
        </div>
    );
}

export default Quote;
