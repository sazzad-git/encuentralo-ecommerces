"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import victor2 from "@/public/hero/Vector2.svg";
import { Nunito } from "next/font/google";
import Mask from "@/public/hero/Mask.svg";
import car from "@/public/hero/car.svg";
import img1 from "@/public/hero/img1.png";
import img2 from "@/public/hero/img2.png";
import img3 from "@/public/hero/img3.png";
import hero1 from "../../public/hero/hero1.jpg";
import hero2 from "../../public/hero/hero2.jpg";
import hero3 from "../../public/hero/hero3.jpg";
import dotted from "@/public/icon/doted.svg";
import HeroIcons from "../common/HeroIcons";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Mejores() {
  const [activeFirstIndex, setActiveFirstIndex] = useState(0);

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

      title: "Impulsonaturaltienda",
      title2: "Proteinas, Vitaminas, Minerales",
      shopLogo: img2,
    },
    {
      id: 3,
      image: hero1,
      victor: victor2,
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

  return (
    <div className="py-2 lg:mb-[70px] md:mb-[30px] bg-[url('/hero/Hero.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-center pb-2 lg:mb-[34px] md:pb-4 lg:pb-0">
        <h2 className="font-bridone text-[14px] md:text-[18px] lg:mt-[10px] lg:text-[40px] text-white">
          Mejores Opciones
        </h2>
      </div>

      {/* Swiper Slider */}
      <div className="w-[96%] md:w-[90%] lg:w-[90%] lg:max-w-[1160px] mx-auto ">
        <Swiper
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={false}
          slidesPerGroup={3}
          onSlideChange={(swiper) => setActiveFirstIndex(swiper.realIndex)}
          // onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Track active slide
          // onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)} // Initialize active slide
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {data.map((card, index) => (
            <SwiperSlide key={card.id}>
              <div
                className={` border  rounded-[4px] bg-white overflow-hidden ${
                  index === activeFirstIndex + 1
                    ? "lg:h-[23em]   lg:transform lg:translate-y-[-20px]" // Larger size for active card
                    : "lg:h-[21em]  " // Default size for other cards
                } max-h-[45%]  w-[99.5%] lg:mt-5`}
              >
                {/* className="w-full h-[166px] lg:h-[230px] lg:h-[281px]" */}
                <div
                  className={`${
                    index === activeFirstIndex + 1
                      ? "lg:h-[292px] lg:w-[389px]" // Larger size for active card
                      : "lg:h-[253px] lg:w-[388px]" // Default size for other cards
                  } w-full h-[166px]`}
                >
                  <Image
                    className="w-full h-full object-cover"
                    src={card.image}
                    alt="Slider Cover"
                  />
                </div>
                <div className="flex justify-between px-2 lg:px-4">
                  <div className="flex items-center justify-center h-[10vh]   gap-1 md:gap-2 lg:gap-3">
                    <div className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[52px] lg:h-[52px] rounded-full">
                      <Image
                        className="aspect-square"
                        src={card.shopLogo}
                        alt="Shop Logo"
                      />
                    </div>
                    <div>
                      <h4 className="text-[10px] text-[#222222] font-[350] font-bridone md:text-[13px] lg:text-[18px] md:w-[100px] lg:w-[150px]">
                        {card.title}{" "}
                        {card.victor && (
                          <Image
                            className="inline"
                            src={card.victor}
                            alt="Vector"
                          />
                        )}
                      </h4>
                      <p
                        className={`${nunito.variable} font-sans capitalize lg:mt-2 text-[8px] md:text-[10px] lg:text-[13px]`}
                      >
                        {card.title2}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <HeroIcons />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
