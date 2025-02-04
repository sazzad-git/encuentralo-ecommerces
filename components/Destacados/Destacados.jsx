"use client";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import img from "@/public/Poleronchampionblue1.png";
import imgOne from "@/public/images/destacados_2.png";
import imgTwo from "@/public/clothing_02.png";
import c from "@/public/clothing_01.png";
import d from "@/public/clothing_02.png";
import victor2 from "@/public/hero/Vector2.svg";
import { Nunito } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardFooter from "../shared/CardFooter";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Destacados() {
  const data = [
    { id: 1, img: img, victor: victor2, thumbnails: [img, imgOne, c, d] },
    { id: 2, img: imgOne, thumbnails: [img, imgOne, c, d] },
    { id: 3, img: imgTwo, thumbnails: [img, imgOne, c, d] },
    { id: 4, img: img, thumbnails: [img, imgOne, c, d] },
    { id: 5, img: imgTwo, thumbnails: [img, imgOne, c, d] },
    { id: 6, img: imgOne, thumbnails: [img, imgOne, c, d] },
  ];

  const showRecyclingIcon = true;
  const showText = true;

  // State to store the selected image for each card
  const [selectedImages, setSelectedImages] = useState(
    data.reduce((acc, card) => {
      acc[card.id] = card.img; // Initialize with the main image of each card
      return acc;
    }, {})
  );

  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleImageClick = (cardId, image) => {
    setSelectedImages((prev) => ({
      ...prev,
      [cardId]: image, // Update the selected image for the specific card
    }));
  };

  return (
    <div className="custom-container py-2 lg:mb-[70px] md:mb-[30px]">
      {/* 
      <div
      className="relative h-[70vh] bg-cover bg-center mb-[207px]"
      style={{ backgroundImage: "url('/hero/Hero.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center mt-[75px] mb-[75px]">
      */}
      <div className="flex items-center justify-between pb-2 lg:mb-[34px] md:pb-4 lg:pb-6">
        <h2
          className={`font-bridone text-[14px] md:text-[18px] lg:text-[40px] text-[#222222]`}
        >
          DESTACADOS
        </h2>
        <div className="scroll-buttons items-center justify-end gap-5 flex">
          <button
            onClick={() => api?.scrollTo(current - 1)}
            className="grid place-items-center w-[26px] h-[26px] md:w-[46px] md:h-[46px] border border-[#A06205] rounded-full cursor-pointer active:bg-[#f4ede2]"
          >
            <i className="fa-solid fa-arrow-left-long text-[#A06205]"></i>
          </button>
          <button
            onClick={() => api?.scrollTo(current + 1)}
            className="grid place-items-center w-[26px] h-[26px] md:w-[46px] md:h-[46px] border border-[#A06205] rounded-full cursor-pointer active:bg-[#f4ede2]"
          >
            <i className="fa-solid fa-arrow-right-long text-[#A06205]"></i>
          </button>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          gap: "20px",
          loop: true,
        }}
        className="w-full basis-full"
        setApi={setApi}
      >
        <CarouselContent>
          {data.map((card) => (
            <CarouselItem
              key={card.id}
              className="another-second min-w-0 shrink-0 lg:mt-3 grow-0 basis-1/2 sm:basis-1/3"
            >
              <div className="card-wrapper lg:hover:rounded-lg lg:mr-[5px] lg:ml-[6px]">
                <div className="item border rounded-[8px] bg-white overflow-hidden custom-shadow mb-3">
                  <div className="w-full h-[170px] md:h-[230px] lg:h-[324px] relative">
                    {/* Main Image */}
                    <Image
                      className="w-full h-full object-cover"
                      src={selectedImages[card.id]} // Display the selected image for each card
                      alt="Slider Cover"
                    />

                    <div className="absolute-img-boxes absolute top-1/2 -translate-y-1/2 left-[10px] z-50 flex flex-col gap-[4px] md:gap-[6px] px-2 py-2 lg:py-3 backdrop-blur-xl backdrop-brightness-90 rounded-lg overflow-hidden">
                      {/* Small Image Thumbnails */}
                      {card.thumbnails.map((thumbnail, index) => (
                        <div
                          key={index}
                          className={`absolute-box w-[36px] h-[35px] lg:w-[60px] lg:h-[60px] overflow-hidden border-2 border-white rounded lg:rounded-lg cursor-pointer relative ${
                            thumbnail === d ? "another-box" : ""
                          }`}
                          onClick={() => handleImageClick(card.id, thumbnail)} // Set selected image for this card
                        >
                          <Image
                            className="w-full h-full object-cover transition duration-300 hover:blur-sm"
                            src={thumbnail}
                            alt={`Clothing ${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Other Content */}
                  <CardFooter
                    showRecyclingIcon={showRecyclingIcon}
                    victor={card.victor}
                    showText={showText}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
