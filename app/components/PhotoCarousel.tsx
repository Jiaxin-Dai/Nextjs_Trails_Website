"use client"
import React, { useState } from 'react';

interface PhotoCarouselProps {
  images: string[];
}

const PhotoCarousel = ({ images } : PhotoCarouselProps ) => {

  // console.log(images);
  const nonEmptyImages = images.filter(image => image.trim() !== '');


  return (
    <div className="w-full h-full flex justify-center">
      <div className="carousel w-4/5 h-96 rounded-box">
      {nonEmptyImages.map((imageUrl, index) => (
       
        <div key={`slide${index + 1}`} id={`slide${index + 1}`} className="carousel-item relative w-full">
          <img src={imageUrl} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${index === 0 ? images.length : index}`} className="btn btn-circle">❮</a> 
            <a href={`#slide${index === images.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
          </div>
        </div>
      
      ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
