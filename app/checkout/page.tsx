
"use client";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const cardElement = elements?.getElement("card");

        try {
            if (!stripe || !cardElement) return null;
            const { data } = await axios.post("/api/create-payment-intent", {
                data: { amount: 89 },
            });
            const clientSecret = data;

            await stripe?.confirmCardPayment(clientSecret, {
                payment_method: { card: cardElement },
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <CardElement />
            <button type="submit">Submit</button>
        </form>
    );
}

function page() {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    )
}

export default page