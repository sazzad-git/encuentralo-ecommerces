"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "@/public/hero/img1.png";
import img2 from "@/public/hero/img2.png";
import img3 from "@/public/hero/img3.png";
import hero1 from "../../public/hero/hero1.jpg";
import hero2 from "../../public/hero/hero2.jpg";
import hero3 from "../../public/hero/hero3.jpg";
import GroupRight from "@/public/hero/GrpupRight.svg";
import Mask from "@/public/hero/Mask.svg";
import car from "@/public/hero/car.svg";
import GroupLeft from "@/public/hero/GroupLeft.svg";
import { MdOutlineHome, MdOutlineRecycling } from "react-icons/md";
import { LuTruck } from "react-icons/lu";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

const products = [
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

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const customNavigation = {
    ".swiper-button-prev, .swiper-button-next": {
      display: "none",
    },
  };

  return (
    <div className="h-[29vh]  md:h-[50vh] bg-cover bg-center bg-no-repeat bg-[#DFDFDF] md:bg-[url('/hero/Hero.png')] mb-5 md:mb-36">
      <div className="h-[94%] md:h-full flex flex-col items-center justify-center md:bg-black md:bg-opacity-40">
        <h1 className="text-black md:text-white text-xl md:text-5xl md:mb-3 lg:mb-5 md:text-[44px] lg:text-[64px] font-bold text-center mt-2  md:mt-1 ">
          EMPRENDIMIENTOS DESTACADOS
        </h1>
        <div
          data-aos="flip-down"
          className="w-full max-w-7xl bg-opacity-90 rounded-lg p-0 md:p-4 md:-mb-[13rem]"
        >
          {/* Desktop View */}
          <div className="hidden md:block">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".custom-swiper-button-prev",
                nextEl: ".custom-swiper-button-next",
              }}
              style={customNavigation}
              slidesPerView={3}
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              onSlideChange={handleSlideChange}
              className="md:max-w-[1111px] lg:max-w-[1161px]"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  {({ isActive, isNext, isPrev }) => (
                    <ProductCard
                      {...product}
                      isActive={isActive}
                      isFirst={isPrev}
                      isLast={isNext}
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-swiper-button-prev md:hidden lg:block absolute left-[-40px] lg:left-[50px] bottom-[150px] transform -translate-y-1/2 z-10 cursor-pointer">
              <Image src={GroupLeft} width={45} height={45} alt="Previous" />
            </div>

            <div className="custom-swiper-button-next md:hidden lg:block absolute right-[-40px] lg:right-[50px] bottom-[150px] transform -translate-y-1/2 z-10 cursor-pointer">
              <Image src={GroupRight} width={45} height={45} alt="Next" />
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden grid grid-cols-2 gap-2 mx-2">
            {products.slice(0, 2).map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                isActive={false}
                isFirst={false}
                isLast={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ image, title, title2, shopLogo }) {
  return (
    <div className="flex-shrink-0 bg-[#FAFAFA] sm:w-[185px] sm:h-[170px] md:mt-[5px] lg:mt-0 md:h-[256px] lg:h-[320px] md:w-full lg:w-full rounded-lg shadow-md m-1 pt-2 md:m-0 px-2 overflow-hidden border border-gray-300">
      <Image
        src={image}
        alt={title}
        width={360}
        height={200}
        className="w-full h-36 md:h-[194px] lg:h-56 object-cover  md:mt-0 rounded-lg"
      />
      <div className="flex justify-between p-0 md:p-2 lg:p-4 relative min-h-[45px] md:min-h-[70px] lg:min-h-[100px]">
        <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
          <div className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[52px] lg:h-[52px] rounded-full">
            <Image className="aspect-square" src={shopLogo} alt="Shop Logo" />
          </div>
          <div className="leading-0 lg:leading-[125%]">
            <h4 className="text-[10px] text-[#222222] font-[350] font-bridone md:text-[18px] ">
              {title}
            </h4>
            <p
              className={`${nunito.variable} font-sans capitalize lg:mt-2 text-[4px] md:text-[10px] lg:text-[13px]`}
            >
              {title2}
            </p>
          </div>
        </div>

        <div className="absolute top-2 pt-[5px] right-2 flex items-center justify-end gap-1 lg:top-[38%] lg:-translate-y-1/2">
          <div className="w-[12px] h-[13px] md:w-[19px] md:h-[18px]  border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer group relative">
            <Image src={Mask} className="w-full h-full" alt="Mask" />
            <span className="absolute -top-8 left-[-12px] md:left-[-4px] -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Home Info
            </span>
          </div>
          <div className="w-[12px] h-[13px] md:w-[19px] md:h-[18px]  border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer group relative">
            <Image src={car} className="w-full h-full" alt="Car" />
            <span className="absolute -top-8 left-[-22px] md:left-[-8px] -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Delivery Info
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
