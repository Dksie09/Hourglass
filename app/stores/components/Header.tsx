import { Croissant, MenuIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';


function Header() {
    return (
        <div className='flex flex-wrap w-full items-center justify-between bg-[#FFDB97]'>
            <img src='https://altrdcannabis.com/wp-content/uploads/2021/11/Asset-1.svg'
                className='h-12 sm:h-16 md:h-20 pb-1 sm:pb-2 md:pb-5'
                alt='logo' />
            <MobileHeader />
            <DesktopHeader />
        </div>
    );
}

export default Header;

function MobileHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='md:hidden bg-[#FFDB97]'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-black ">
                {isMenuOpen ? <Croissant className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
            <div className={`absolute top-0 right-5 border border-black bg-[#FFDB97] my-20 w-1/2 rounded-2xl ${isMenuOpen ? 'block' : 'hidden'} z-50`}>
                <div className="flex flex-col items-center">
                    <Link href="/" className='hover:text-black cursor-pointer py-4 border-b border-black w-full text-center'>
                        Home
                    </Link>
                    <Link href="/products" className='hover:text-black cursor-pointer py-4 border-b border-black w-full text-center'>
                        Products
                    </Link>
                    <Link href="/stores" className='hover:text-black cursor-pointer py-4 border-b border-black w-full text-center'>
                        Stores
                    </Link>
                    <Link href="/about" className='hover:text-black cursor-pointer py-4 border-b border-black w-full text-center'>
                        About
                    </Link>
                    <Link href="/contact" className='hover:text-black cursor-pointer py-4  w-full text-center'>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}

function DesktopHeader() {
    return (
        <div className='hidden md:flex text-black items-center justify-center flex-1 gap-16'>
            <Link href="/" className='hover:text-black cursor-pointer'>
                Home
            </Link>
            <Link href="/products" className='hover:text-black cursor-pointer'>
                Products
            </Link>
            <Link href="/stores" className='hover:text-black cursor-pointer'>
                Stores
            </Link>
            <Link href="/about" className='hover:text-black cursor-pointer'>
                About
            </Link>
            <Link href="/contact" className='hover:text-black cursor-pointer'>
                Contact
            </Link>
            <div className='absolute top-10 flex gap-4 right-10'>
                <span className='cursor-pointer'>Cart</span>
                |
                <span>Login</span>
            </div>
        </div>
    );
}
