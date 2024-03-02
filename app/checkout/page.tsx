"use client";
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

function page() {

    const cartItems = [
        {
            "name": "Espresso Bean Dark Chocolate",
            "bgColor": "bg-green-200",
            "mainImage": "./chocochip-brownie.png",
            "quantity": 4
        },
        {
            "name": "Adventure Trail Mix Fusion",
            "bgColor": "bg-pink-200",
            "mainImage": "./tropical-coconut.png",
            "quantity": 2
        }
    ]

    const handleCheckout = async () => {
        const stripe = await stripePromise;
        if (!stripe) {
            // Handle the case where Stripe failed to initialize (e.g., log the error or notify the user)
            console.error('Stripe has not been initialized');
            return;
        }

        try {
            const response = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items: cartItems }), // Replace cartItems with your cart items array
            });
            const session = await response.json();

            const result = await stripe.redirectToCheckout({
                sessionId: session.sessionId,
            });

            if (result.error) {
                // Inform the user if there was an error
                alert(result.error.message);
            }
        } catch (error) {
            // Handle any other errors (e.g., network error, etc.)
            console.error('Error during checkout process', error);
        }
    };



    return (
        <div>
            <h1 className="text-5xl">Stripe Checkout</h1>
            <button onClick={handleCheckout}>checkout</button>
        </div>
    );
};

export default page;