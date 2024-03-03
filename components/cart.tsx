"use client";
import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import axios from "axios";

interface Cart {
    name: string;
    bgColor: string;
    mainImage: string;
    quantity: number;
    price: number;
    priceId: string;
}

interface CartComponentProps {
    groupedCart: Cart[];
}

function CartComponent({ groupedCart }: CartComponentProps) {
    const [successURL, setSuccessURL] = useState('');
    const [failureURL, setFailureURL] = useState('');

    useEffect(() => {
        // This code runs only on the client side
        setSuccessURL(window.location.origin + "/success");
        setFailureURL(window.location.origin + "/error");
    }, []);

    // Function to handle checkout
    const handleCheckout = async () => {
        try {
            const lineItems = groupedCart.map(item => ({
                priceId: item.priceId,
                quantity: item.quantity
            }));

            const response = await axios.post('/api/payment', {
                products: lineItems
            });

            window.location.href = response.data;
        } catch (error) {
            console.error('Checkout failed:', error);
        }
    };
    return (
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
                                    <span className="text-xl font-bold">${item.price / 100}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    {groupedCart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        // <Link href="/checkout" passHref>
                        <button className="mt-4 w-full bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded"
                            onClick={handleCheckout}>
                            Checkout
                        </button>
                        // </Link>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default CartComponent