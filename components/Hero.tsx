"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import Banners from './Banners';
import Header from './Header';
import { account } from "@/app/appwrite";

function Hero() {
    const constraintsRef = useRef(null);

    return (
        <div className='min-h-screen relative bg-[#a59ade] w-full flex flex-col' ref={constraintsRef}>
            <Header />
            <motion.img
                src='bite1.png'
                alt='hemp'
                className='w-2/5 absolute left-0 md:block bottom-20 md:w-auto md:absolute md:bottom-32 md:left-20 md:h-72 z-50 '
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
            <motion.img
                src='bite2.png'
                alt='hemp'
                className='w-1/3 absolute right-10 md:w-auto bottom-10 md:block md:absolute md:top-20 md:right-20 md:h-72 z-50'
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

            <div className='hidden md:flex flex-grow flex-col justify-center items-center relative overflow-hidden'>
                <h1 className='text-center absolute z-0 mb-40 heading-font text-white w-full text-[50vw]'>BITES</h1>
                <img src='./all.png' className='w-3/4 z-10 -mb-52 relative opacity-95 h-auto' alt='cannabis' />
            </div>
            <div className='flex md:hidden w-full flex-col justify-center items-center relative overflow-hidden'>
                <h1 className='text-center z-0 heading-font text-white w-full text-[50vw]'>BITES</h1>
                <img src='./all.png' className='md:w-full w-4/5 px-5 scale-150 md:scale-0 z-10 opacity-95' alt='cannabis' />
            </div>

        </div>
    );
}

export default Hero;

