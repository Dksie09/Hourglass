"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { account } from "@/app/appwrite";
import axios from "axios";
import CartComponent from "@/components/cart"
import { Cart } from '@/app/type';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"



interface HeaderProps {
    cart: Cart[];
}

import { Croissant, MenuIcon } from 'lucide-react';

const Header: React.FC<HeaderProps> = ({ cart }) => {

    return (
        <div className='flex z-50 flex-wrap w-full items-center justify-between p-3 sm:p-4  h-auto md:h-32'>
            <img src='https://altrdcannabis.com/wp-content/uploads/2021/11/Asset-1.svg'
                className='h-12 ml-5 sm:h-16 md:h-20 pb-1 sm:pb-2 md:pb-5'
                alt='logo' />
            <MobileHeader cart={cart} />
            <DesktopHeader cart={cart} />
        </div>
    );
}

export default Header;

const MobileHeader: React.FC<HeaderProps> = ({ cart }) => {

    const [successURL, setSuccessURL] = useState('');
    const [failureURL, setFailureURL] = useState('');

    useEffect(() => {
        // This code runs only on the client side
        setSuccessURL(window.location.origin + "/success");
        setFailureURL(window.location.origin + "/error");
    }, []);

    const loginUser = async () => {
        console.log("loginUser");
        await account.createOAuth2Session('google', successURL, failureURL);
    }

    const groupedCart = cart.reduce((acc, item) => {
        const found = acc.find((i) => i.name === item.name);
        if (found) {
            found.quantity += item.quantity;
        } else {
            acc.push({ ...item });
        }
        return acc;
    }, [] as Cart[]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='md:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-black bg-white">
                {isMenuOpen ? <Croissant className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
            <div className={`absolute top-0 right-5 border border-black  bg-white my-20 w-1/2 rounded-2xl ${isMenuOpen ? 'block' : 'hidden'} z-50`}>
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
                    {/* <Link href="/about" className='hover:text-black cursor-pointer py-4 border-b border-black w-full text-center'>
                        About
                    </Link> */}
                    <Link href="/contact" className='hover:text-black cursor-pointer py-4 border-b border-black  w-full text-center'>
                        Contact
                    </Link>
                    <div className='hover:text-black cursor-pointer py-4 border-b border-black w-full text-center'>
                        <CartComponent groupedCart={groupedCart} />
                    </div>
                    <span className='hover:text-black cursor-pointer py-4 border-b border-black w-full text-center'>
                        <button onClick={loginUser} className='cursor-pointer'>
                            Login
                        </button>
                    </span>
                </div>

            </div>
        </div>
    );
}

const DesktopHeader: React.FC<HeaderProps> = ({ cart }) => {

    const [successURL, setSuccessURL] = useState('');
    const [failureURL, setFailureURL] = useState('');

    useEffect(() => {
        // This code runs only on the client side
        setSuccessURL(window.location.origin + "/success");
        setFailureURL(window.location.origin + "/error");
    }, []);

    const loginUser = async () => {
        console.log("loginUser");
        await account.createOAuth2Session('google', successURL, failureURL);
    }

    const groupedCart = cart.reduce((acc, item) => {
        const found = acc.find((i) => i.name === item.name);
        if (found) {
            found.quantity += item.quantity;
        } else {
            acc.push({ ...item });
        }
        return acc;
    }, [] as Cart[]);

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
            {/* <Link href="/about" className='hover:text-black cursor-pointer'>
                About
            </Link> */}
            <Link href="/contact" className='hover:text-black cursor-pointer'>
                Contact
            </Link>
            <div className='absolute top-10 flex gap-4 right-10'>
                <div className='flex text-black gap-4 pt-2 pr-10 h-full items-center'>
                    <CartComponent groupedCart={groupedCart} />
                    |
                    <span>
                        <button onClick={loginUser} className='cursor-pointer'>
                            Login
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

