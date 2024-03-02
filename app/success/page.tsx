"use client";
import React, { useEffect } from 'react';

function Page() {
    useEffect(() => {
        const timer = setTimeout(() => {
            // Redirect to the homepage after 1 second
            window.location.href = '/';
        }, 1000); // 1000 milliseconds = 1 second

        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);

    return (
        <div className='flex min-h-screen w-full items-center justify-center bg-[#F5FBF5]'>
            {/* Display your GIF */}
            <img src="https://media1.tenor.com/m/BSY1qTH8g-oAAAAC/check.gif" alt="Success Animation" className=' scale-50' />
        </div>
    );
}

export default Page;
