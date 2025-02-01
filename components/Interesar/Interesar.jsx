"use client";
import Image from "next/image";
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
import CardFooter from "../shared/CardFooter";

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
  const showRecyclingIcon = false;
  const showText = true;

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    // Event listener for slide change
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="custom-container py-5 lg:mb-[61px]">
      <div className="flex items-center justify-between pb-2 md:pb-4 lg:pb-6 lg:mb-[32px]">
        <h2 className="font-bridone text-[14px] md:text-[18px] lg:text-[40px] text-[#222222]">
          {title}
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
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {data.map((sData, index) => (
            <CarouselItem
              key={sData.id}
              className="another-second w-[155px] h-[260px] mt-1 lg:w-[302px] lg:h-[475px] lg:mt-3  basis-1/2 lg:basis-1/4"
            >
              {/* Wrapper for scaling and hover effects */}
              <div className="card-wrapper w-[142px] h-[246px] lg:w-[274px] mr-[7px] ml-[7px] lg:-mr-[2px] lg:ml-[4px] lg:h-[451px] ">
                <div className="item border">
                  <div className="h-[170px] md:h-[293px] p-2">
                    <Image
                      className="w-full h-full object-cover"
                      src={sData.img}
                      alt="Slider Cover"
                    />
                  </div>

                  <CardFooter
                    showRecyclingIcon={showRecyclingIcon}
                    victor={sData.victor}
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
