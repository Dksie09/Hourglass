import Link from 'next/link'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

function Header() {
    return (
        <div className='flex w-full flex-row items-center p-10 h-32'>
            <img src='https://altrdcannabis.com/wp-content/uploads/2021/11/Asset-1.svg' className='h-20 pb-5' alt='logo' />
            <div className='flex text-center items-center justify-center h-full z-50 text-black w-full gap-20'>
                <Link href="/" className='hover:text-white cursor-pointer'>
                    Home
                </Link>
                <Link href="/products" className='hover:text-white cursor-pointer'>
                    Products
                </Link>
                <Link href="/cart" className='hover:text-white cursor-pointer'>
                    Stores
                </Link>
                <Link href="/about" className='hover:text-white cursor-pointer'>
                    About
                </Link>
                <Link href="/contact" className='hover:text-white cursor-pointer'>
                    Contact
                </Link>
            </div>
            <div className='flex text-black gap-4 h-full items-center'>
                <Sheet>
                    <SheetTrigger asChild>
                        <span className='cursor-pointer'>Cart</span>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Your Cart</SheetTitle>
                            <SheetDescription>
                                Check out your selected products here.
                            </SheetDescription>
                        </SheetHeader>
                        {/* Cart content goes here, for example, a list of products in the cart */}
                        <div className="py-4">
                            {/* Example of cart items */}
                            <p>Product 1</p>
                            <p>Product 2</p>
                            {/* Add more content as needed */}
                        </div>
                    </SheetContent>
                </Sheet>
                |
                <span>Login</span>
            </div>
        </div>
    )
}

export default Header
