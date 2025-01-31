"use client";
import Image from "next/image";
import shopLogo from "@/public/images/shoplogo.png";
import { MdOutlineHome } from "react-icons/md";
import { LuTruck } from "react-icons/lu";
import React, { useState, useEffect } from "react";
import img from "@/public/Poleronchampionblue1.png";
import imgOne from "@/public/clothing_01.png";
import imgTwo from "@/public/clothing_02.png";
import imgThree from "@/public/clothing_4.png";
import imgFour from "@/public/images/destacados_2.png";
import victor2 from "@/public/hero/Vector2.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Interesar({ title }) {
  const data = [
    { id: 1, img: img },
    { id: 2, img: imgOne, victor: victor2 },
    { id: 3, img: imgTwo },
    { id: 4, img: imgThree },
    { id: 5, img: imgFour },
    { id: 6, img: imgTwo },
  ];

  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    // Event listener for slide change
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="custom-container py-5  lg:mb-[61px]">
      <div className="flex items-center justify-between pb-2 md:pb-4 lg:pb-6 lg:mb-[32px]">
        <h2
          className={` font-bridone text-[14px] md:text-[18px] lg:text-[40px] text-[#222222]`}
        >
          {title}
        </h2>
        <div className="scroll-buttons items-center justify-end gap-5 hidden lg:flex">
          <button
            onClick={() => api?.scrollTo(current - 1)}
            className="grid place-items-center w-[46px] h-[46px] border border-[#A06205] rounded-full cursor-pointer active:bg-[#f4ede2]"
          >
            <i className="fa-solid fa-arrow-left-long text-[#A06205]"></i>
          </button>
          <button
            onClick={() => api?.scrollTo(current + 1)}
            className="grid place-items-center w-[46px] h-[46px] border border-[#A06205] rounded-full cursor-pointer active:bg-[#f4ede2]"
          >
            <i className="fa-solid fa-arrow-right-long text-[#A06205]"></i>
          </button>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          gap: "30px",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {data.map((sData, index) => (
            <CarouselItem
              key={sData.id}
              className="another-second basis-1/2 lg:basis-1/4"
            >
              <div className="item border bg-white">
                <div className="h-[170px] md:h-[293px] p-2">
                  <Image
                    className="w-full h-full object-cover"
                    src={sData.img}
                    alt="Slider Cover"
                  />
                </div>

                {/* Other Content */}
                <div className="flex justify-between p-2 lg:p-4 relative">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[52px] lg:h-[52px] rounded-full">
                      <Image src={shopLogo} alt="Shop Logo" />
                    </div>
                    <div className="leading-0 lg:leading-[125%]">
                      <h4 className="text-[10px] text-[#222222] font-[350] font-bridone md:text-[18px] lg:text-[18px]">
                        Aress.Cl
                        {sData.victor && (
                          <Image
                            className="inline"
                            src={sData?.victor}
                            alt="Vector"
                          />
                        )}
                      </h4>
                      <p
                        className={`${nunito.variable} lg:mt-1 text-[9px] md:text-[11px] lg:text-[16px] font-bold text-[#A06205]`}
                      >
                        Accesorios
                        <span className={`${nunito.variable} font-normal`}>
                          / Joyería
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 flex items-center justify-end gap-1 lg:top-1/3 lg:-translate-y-1/2">
                    <div className="w-[12px] h-[13px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer group relative">
                      <MdOutlineHome className="size-3 md:size-4 lg:size-5 text-[#BF8937]" />
                      <span className="absolute -top-8 left-[-10px] md:left-[4px] -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                        Home Info
                      </span>
                    </div>
                    <div className="group relative w-[12px] h-[13px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer">
                      <LuTruck className="size-3 md:size-4 lg:size-5 text-[#BF8937]" />

                      {/* Tooltip */}
                      <span className="absolute -top-8 left-[-22px] md:left-[-4px] -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                        Delivery Info
                      </span>
                    </div>
                  </div>
                </div>

                <p
                  className={`${nunito.variable} font-sans text-[8px] md:text-[12px] lg:text-[16px] p-2 pt-0 lg:p-3 capitalize`}
                >
                  aress.cl es una tienda de articulos de ropa chabacana.
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
