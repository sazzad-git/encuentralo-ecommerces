"use client";
import Image from "next/image";
import shopLogo from "@/public/images/shoplogo.png";
import { MdOutlineHome, MdOutlineRecycling } from "react-icons/md";
import { LuTruck } from "react-icons/lu";
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
import Aos from "aos";
import "aos/dist/aos.css";
import Mask from "@/public/hero/Mask.svg";
import car from "@/public/hero/car.svg";
import img1 from "@/public/hero/img1.png";
import img2 from "@/public/hero/img2.png";
import img3 from "@/public/hero/img3.png";
import hero1 from "../../public/hero/hero1.jpg";
import hero2 from "../../public/hero/hero2.jpg";
import hero3 from "../../public/hero/hero3.jpg";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Mejores() {
  const data = [
    {
      id: 1,
      image: hero2,
      title: "Alba-Sofia-en-varas",
      title2: "Aros, Anillos, Collares",
      shopLogo: img1,
    },
    {
      id: 2,
      image: hero3,
      victor: victor2,
      title: "Impulsonaturaltienda",
      title2: "Proteinas, Vitaminas, Minerales",
      shopLogo: img2,
    },
    {
      id: 3,
      image: hero1,
      title: "5ave.nue",
      title2: "Camisetas, Sudaderas, Pantalones",
      shopLogo: img3,
    },
    {
      id: 4,
      image: hero3,
      title: "Alba-Sofia-en-varas",
      title2: "Aros, Anillos, Collares",
      shopLogo: img1,
    },
    {
      id: 5,
      image: hero2,
      title: "Impulsonaturaltienda",
      title2: "Proteinas, Vitaminas, Minerales",
      shopLogo: img2,
    },
    {
      id: 6,
      image: hero1,
      title: "5ave.nue",
      title2: "Camisetas, Sudaderas, Pantalones",
      shopLogo: img3,
    },
  ];

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
    // use aos animation on scroll
    Aos.init({ duration: 2000 });

    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div
      // data-aos="fade-up-right"
      className=" py-2 lg:mb-[70px] md:mb-[30px] bg-[url('/hero/Hero.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* 
      <div
      className="relative h-[70vh] bg-cover bg-center mb-[207px]"
      style={{ backgroundImage: "url('/hero/Hero.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center mt-[75px] mb-[75px]">
      */}
      <div className="flex items-center justify-center pb-2 lg:mb-[34px] md:pb-4 lg:pb-6">
        <h2
          className={` font-bridone text-[14px] md:text-[18px] lg:text-[40px] text-[#222222]`}
        >
          Mejores Opciones
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
          gap: "30px",
          loop: true,
        }}
        className="w-full mb-[60px] md:px-[100px]"
        setApi={setApi}
      >
        <CarouselContent>
          {data.map((card) => (
            <CarouselItem
              key={card.id}
              className="another-second md:pl-9 basis-1/2 sm:basis-1/3"
            >
              <div className="item border rounded-[8px] bg-white overflow-hidden custom-shadow mb-3">
                <div className="w-full h-[170px] md:h-[230px] lg:h-[281px] relative">
                  {/* Main Image */}
                  <Image
                    className="w-full h-full object-cover"
                    src={card.image} // Display the selected image for each card
                    alt="Slider Cover"
                  />
                </div>

                {/* Other Content */}
                <div className="flex justify-between p-0 md:p-2 lg:p-4 relative min-h-[45px] md:min-h-[70px] lg:min-h-[100px]">
                  <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                    <div className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[52px] lg:h-[52px] rounded-full">
                      <Image
                        className="aspect-square"
                        src={shopLogo}
                        alt="Shop Logo"
                      />
                    </div>
                    <div className="leading-0 lg:leading-[125%]">
                      <h4 className="text-[6px] text-[#222222] font-[350] font-bridone md:text-[13px] lg:text-[20px]">
                        {card.title}{" "}
                        {card.victor && (
                          <Image
                            className="inline"
                            src={card?.victor}
                            alt="Vector"
                          />
                        )}
                      </h4>
                      <p
                        className={`${nunito.variable} font-sans capitalize lg:mt-2 text-[4px] md:text-[10px] lg:text-[13px]`}
                      >
                        {card.title2}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-2 pt-[5px] right-2 flex items-center justify-end gap-1 lg:top-[38%] lg:-translate-y-1/2">
                    <div className="w-[12px] h-[13px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer">
                      <Image src={Mask} width={12} height={13} alt="Mask" />
                      {/* <MdOutlineHome className="text-[10px] md:text-[13px] lg:text-[16px] text-[#BF8937]" /> */}
                    </div>
                    <div className="w-[12px] h-[13px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer">
                      <Image src={car} width={12} height={13} alt="Car" />
                      {/* <LuTruck className="text-[10px] md:text-[13px] lg:text-[16px] text-[#BF8937]" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
