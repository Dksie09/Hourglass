"use client";
import React, { useEffect } from 'react';

function Page() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = '/';
        }, 1000);

        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);

    return (
        <div className='flex min-h-screen w-full items-center justify-center'>
            {/* Display your GIF */}
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWJydHUzc281N25mYzR6b2N5YXM5M2htM3ltaTgwcTZzOHNzaTQ5cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8L0Pky6C83SzkzU55a/giphy.gif" alt="Success Animation" className=' scale-50' />
        </div>
    );
}

export default Page;
