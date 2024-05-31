import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { IoMail } from 'react-icons/io5';

const quotes = [
    {
        quote: "To practice any art, no matter how well or badly, is a way to make your soul grow. So do it",
        name: "Georgia O'Keeffe",
        title: "Soul of Artist"
    },
    {
        quote: "An Art is not what artist makes, it's diary of Artist about what he really is",
        name: "Rohit Solanki",
        title: "Inside of Artist"
    },
    {
        quote: "Every child is an artist. The problem is how to remain an artist once we grow up",
        name: "Pablo Picasso",
        title: "Grow with Art"
    }
];

const Footer = () => {
  return (
    <footer className='min-h-[50vh]' style={{
        backgroundImage: "url(bg1.jpg)",
    }}>
        <h1 className='header'>
            <InfiniteMovingCards className='bg-transparent' items={quotes} />
        </h1>
        <div className='flex md:flex-row flex-col items-center justify-center md:justify-around content-around text-[20px] text-trans_black m-2'>
            <div>
                <h2>&copy; Rohit Solanki</h2>
            </div>
            <div>
                <h2>
                    <a href='mailto:solanki.rohit6105@gmail.com' className='flex flex-row justify-center items-center text-center' target='_blank'>
                        <IoMail /> solanki.rohit6105@gmail.com
                    </a>
                </h2>
            </div>
        </div>
    </footer>
  )
}

export default Footer
