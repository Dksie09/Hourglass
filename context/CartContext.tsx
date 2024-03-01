// context/CartContext.tsx
import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

interface Cart {
    name: string;
    bgColor: string;
    mainImage: string;
    description: string;
    images: string[];
    quantity: number;
}

interface CartContextType {
    cart: Cart[];
    setCart: (cart: Cart[]) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [cart, setCart] = useState<Cart[]>([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
