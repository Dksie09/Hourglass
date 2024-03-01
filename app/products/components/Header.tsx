import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CartProvider } from '@/context/CartContext';

interface Cart {
    name: string;
    bgColor: string;
    mainImage: string;
    description: string;
    images: string[];
    quantity: number;
}


interface HeaderProps {
    cart: Cart[];
}

const Header: React.FC<HeaderProps> = ({ cart }) => {
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
        <div className='flex w-full flex-row items-center h-20 bg-white'>
            <img src='https://altrdcannabis.com/wp-content/uploads/2021/11/Asset-1.svg' className='h-20 pb-5 z-50 pl-10' alt='logo' />
            <div className='flex text-center items-center justify-center h-full z-50 text-black w-full gap-20'>
                <Link href="/" className='cursor-pointer'>
                    Home
                </Link>
                <Link href="/products" className='cursor-pointer'>
                    Products
                </Link>
                <Link href="/stores" className='cursor-pointer'>
                    Stores
                </Link>
                <Link href="/about" className='cursor-pointer'>
                    About
                </Link>
                <Link href="/contact" className='cursor-pointer'>
                    Contact
                </Link>
            </div>

            <div className='flex text-black gap-4 pt-2 pr-10 h-full items-center'>
                <Sheet>
                    <SheetTrigger asChild>
                        <span className='cursor-pointer'>Cart</span>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Your Cart</SheetTitle>
                            <SheetDescription>
                                Here are the items in your shopping cart.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="py-4 space-y-4">
                            {groupedCart.map((item, index) => (
                                <div key={index} className={`p-4 rounded-lg ${item.bgColor} shadow-md`}>
                                    <div className="flex items-center space-x-4">
                                        <img src={item.mainImage} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                                        <div>
                                            <h3 className="text-lg font-semibold">{item.name}</h3>
                                            <div className="flex items-center space-x-2 mt-2">
                                                <span className="text-sm font-medium">Quantity:</span>
                                                <span className="text-lg font-bold">{item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {groupedCart.length === 0 ? (
                                <p>Your cart is empty.</p>
                            ) : (
                                <Link href="/checkout" passHref>
                                    <button className="mt-4 w-full bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded">
                                        Checkout
                                    </button>
                                </Link>
                            )}
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
