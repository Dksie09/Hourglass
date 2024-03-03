// "use server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// const host = process.env.NEXT_PUBLIC_HOST;

// export default async function handler(req, res) {
//     const { method, body } = req;
//     if (method === "POST") {
//         try {
//             const date = new Date().toISOString();

//             const session = await stripe.checkout.sessions.create({
//                 payment_method_types: ["card"],
//                 line_items: [{
//                     price_data: {
//                         currency: 'usd',
//                         product_data: {
//                             name: 'Test Product',
//                         },
//                         unit_amount: 1000, // $10.00
//                     },
//                     quantity: 1,
//                 }],

//                 mode: "payment",
//                 cancel_url: `${host}`,
//                 success_url: `${host}/success`,
//             });

//             res.status(200).json({ sessionId: session.id });
//         } catch (err) {
//             res.status(500).json({ error: "Error checkout session" });
//         }
//     } else {
//         res.status(405).json({ error: "Method Not Allowed" });
//     }
// }

// export default function handler(req, res) {
//     const { method } = req;

//     if (method === 'GET') {
//         res.status(200).json({ message: 'Hi' });
//         return;
//     }

//     if (method === 'POST') {
//         const body = req.body;
//         res.status(200).json({ message: 'POST request received', data: body });
//     } else {
//         res.setHeader('Allow', ['GET', 'POST']);
//         res.status(405).end(`Method ${method} Not Allowed`);
//     }
// }




export const fetchData = async () => {
    // const response = await fetch("/api/page")
    // const data = await response.json()
    // console.log(data)
    // return data
    // Example request body
    const requestBody = {
        key: "value",
        // Add other necessary key-value pairs for your request
    };

    // Make a POST request to your API route
    const response = await fetch("/api/page", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
        console.error("Failed to fetch data:", response.statusText);
        return;
    }

    const data = await response.json();
    console.log(data);
    return data;

}