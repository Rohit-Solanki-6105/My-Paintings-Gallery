"use client"
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Paintings from "@/components/Paintings";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Main } from "next/document";
import { Suspense } from "react";
import { IoHome, IoPencilOutline } from "react-icons/io5";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <Suspense fallback={<main className="h-[100vh]">
      <div className="flex flex-col justify-center items-center h-full">
        Loading...
      </div>
    </main>}>
      <main className="overflow-clip">
        <FloatingNav navItems={[
          { name: "Home", link: "/" , icon:<IoHome />},
          { name: "Paintings", link: "#paintings", icon: <IoPencilOutline />}
        ]} />
        {/* <ParallaxProvider> */}
          <Hero />
          <Paintings />
          <Footer />
        {/* </ParallaxProvider> */}
      </main>
    </Suspense>
  );
}
