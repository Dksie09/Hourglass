import Banners from "@/components/Banners";
import Cool from "@/components/Cool";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Quote from "@/components/Quote";
import Last from "@/components/Last";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Hero />
      <Products />
      <Quote />
      <Cool />
      <Last />
      <Footer />
    </main>

  );
}
