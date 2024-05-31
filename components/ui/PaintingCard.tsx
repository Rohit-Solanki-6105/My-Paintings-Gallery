"use client";
// import { Dialog } from '@radix-ui/react-dialog';
import React, { useState } from 'react';
// import { Cross2Icon } from '@radix-ui/react-icons';
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog"
  
// import PaintingPopUp from './PaintingPopUp';


const PaintingCard = ({
    className,
    title,
    description,
    image,
}:{
    className?: String,
    title: string,
    description?: String,
    image: string,
}) => {
  return (
    <div className='sm:w-full w-[100%/5] rounded-2xl painting-card glass-2 min-w-fit p-2 flex flex-col columns-4 m-2'>
        <div className="painting-title text-xl text-gray-600">
            <h1 className='text-2xl'>{title}</h1>
        </div>
        <div className="painting-decription text-gray-400">
            <p className='text-sm'>{description}</p>
        </div>
        <div className="painting-image m-1 rounded-2xl">
            <img src={image} 
            alt={title} 
            className='w-full h-full object-cover rounded-2xl'
            // onClick={() => {
            //     // <PaintingPopUp paintingSrc={image} />
            //     window.open(image, "_blank");
            // }} 
            />

        </div>
    </div>
  )
}


export default PaintingCard
