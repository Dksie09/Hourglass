"use client";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

// Define the structure for product items
interface Product {
    name: string;
    Image: string;
}

const productItems: Product[] = [
    { name: 'Coconut', Image: './tropical-coconut.png' },
    { name: 'Cranberry', Image: './crandberry-walnut.png' },
    { name: 'Peanut Butter', Image: './peanut-butter-choco.png' },
    { name: 'Chocochip', Image: './chocochip-brownie.png' },
];

const Products: React.FC = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className='w-full p-20 text-center bg-white text-black font-black uppercase relative'>
            <motion.h1
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 }
                }}
                transition={{ duration: 0.5 }}
                className='text-8xl font-extrabold mb-4'
            >
                Products
            </motion.h1>
            <motion.span
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 }
                }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='text-2xl font-extralight'
            >
                Explore our wide range of premium products
            </motion.span>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 }
                }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='flex flex-row justify-center items-center gap-20 mt-20'
            >
                {productItems.map((item, index) => (
                    <ProductItem key={item.name} name={item.name} Image={item.Image} />
                ))}
            </motion.div>
        </div>
    );
};

export default Products;

interface ProductItemProps {
    name: string;
    Image: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ name, Image }) => {
    return (
        <Link href={{ pathname: '/products', query: { id: name } }} className='relative flex flex-col items-center gap-8'>
            <div className="absolute w-full h-full flex justify-center items-center">
                <img src="./blob2.png" alt="Blob" className="" />
            </div>
            <div className="z-10">
                <img src={Image} alt={name} className='hover:scale-110 transition duration-500 ease-in-out transform hover:rotate-12' />
            </div>
            <span className='text-2xl font-extralight'>{name}</span>
        </Link>
    );
};
