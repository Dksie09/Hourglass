"use client";
import React, { useRef } from 'react'
import { motion } from "framer-motion"
import Banners from './Banners';

function Hero() {

    const constraintsRef = useRef(null)

    return (
        <div className='min-h-screen relative bg-[#b3acdc]  w-full flex flex-col' ref={constraintsRef}>
            <div className='flex w-full flex-row items-center p-10 h-32'>
                <img src='/logo.png' className='h-20' alt='logo' />
                <div className='flex text-center items-center justify-center h-full text-black w-full gap-20'>
                    <span className='hover:text-white'>Home</span>
                    <span className='hover:text-white'>Products</span>
                    <span className='hover:text-white'>Cart</span>
                    <span className='hover:text-white'>About</span>
                    <span className='hover:text-white'>Contact</span>
                </div>
                <div className='flex text-black gap-4 h-full'>
                    <span>Stores</span>
                    |
                    <span>Login</span>
                </div>
            </div>

            <motion.img
                src='hemp1.png'
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
                src='hemp2.png'
                alt='hemp'
                className='absolute top-20 right-20 h-72 z-50'
                drag
                dragConstraints={constraintsRef}
                // dragConstraints={{
                //     top: -50,
                //     left: -50,
                //     right: 50,
                //     bottom: 50,
                //   }}
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
                <h1 className='font-bold text-center absolute z-0 mb-60' style={{ fontSize: '30vw' }}>EDIBLES</h1>
                <img src='./edibles-hero.png' className=' w-2/3 z-10 relative opacity-95' alt='cannabis' />
            </div>
            <Banners />
        </div>
    )

    return (
        <div className='min-h-screen relative bg-[#FFDB97]  w-full flex flex-col' ref={constraintsRef}>
            <div className='flex w-full flex-row items-center p-10 h-32'>
                <img src='/logo.png' className='h-20' alt='logo' />
                <div className='flex text-center items-center justify-center h-full text-black w-full gap-20'>
                    <span>Home</span>
                    <span>Products</span>
                    <span>Cart</span>
                    <span>About</span>
                    <span>Contact</span>
                </div>
                <div className='flex text-black gap-4 h-full'>
                    <span>Stores</span>
                    |
                    <span>Login</span>
                </div>
            </div>

            <motion.img
                src='hemp1.png'
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
                src='hemp2.png'
                alt='hemp'
                className='absolute top-20 right-20 h-72 z-50'
                drag
                dragConstraints={constraintsRef}
                // dragConstraints={{
                //     top: -50,
                //     left: -50,
                //     right: 50,
                //     bottom: 50,
                //   }}
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
                <h1 className='font-bold text-center absolute z-0 mb-96' style={{ fontSize: '20vw' }}>CANNABIS</h1>
                <img src='./cannabis-hero.png' className=' w-1/2 z-10 relative opacity-90' alt='cannabis' />
                {/* <h1 className='font-bold text-center absolute z-0 mb-60' style={{ fontSize: '30vw' }}>EDIBLES</h1>
                <img src='./edibles-hero.png' className=' w-2/3 z-10 relative opacity-95' alt='cannabis' /> */}
            </div>
            <Banners />
        </div>
    )
}


export default Hero


// import React, { useState, useEffect } from 'react';

// function Hero() {
//     // Define your content configurations
//     const contents = [
//         {
//             title: 'CANNABIS',
//             imageSrc: './cannabis-hero.png',
//             imageSize: 'w-1/2',
//             opacity: 'opacity-90',
//             fontSize: '20vw',
//             marginBottom: 'mb-96',
//             bgColor: 'bg-[#FFDB97]'
//         },
//         {
//             title: 'EDIBLES',
//             imageSrc: './edibles-hero.png',
//             imageSize: 'w-2/3',
//             opacity: 'opacity-95',
//             fontSize: '30vw',
//             marginBottom: 'mb-60',
//             bgColor: 'bg-[#b3acdc]'
//         }
//         // Add more configurations as needed
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of the current content index

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCurrentIndex((currentIndex) => (currentIndex + 1) % contents.length); // Cycle through the contents
//         }, 5000); // Change content every 5000 milliseconds (5 seconds)

//         return () => clearInterval(intervalId); // Cleanup the interval on component unmount
//     }, []); // Empty dependency array ensures the effect runs only once on mount

//     const { title, imageSrc, imageSize, opacity, fontSize, marginBottom, bgColor } = contents[currentIndex]; // Destructure the current content configuration

//     return (
//         <div className={`min-h-screen ${bgColor} w-full flex flex-col`}>
//             <div className='flex w-full flex-row items-center p-10 h-32'>
//                 <img src='/logo.png' className='h-20' alt='logo' />
//                 <div className='flex text-center items-center justify-center h-full text-black w-full gap-20'>
//                     <span>Home</span>
//                     <span>Products</span>
//                     <span>Cart</span>
//                     <span>About</span>
//                     <span>Contact</span>
//                 </div>
//                 <div className='flex text-black gap-4 h-full'>
//                     <span>Stores</span>
//                     |
//                     <span>Login</span>
//                 </div>
//             </div>
//             <div className='flex-grow flex flex-col justify-center items-center relative overflow-hidden'>
//                 <h1 className={`font-bold text-center absolute z-0 ${marginBottom}`} style={{ fontSize }}>{title}</h1>
//                 <img src={imageSrc} className={`${imageSize} z-10 relative ${opacity}`} alt={title} />
//             </div>
//         </div>
//     );
// }

// export default Hero;