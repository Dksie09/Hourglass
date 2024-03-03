import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Updated environment variable name
        const data = await request.json();
        const lineItems = data.products.map(product => ({
            price: product.priceId,
            quantity: product.quantity
        }));

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/error'
        });

        return NextResponse.json(session.url);
    } catch (error) {
        console.error('Error creating Stripe session:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
