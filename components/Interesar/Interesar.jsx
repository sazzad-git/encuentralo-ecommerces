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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Nunito } from "next/font/google";
import Aos from "aos";
import "aos/dist/aos.css";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Interesar() {
  const data = [
    { id: 1, img: img },
    { id: 2, img: imgOne },
    { id: 3, img: imgTwo },
    { id: 4, img: imgThree },
    { id: 5, img: imgFour },
    { id: 6, img: imgTwo },
  ];

  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // use aos animation on scroll
    Aos.init({ duration: 2000 });

    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    // Event listener for slide change
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div
      data-aos="fade-up-left"
      className="custom-container py-5 hidden lg:block lg:mb-[61px]"
    >
      <div className="flex items-center justify-between pb-2 md:pb-4 lg:pb-6 lg:mb-[32px]">
        <h2
          className={`font-semibold font-bridone text-[14px] md:text-[18px] lg:text-[40px] text-[#222222]`}
        >
          TE PODRIA INTERESAR
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
              className="another-style basis-1/2 lg:basis-1/4"
            >
              <div className="item border bg-white">
                <div className="h-[293px] p-2">
                  <Image
                    className="w-full h-full object-cover"
                    src={sData.img}
                    alt="Slider Cover"
                  />
                </div>

                <div className="flex justify-between p-2 relative">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] rounded-full">
                      <Image src={shopLogo} alt="Shop Logo" />
                    </div>
                    <div className="leading-0 lg:leading-[125%]">
                      <h4 className="text-[10px] md:text-[13px] lg:text-[16px]">
                        Aress.Cl
                      </h4>
                      <p className="text-[9px] md:text-[11px] lg:text-[14px] font-bold text-[#A06205]">
                        Accesorios{" "}
                        <span className="font-normal">/ Joyería</span>
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 flex items-center justify-end gap-1">
                    <div className="w-[22px] h-[24px] border border-[#F1F1F1] grid place-items-center rounded cursor-pointer">
                      <MdOutlineHome className="size-5 text-[#BF8937]" />
                    </div>
                    <div className="w-[22px] h-[24px] border border-[#F1F1F1] grid place-items-center rounded cursor-pointer">
                      <LuTruck className="size-5 text-[#BF8937]" />
                    </div>
                  </div>
                </div>
                <p
                  className={`${nunito.variable} font-sans text-[13px] p-3 capitalize`}
                >
                  impulso naturaltienda es una tienda de suplementos deportivos
                  naturales.
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
