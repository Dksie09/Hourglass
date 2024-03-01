"use client";
import React, { useRef } from 'react'
import { motion } from "framer-motion"
import Banners from './Banners';
import Header from './Header';

function Hero() {

    const constraintsRef = useRef(null)

    return (
        <div className='min-h-screen relative bg-[#b3acdc] w-full flex flex-col' ref={constraintsRef}>
            <Header />
            <motion.img
                src='bite1.png'
                alt='hemp'
                className='absolute bottom-32 left-20 h-72 z-50'
                drag
                dragConstraints={constraintsRef}
                // dragConstraints={{
                //     top: -50,
                //     left: -50,
                //     right: 50,
                //     bottom: 50,
                //   }}
                initial={{ y: 0 }}
                animate={{ y: [0, -15, 0] }} // Move slightly up then back down
                transition={{
                    duration: 2, // Duration of the entire animation
                    ease: "easeInOut", // Type of easing for the animation
                    repeat: Infinity, // Repeat the animation indefinitely
                    repeatType: "loop" // Type of repetition
                }}
            />
            <motion.img
                src='bite2.png'
                alt='hemp'
                className='absolute top-20 right-20 h-72 z-50'
                drag
                dragConstraints={constraintsRef}
                initial={{ y: 0 }}
                animate={{ y: [0, -15, 0] }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop"
                }}
            />

            {/* This div is for the content you want to center on the page */}
            <div className='flex-grow flex flex-col justify-center items-center relative overflow-hidden'>
                {/* <h1 className='font-bold text-center absolute z-0 mb-96' style={{ fontSize: '20vw' }}>CANNABIS</h1>
                <img src='./cannabis-hero.png' className=' w-1/2 z-10 relative opacity-90' alt='cannabis' /> */}
                <h1 className=' text-center absolute z-0 mb-40 heading-font text-white' style={{ fontSize: '50vw' }}>BITES</h1>
                <img src='./bite-hero.png' className=' w-3/4 z-10 -mb-52 relative opacity-95' alt='cannabis' />
            </div>
            {/* <Banners /> */}
        </div>
    )

}


export default Hero