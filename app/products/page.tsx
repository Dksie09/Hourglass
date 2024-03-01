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

interface Product {
    name: string;
    bgColor: string;
    mainImage: string;
    description: string;
    images: string[];
}
interface Cart {
    name: string;
    bgColor: string;
    mainImage: string;
    description: string;
    images: string[];
    quantity: number;
}

const products: Product[] = [
    {
        name: 'Tropical Coconut',
        bgColor: 'bg-red-200',
        mainImage: './tropical-coconut.png',
        description: 'Dive into the exotic flavors of tropical coconut, blended perfectly for a refreshing snack. With each bite, you\'ll feel transported to a sun-drenched beach, surrounded by swaying palm trees. Whether you\'re craving a midday pick-me-up or a sweet treat after dinner, our Tropical Coconut bars are sure to satisfy your tropical cravings.',
        images: ['./coconut.png', './walnut.png'],
    },
    {
        name: 'Cranberry Walnut',
        bgColor: 'bg-purple-200',
        mainImage: './crandberry-walnut.png',
        description: 'Experience the perfect blend of tangy cranberries and rich walnuts in every bite. Our Cranberry Walnut bars are crafted with care to bring you a harmonious balance of flavors and textures. Whether you\'re hitting the trails or powering through a busy workday, these bars are a convenient and delicious way to fuel your adventures.',
        images: ['./walnut.png', './cranberry.png'],
    },
    {
        name: 'Peanut Butter Chocolate',
        bgColor: 'bg-blue-200',
        mainImage: './peanut-butter-choco.png',
        description: 'Indulge in the creamy texture of peanut butter combined with the rich taste of chocolate. Our Peanut Butter Chocolate bars are a match made in heaven, combining two beloved flavors into one irresistible treat. Whether you\'re a peanut butter fanatic, a chocolate lover, or just someone looking for a delicious snack, these bars are sure to hit the spot.',
        images: ['./peanut.png', './cocoa.png'],
    },
    {
        name: 'Choco Chip Brownie',
        bgColor: 'bg-green-200',
        mainImage: './chocochip-brownie.png',
        description: 'Enjoy the classic choco chip brownie, baked to perfection for a delightful treat. Our Choco Chip Brownie bars capture all the decadent flavors of a traditional brownie in a convenient, portable package. Whether you\'re indulging in a sweet craving or treating yourself to a well-deserved snack, these bars are sure to satisfy your chocolate cravings.',
        images: ['./cocoa.png', './cranberry.png'],
    },
];


const Page: React.FC = () => {
    const { toast } = useToast();
    const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);
    const [quantity, setQuantity] = useState<number>(1);
    const [cart, setCart] = useState<Cart[]>([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(storedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const incrementQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);
    const decrementQuantity = () => setQuantity((prevQuantity) => prevQuantity > 1 ? prevQuantity - 1 : 1);

    const handleViewProduct = (product: Product) => {
        setQuantity(1);
        setSelectedProduct(product);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleAddToCart = () => {
        const newCartItem = {
            ...selectedProduct,
            quantity: quantity
        };
        setCart([...cart, newCartItem]);
        console.log(cart);
        console.log(cart);
        toast({
            title: "Item Added to Cart",
        });
    };


    return (
        <div className={`min-h-screen relative ${selectedProduct.bgColor} w-full flex flex-col`}>
            <Header cart={cart} />
            <div className=' w-full flex'>
                <div className='w-1/2 flex items-center justify-center'>
                    <div className="absolute w-full h-full flex justify-center items-center">
                        <img src="./blob2.png" alt="Blob" className="z-0" />
                    </div>
                    <div className="z-10">
                        <img src={selectedProduct.mainImage} alt="bar" className='hover:scale-110 transition duration-500 ease-in-out transform hover:rotate-12' />
                    </div>
                </div>
                <div className='w-1/2 relative'>
                    <h1 className='text-center text-9xl pt-10 text-white shadow-outline heading-font'>
                        {selectedProduct.name}
                    </h1>
                    <span className=' text-pretty text-xl text-black font-extralight block mt-6'>{selectedProduct.description}</span>
                    <div className='flex items-center gap-8 mt-8'>
                        <span className='text-pretty text-3xl text-black font-extralight block'>Ingredients: </span>
                        <motion.div layout className='flex justify-center items-center'>
                            {selectedProduct.images.map((image, index) => (
                                <motion.img key={index} layout src={image} className=' w-20 object-cover hover:scale-110 transition duration-500 ease-in-out transform hover:rotate-12' alt='Product Image' />
                            ))}
                        </motion.div>
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
                        className='my-4 bg-white text-black py-2 px-4 rounded hover:bg-black hover:text-white transition-colors duration-300'
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </motion.button>


                </div>
            </div>
            <div className='w-full bg-white bg-opacity-80 text-center py-8 z-50'>
                <h1 className='text-8xl font-extrabold mb-4 text-black '>More flavors!</h1>
                <div className='flex justify-center gap-4 mx-10'>
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