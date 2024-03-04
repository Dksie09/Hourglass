import Header from '@/components/Header';
import React from 'react';
Header

function Page() {
    return (
        <div className='min-h-screen bg-[#FFDB97] relative flex flex-col justify-center items-center'>
            <div className='absolute top-0 w-full flex flex-col'>
                <Header />
            </div>
            <div className='w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow'>
                <h2 className='text-2xl font-bold text-center'>Contact Us</h2>
                <form className='space-y-6'>
                    <div>
                        <label htmlFor="name" className='text-sm font-medium'>Name</label>
                        <input type="text" id="name" name="name" className='mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB6B9] focus:border-transparent' placeholder='Your Name' />
                    </div>
                    <div>
                        <label htmlFor="email" className='text-sm font-medium'>Email</label>
                        <input type="email" id="email" name="email" className='mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB6B9] focus:border-transparent' placeholder='Your Email' />
                    </div>
                    <div>
                        <label htmlFor="message" className='text-sm font-medium'>Message</label>
                        <textarea id="message" name="message" rows={4} className='mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB6B9] focus:border-transparent' placeholder='Your Message'></textarea>
                    </div>
                    <button type="submit" className='w-full p-3 bg-[#FFB6B9] text-white rounded-md hover:bg-[#FF9496]'>Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Page;
