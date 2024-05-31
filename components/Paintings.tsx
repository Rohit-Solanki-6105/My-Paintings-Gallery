import { describe } from 'node:test';
import React, { useState } from 'react'
import PaintingCard from './ui/PaintingCard';
import PaintingPopUp from './ui/PaintingPopUp';

function paintings_provider(){
  let paintings = [];
  for(let i = 1; i <= 11; i++){
      paintings.push(`${i}.jpg`);
  }
  return paintings;
}

const paintings = [
  {
    img: "1.jpg",
    title: "Moon Princess",
    description: "Moon Proncess looking at her destiny."
  },
  {
    img: "2.jpg",
    title: "Purple-Blue fish",
    description: "Simple pencil color art of fish"
  },
  {
    img: "3.jpg",
    title: "Assasin's Creed",
    description: "One of my favourite games character."
  },
  {
    img: "4.jpg",
    title: "The Dream",
    description: "Flying in the side-aligned world."
  },
  {
    img: "5.jpg",
    title: "Killer Mons - 1",
    description: "Killing a monster with automatic scaled sword."
  },
  {
    img: "6.jpg",
    title: "Killer Mons - 2",
    description: "Killing monster in sea."
  },
  {
    img: "7.jpg",
    title: "Compete - 1",
    description: "Test Painting for competetion."
  },
  {
    img: "8.jpg",
    title: "Compete - 2",
    description: "Test Painting for competetion."
  },
  {
    img: "9.jpg",
    title: "The Hero",
    description: "The Man fighting dark world & saving."
  },
  {
    img: "10.jpg",
    title: "Venom + Carnage",
    description: "Painting of Venom and Carnage."
  },
  {
    img: "11.jpg",
    title: "Rengoku in Rain",
    description: "One of my favourite scenes of Rengoku."
  },
  
];

const Paintings = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openDialog = (image: string) => {
    setSelectedImage(image);
  };

  const closeDialog = () => {
    setSelectedImage(null);
  };
  // const pop_image = (image = "") => {
  //   const img = document.createElement('img');
  //   img.src = image;
  //   img.id = "painting_pop_image";
  //   document.getElementById("painting_dialog")?.appendChild(img);
  // }

  // const close_pop_image = () => {
  //   // document.getElementById("painting_dialog")?.removeChild((document.getElementById("painting_pop_image")?));
  // }
  // const [selectedImage, setSelectedImage] = useState('');

  // const openDialog = (image = '') => {
  //   setSelectedImage(image);
  // };

  // const closeDialog = () => {
  //   setSelectedImage('');
  // };
  return (
    <section id='paintings' style={{
      backgroundImage: "url(bg1.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      // backgroundImage: "linear-gradient(45deg, rgba(212, 229, 239, 0.9), rgba(152, 160, 170, 0.9))",
  }}>
        <div className='painting_grid min-h-[100vh] columns-2 md:columns-3 lg:columns-5 2xl:columns-6 gap-4'>
          {/* grid 2xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-col-2 grid-cols-1 p-2 gap-5 */}
          {paintings.map((painting) => (
            <>
            <div className='inline-block' onClick={()=>{
              // pop_image(painting.img);
                openDialog(painting.img);
            }}>
              <PaintingCard title={painting.title} image={painting.img} description={painting.description}></PaintingCard>
            </div>

            </>
          ))}
          {/* <dialog id='painting_dialog' open className='fixed top-0 left-0'> */}
            {/* <img id='pop_image' src="" alt="" /> */}
          {/* </dialog> */}
          {/* <PaintingPopUp>

          </PaintingPopUp> */}
        </div>
        <PaintingPopUp image={selectedImage} onClose={closeDialog} />
    </section>
  )
}

export default Paintings
