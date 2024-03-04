"use client";
import Footer from '@/components/Footer';
import Header from './components/Header';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { toast } from "sonner";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CartProvider } from '@/context/CartContext';
import { account, databases } from '../appwrite';
import { ID } from "appwrite";

const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID || "";
const collectionId = process.env.NEXT_PUBLIC_COLLECTION_ID || ""
interface Product {
    name: string;
    bgColor: string;
    mainImage: string;
    description: string;
    images: string[];
    price: number;
    priceId: string;
}
interface Cart {
    name: string;
    bgColor: string;
    mainImage: string;
    quantity: number;
    price: number;
    priceId: string;
}

const products: Product[] = [
    {
        name: 'Island Escape Coconut Crunch',
        bgColor: 'bg-red-200',
        mainImage: './ie.png',
        description: "Transport yourself to paradise with our Island Escape Coconut Crunch granola bar. Bursting with tropical coconut flavor and crunchy granola clusters, this irresistible treat is like a vacation in every bite. Close your eyes and let the sweet aroma of coconut whisk you away to sun-kissed beaches and swaying palm trees. Whether you're on the go or taking a moment to unwind, this bar is your ticket to a blissful escape. So grab a bar, take a bite, and let your taste buds journey to paradise.",
        images: ['./coconut.png', './walnut.png'],
        price: 6000,
        priceId: "price_1OqG0bSF4qr9mxSUJCadeNe7"
    },
    {
        name: 'Snowy Summit Cranberry Crunch',
        bgColor: 'bg-blue-200',
        mainImage: './ss.png',
        description: "Climb to new culinary heights with our Snowy Summit Cranberry Crunch granola bar. Featuring luscious white chocolate, tart cranberries, and wholesome granola, this delightful treat is a symphony of sweet and tangy flavors that dance across your palate. Whether you're scaling snowy peaks or simply savoring a moment of bliss, this bar is the perfect companion for your journey. With each bite, experience the refreshing crunch of snowy summits and the invigorating burst of cranberry goodness.",
        images: ['./walnut.png', './cranberry.png'],
        price: 6000,
        priceId: "price_1OqG0bSF4qr9mxSUJCadeNe7"
    },
    {
        name: 'Peak Power Peanut Crunch',
        bgColor: 'bg-purple-200',
        mainImage: './pppc.png',
        description: 'Indulge in the irresistible allure of Peak Power Peanut Crunch, where the classic combination of creamy peanut butter and crunchy peanuts takes center stage. Packed with protein and bursting with flavor, this energizing granola bar is your go-to snack for fueling adventures and conquering challenges. With every bite, experience the perfect balance of nutty goodness and satisfying crunch that leaves you ready to tackle any peak you set your sights on.',
        images: ['./peanut.png', './cocoa.png'],
        price: 6000,
        priceId: "price_1OqG0bSF4qr9mxSUJCadeNe7"
    },
    {
        name: 'Espresso Bean Dark Chocolate',
        bgColor: 'bg-green-200',
        mainImage: './jjdd.png',
        description: 'Prepare to be captivated by the bold allure of Java Jolt Dark Delight. Infused with the rich essence of espresso beans and enrobed in decadent dark chocolate, this granola bar is a heavenly indulgence for coffee lovers and chocolate enthusiasts alike. With each velvety bite, experience a burst of energy and a symphony of flavors that awakens your senses and leaves you craving more. Elevate your snacking experience with this irresistible fusion of dark, delightful decadence.',
        images: ['./cocoa.png', './cranberry.png'],
        price: 6000,
        priceId: "price_1OqG0bSF4qr9mxSUJCadeNe7"
    },
    {
        name: 'Adventure Trail Mix Fusion',
        bgColor: 'bg-pink-200',
        mainImage: './atmf.png',
        description: "Embark on a taste adventure like no other with our Adventure Trail Mix Fusion. This granola bar is a tantalizing blend of sweet and savory flavors, featuring a medley of wholesome nuts, dried fruits, and decadent chocolate chips. Whether you're hitting the trails or simply craving a snack that transports you to the great outdoors, this fusion of textures and tastes will satisfy your wanderlust and keep you fueled for whatever lies ahead.",
        images: ['./walnut.png', './cocoa.png'],
        price: 6000,
        priceId: "price_1OqG0bSF4qr9mxSUJCadeNe7"
    },
];


const Page: React.FC = () => {
    const { toast } = useToast();
    const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);
    const [quantity, setQuantity] = useState<number>(1);
    const [cart, setCart] = useState<Cart[]>([]);
    const [userId, setUserId] = useState<string>('defaultUserId');

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const session = await account.getSession('current');
                setUserId(session.userId);
                const response = await databases.getDocument(
                    databaseId,
                    collectionId,
                    session.userId
                );
                if (response.data.cart) {
                    setCart(JSON.parse(response.data.cart));
                }
            } catch (error) {
                console.log("Error fetching cart from database:", error);
                // alert("are you logged in bro?");
            }
        };

        fetchCart();
    }, []);

    const incrementQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);
    const decrementQuantity = () => setQuantity((prevQuantity) => prevQuantity > 1 ? prevQuantity - 1 : 1);

    const handleViewProduct = (product: Product) => {
        setQuantity(1);
        setSelectedProduct(product);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleAddToCart = async () => {
        const { description, images, ...restOfProduct } = selectedProduct;
        const newCartItem = { ...restOfProduct, quantity: quantity };
        const updatedCart = [...cart, newCartItem];
        setCart(updatedCart); // Update the local state with the new cart

        const cartString = JSON.stringify(updatedCart); // Convert the updated cart to a string

        try {
            // Try to update the document with the new cart
            await databases.updateDocument(
                databaseId,
                collectionId,
                userId,
                { cart: cartString }
            );
        } catch (error) {

            try {
                await databases.createDocument(
                    databaseId,
                    collectionId,
                    userId,
                    { uid: userId, cart: cartString }
                );
            } catch (creationError) {
                console.error("Error creating new cart document:", creationError);
                alert("are you logged in bro?");

            }
        }

        // Show a success message if the item was added (either updated or created)
        toast({ title: "Item Added to Cart" });
        if (userId === 'defaultUserId') {
            alert("Are you logged in bro?");
        }
        else {
            alert("Item added to cart");
        }
    };





    return (
        <div className={`min-h-screen relative ${selectedProduct.bgColor} w-full flex flex-col`}>
            <Header cart={cart} />
            <div className='w-full md:flex md:flex-row flex-col'>
                {/* Mobile View */}
                <div className='md:hidden w-full flex flex-col items-center justify-center'>
                    <div className="absolute top-0 w-full h-full flex justify-center items-center">
                        <img src="./blob2.png" alt="Blob" className="" />
                    </div>
                    <div className="z-10">
                        <img src={selectedProduct.mainImage} alt="bar" className='hover:scale-100 scale-90 transition duration-500 ease-in-out transform hover:rotate-12' />
                    </div>
                    <h1 className='text-center text-6xl pt-10 px-5 text-white shadow-outline heading-font'>
                        {selectedProduct.name}
                    </h1>
                    <span className=' text-pretty text-sm text-center text-black font-extralight block mt-6 pr-5'>{selectedProduct.description}</span>
                    <div className='flex items-center gap-8 mt-8'>
                        <span className='text-pretty text-3xl text-black font-extralight block'>Ingredients: </span>
                        <motion.div layout className='flex justify-center items-center'>
                            {selectedProduct.images.map((image, index) => (
                                <motion.img key={index} layout src={image} className='w-20 object-cover hover:scale-110 transition duration-500 ease-in-out transform hover:rotate-12' alt='Product Image' />
                            ))}
                        </motion.div>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        {/* <h1 className="text-3xl text-black font-semibold">Qty</h1> */}
                        <span className="text-2xl text-black bg-white p-4 rounded m-5">12 bags/ box</span>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <h1 className="text-2xl text-black font-semibold">Price</h1>
                        <span className="text-4xl text-black font-bold">${selectedProduct.price / 100 * quantity}</span>
                    </div>

                    <motion.div layout className='flex items-center text-8xl mt-8 z-50'>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='text-white text-3xl bg-transparent border border-white rounded-full w-8 h-8 flex justify-center items-center' onClick={decrementQuantity}>
                            -
                        </motion.button>
                        <motion.span layout className='text-white text-3xl mx-4'>
                            {quantity}
                        </motion.span>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='text-white text-3xl bg-transparent border border-white rounded-full w-8 h-8 flex justify-center items-center' onClick={incrementQuantity}>
                            +
                        </motion.button>
                    </motion.div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='my-4 bg-white z-50 text-black py-2 px-4 rounded hover:bg-black hover:text-white transition-colors duration-300'
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </motion.button>
                </div>

                {/* Laptop View */}
                <div className='md:flex-row hidden md:w-full md:flex md:items-center md:justify-center'>
                    <div className='w-1/2 flex items-center justify-center'>
                        <div className="absolute w-full h-full flex justify-center items-center">
                            <img src="./blob2.png" alt="Blob" className="z-0" />
                        </div>
                        <div className="z-10">
                            <img src={selectedProduct.mainImage} alt="bar" className='hover:scale-110 transition duration-500 ease-in-out transform hover:rotate-12' />
                        </div>
                    </div>
                    <div className='w-1/2 relative'>
                        <h1 className='text-center text-8xl pt-10 text-white shadow-outline heading-font'>
                            {selectedProduct.name}
                        </h1>
                        <span className=' text-pretty text-base text-black font-extralight block mt-6 pr-5'>{selectedProduct.description}</span>
                        <div className='flex items-center gap-8 mt-8'>
                            <span className='text-pretty text-3xl text-black font-extralight block'>Ingredients: </span>
                            <motion.div layout className='flex justify-center items-center'>
                                {selectedProduct.images.map((image, index) => (
                                    <motion.img key={index} layout src={image} className='w-20 object-cover hover:scale-110 transition duration-500 ease-in-out transform hover:rotate-12' alt='Product Image' />
                                ))}
                            </motion.div>
                        </div>
                        <div className="flex gap-4">
                            {/* <h1 className="text-3xl text-black font-semibold">Qty</h1> */}
                            <span className="text-2xl text-black bg-white p-4 rounded my-10">12 bags/ box</span>
                        </div>
                        <div className="flex gap-4">
                            {/* <span className='text-pretty text-3xl text-black font-extralight block'>Price: </span> */}
                            <span className="text-4xl text-black font-bold">${selectedProduct.price / 100 * quantity}</span>
                        </div>
                        <motion.div layout className='flex items-center text-8xl mt-8'>
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='text-white text-3xl bg-transparent border border-white rounded-full w-8 h-8 flex justify-center items-center' onClick={decrementQuantity}>
                                -
                            </motion.button>
                            <motion.span layout className='text-white text-3xl mx-4'>
                                {quantity}
                            </motion.span>
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='text-white text-3xl bg-transparent border border-white rounded-full w-8 h-8 flex justify-center items-center' onClick={incrementQuantity}>
                                +
                            </motion.button>
                        </motion.div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='my-4 bg-white z-50 text-black py-2 px-4 rounded hover:bg-black hover:text-white transition-colors duration-300'
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </motion.button>
                    </div>
                </div>
            </div>

            <div className='w-full bg-white bg-opacity-80 text-center py-8 z-50'>
                <h1 className='text-8xl font-extrabold mb-4 text-black '>More flavors!</h1>
                <div className='md:flex-row flex flex-col justify-center gap-4 mx-10'>
                    {products.map((product, index) => (
                        <motion.div key={index} layout whileHover={{ scale: 1.05 }} className={` p-10 rounded-xl ${product.bgColor} shadow-lg }`}>
                            <img src={product.mainImage} alt={product.name} className='w-full  object-cover rounded-t-xl' />
                            <div className='p-4'>
                                <h2 className='text-2xl font-semibold'>{product.name}</h2>
                            </div>
                            <motion.button whileHover={{ scale: 1.05 }} onClick={() => handleViewProduct(product)} className='w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition-colors duration-300'>
                                View Product
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

            </div>
            <Footer />
        </div>
    )
};

export default Page;