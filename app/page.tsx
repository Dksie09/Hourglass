"use client";
import Banners from "@/components/Banners";
import Cool from "@/components/Cool";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Quote from "@/components/Store";
import Last from "@/components/Last";
import Image from "next/image";
import { CartProvider } from "@/context/CartContext";

export default function Home() {
  return (
    <CartProvider>

      <main className="flex min-h-screen flex-col items-center justify-between relative">
        <Hero />
        <Products />
        <Quote />
        <Cool />
        <Last />
        <Footer />
      </main>
    </CartProvider>

  );
}
