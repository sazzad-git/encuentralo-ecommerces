"use client";
import React, { useState } from "react";
import Image from "next/image";
import flag from "@/public/ceache/flag.svg";
import frame from "@/public/ceache/Frame.svg";
import vector from "@/public/ceache/Vector.svg";
import car from "@/public/ceache/car.svg";
import dollar from "@/public/ceache/Vector2.svg";
import ceache from "@/public/ceache/ceache.png";
import location from "@/public/ceache/Location.svg";
import fb from "@/public/ceache/fb.svg";
import insta from "@/public/ceache/insta.svg";
import whatsapp from "@/public/ceache/whatsapp.svg";
import tiktok from "@/public/ceache/tiktok.svg";
import { Nunito } from "next/font/google";
import Link from "next/link";
import Location from "../Location/Location";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

const Ceache = () => {
  const [showLocation, setShowLocation] = useState(false);

  return (
    <div className="md:mt-[30px] mt-2 md:mb-[30px]">
      {/* Main Background Container */}
      <div className="relative bg-cover w-[96%] h-[120px] md:w-[90%] lg:w-[90%] lg:max-w-[1160px] mx-auto md:h-[200px] lg:h-[296px] rounded-2xl md:rounded-xl bg-center bg-no-repeat bg-[url('/ceache/background.png')]">
        {/* Buttons with Text in the Top-Right Corner */}
        <div className="absolute hidden md:flex top-4 right-4 gap-4">
          {/* First Button */}
          <button className="flex items-center gap-1 bg-white rounded-full shadow-md px-2">
            <Image src={flag} alt="Flag Icon" className="w-[16px] h-[13px]" />
            <span
              className={`${nunito.variable} text-[15px] text-[#666666] font-semibold`}
            >
              Producto Local
            </span>
          </button>
          {/* Second Button */}
          <button className="flex items-center gap-1 bg-white rounded-full shadow-md px-2">
            <Image src={frame} alt="Frame Icon" className="w-[16px] h-[13px]" />
            <span
              className={`${nunito.variable} text-[15px] text-[#666666] font-semibold`}
            >
              Hechos a Mano
            </span>
          </button>
          {/* Third Button */}
          <button className="flex items-center gap-1 bg-white rounded-full shadow-md px-2">
            <Image
              src={vector}
              alt="Vector Icon"
              className="w-[16px] h-[13px]"
            />
            <span
              className={`${nunito.variable} text-[15px] text-[#666666] font-semibold`}
            >
              Personalizado
            </span>
          </button>
        </div>

        {/* Bottom Inputs with Dollar and Car Icons */}
        <div className="absolute -bottom-9 -right-1 w-[280px] md:w-[200px] lg:w-[200px] md:bottom-4 md:bg-white md:border md:border-[#A06205] md:right-4 p-2 flex flex-row-reverse md:flex-col gap-2 rounded-lg">
          {/* Dollar Icon with Input */}
          <div className="flex items-center gap-0 md:gap-2">
            <Image src={dollar} alt="Dollar Icon" className="w-5 h-3 md:h-4" />
            <input
              type="text"
              placeholder="Métodos de Pago"
              className="border bg-[#f9f6f0] border-[#A06205] placeholder:text-[#A06205] rounded-full placeholder:px-4 py-0 placeholder:md:py-[2px] placeholder:md:text-sm placeholder:py-0 placeholder:text-[10px] w-[90%]"
            />
          </div>

          {/* Car Icon with Input */}
          <div className="flex items-center gap-0 md:gap-2">
            <Image
              src={car}
              alt="Car Icon"
              className="w-5 h-3 md:h-6 mt-[5px] md:mt-[7px]"
            />
            <input
              type="text"
              placeholder="Métodos de Envío"
              className="border bg-[#f9f6f0] border-[#A06205] placeholder:text-[#A06205] rounded-full placeholder:px-4 py-0 placeholder:md:py-[2px] placeholder:md:text-sm placeholder:py-0 placeholder:text-[10px] w-[90%]"
            />
          </div>
        </div>

        {/* Ceache Icon Inside a Blue Circle Inside a White Circle */}
        <div className="absolute -bottom-[32px] md:-bottom-10 left-[10px] md:left-[38px] flex items-center md:gap-3">
          {/* White Circle */}
          <div className="relative">
            {/* White Circle as Outer Layer */}
            <div className="w-[82px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[177px] lg:h-[173px] rounded-full border bg-white flex justify-center items-center">
              {/* Blue Circle with Custom Clipping */}
              <div className="relative w-[79px] h-[77px] md:w-[145px] md:h-[145px] lg:w-[173px] lg:h-[168px]">
                {/* Blue Circle with Clipping */}
                <div
                  className="absolute inset-0 w-full h-full bg-blue-500"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 40%, 60% 60%, 50% 100%, 0 100%)", // 40% cut from bottom middle to right
                    borderRadius: "50%",
                  }}
                ></div>
                {/* White Circle Inside with Ceache Icon */}
                <div className="absolute inset-0 m-[2px] md:m-[3px] rounded-full bg-white flex justify-center items-center">
                  <Image
                    src={ceache}
                    alt="Ceache Icon"
                    className="w-[73px] h-[71px] md:w-[140px] md:h-[140px] lg:w-[165px] lg:h-[160px] rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Title and Subtitle */}
          <div className="text-white">
            <h2 className="text-[14px] md:text-[24px] lg:text-[37px] font-bridone text-[#FFFFFF] mb-[5px] md:mb-[15px]">
              _ch_accesorios J
              <div className="md:hidden inline-block ml-[6px]">
                <span className="text-xl">|</span>
                <div className=" w-[79px] h-[19px] inline-block ml-1 bg-[#aba7a3] border border-[#A06205] rounded-sm">
                  <div className="flex  h-[10px] pt-2 items-center justify-center ">
                    <div className="mr-[8px] ml-2">
                      <Image
                        src={fb}
                        alt="coffee"
                        className="w-[10px] h-[13px]"
                      />
                    </div>
                    <div className="mr-[8px]">
                      <Image
                        src={insta}
                        alt="coffee"
                        className="w-[13px] h-[13px]"
                      />
                    </div>
                    <div className="mr-[8px]">
                      <Image
                        src={whatsapp}
                        alt="coffee"
                        className="w-[13px] h-[13px]"
                      />
                    </div>
                    <div className="mr-[8px]">
                      <Image
                        src={tiktok}
                        alt="coffee"
                        className="w-[13px] h-[13px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </h2>

            <p className="text-[10px] md:text-[14px] lg:text-[17px] text-[#FFFFFF] pb-[35px] md:pb-[60px] max-w-[220px] md:max-w-[260px] lg:max-w-full text-center md:text-left">
              _ch_accesorios es una tienda de accesorios únicos y modernos.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[96%] md:w-[90%] lg:w-[90%] lg:max-w-[1160px] mx-auto">
        {/* Additional Information Below the Background Image */}
        <div className="mt-[35px] mb-[35px] md:mb-0 md:mt-[12px] flex flex-col-reverse md:flex-row items-center md:items-center md:justify-between text-[#333] md:ml-[250px] relative z-10">
          {/* Website Information */}
          <div>
            <p className="text-[10px] md:text-[14px] lg:text-[17px] hidden md:inline-block md:pr-1 text-[#666666]">
              Visítanos En
            </p>
            <Link
              href="/mejor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4F71B0] md:text-[#666666] text-[12px] md:text-[14px] lg:text-[17px] font-semibold"
            >
              www.ch_accesorios.cl
            </Link>
          </div>
          <hr className="md:hidden absolute text-center border-[1px] border-[#999999] w-[90%]" />

          {/* Location Information */}
          <div
            onClick={() => setShowLocation(!showLocation)}
            className="flex items-center gap-2 text-lg font-medium"
          >
            <Image src={location} alt="Location Icon" className="w-5 h-5" />
            <span className="text-[12px] md:text-[14px] cursor-pointer lg:text-[17px] text-[#666666]">
              3.5 km | Providencia, Región Metropolitana
            </span>
          </div>
        </div>
        {/* Show Location Component when clicked */}
        {showLocation && (
          <div className="mt-8 hidden lg:block">
            <Location />
          </div>
        )}
      </div>
    </div>
  );
};

export default Ceache;
