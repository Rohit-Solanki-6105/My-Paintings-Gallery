"use client"
import React from 'react'
import { DotBackground } from './ui/DotBackground'
import MagicButton from './ui/MagicButton';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxScroll } from './ui/ParallaxScroll';

const paintings_provider = () => {
    let paintings = [];
    for (let i = 1; i <= 11; i++) {
      paintings.push(`${i}.jpg`);
    }
    return paintings;
};
  
// const images = paintings_provider();

const Hero = () => {
  return (
    <header>
        <main className='relative h-[100vh]' 
        style={{
            backgroundImage: "url(bg1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // backgroundAttachment: "fixed",
            // backgroundImage: "linear-gradient(45deg, rgba(212, 229, 239, 0.9), rgba(152, 160, 170, 0.9))",
        }}>
            
        <section className='flex flex-col md:flex-row justify-center items-center h-[100vh] w-full'>
            <div className="partition">
                <article className='main-article glass-1 text-black'>
                    <h1 className='header'>
                        Hi, I&apos;m<br /> <strong>Rohit Solanki</strong>
                    </h1>
                    <h2 className='text-[20px]'>
                        Artist, Painter, Designer
                    </h2>
                </article>
            </div>
            {/* <div className="partition">
                <article>
                    <div className="image_slider">
                            <ParallaxScroll images={paintings_provider()} />
                    </div>
                </article>
            </div> */}

        </section>

        </main> 
    </header>
  )
}



export default Hero

