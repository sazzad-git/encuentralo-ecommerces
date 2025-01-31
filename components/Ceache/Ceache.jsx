import React from "react";
import Image from "next/image";
import flag from "@/public/ceache/flag.svg";
import frame from "@/public/ceache/Frame.svg";
import vector from "@/public/ceache/Vector.svg";
import car from "@/public/ceache/car.svg";
import dollar from "@/public/ceache/Vector2.svg";
import ceache from "@/public/ceache/ceache.png";
import location from "@/public/ceache/Location.svg";
import { Nunito } from "next/font/google";
import Link from "next/link";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

const Ceache = () => {
  return (
    <div className="md:mt-[60px] mt-2 md:mb-[72px]">
      {/* Main Background Container */}
      <div className="relative bg-cover w-[370px] h-[120px] md:w-[1160px] mx-auto md:h-[296px] rounded-lg bg-center bg-no-repeat bg-[url('/ceache/background.png')]">
        {/* Buttons with Text in the Top-Right Corner */}
        <div className="absolute hidden top-4 right-4 md:flex gap-4 ">
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

        {/* Bottom Buttons with Dollar and Car Icons */}
        <div className="absolute bottom-4 bg-white border border-[#A06205] right-4 p-2 flex flex-col gap-2 rounded-lg">
          {/* Dollar Icon with Button */}
          <div className="flex items-center gap-2">
            <Image src={dollar} alt="Dollar Icon" className="w-5 h-4" />
            <button className="border bg-[#f9f6f0] border-[#A06205] text-[#A06205] rounded-full px-4 py-1 text-sm">
              Métodos de Pago
            </button>
          </div>
          {/* Car Icon with Button */}
          <div className="flex items-center gap-2">
            <Image src={car} alt="Car Icon" className="w-5 h-6 md:mt-[7px]" />
            <button className=" border bg-[#f9f6f0] border-[#A06205] text-[#A06205] rounded-full px-4 py-1 text-sm">
              Métodos de Envío
            </button>
          </div>
        </div>

        {/* Ceache Icon Inside a Blue Circle Inside a White Circle */}
        <div className="absolute -bottom-10 left-[12px] md:left-[38px] flex items-center gap-3">
          {/* White Circle */}
          <div className="relative">
            {/* White Circle as Outer Layer */}
            <div className="w-[82px] h-[80px] md:w-[177px] md:h-[173px] rounded-full border bg-white flex justify-center items-center">
              {/* Blue Circle with Custom Clipping */}
              <div className="relative w-[79px] h-[77px] md:w-[173px] md:h-[168px]">
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
                    className="w-[73px] h-[71px] md:w-[165px] md:h-[160px] rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Title and Subtitle */}
          <div className="text-white">
            <h2 className=" text-[37px] font-bridone text-[#FFFFFF] md:mb-[15px]">
              _ch_accesorios J
            </h2>

            <p className="text-[17px] text-[#FFFFFF] md:pb-[60px]">
              _ch_accesorios es una tienda de accesorios únicos y modernos.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[385px] md:w-[1160px] mx-auto">
        {/* Additional Information Below the Background Image */}
        <div className="mt-[12px] flex flex-col md:flex-row items-center md:items-center md:justify-between text-[#333] md:ml-[250px] relative z-10">
          {/* Website Information */}
          <div>
            <p className="text-[17px] hidden md:inline-block md:pr-1 text-[#666666]">
              Visítanos En
            </p>
            <Link
              href="https://www.ch_accesorios.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666]  font-semibold"
            >
              www.ch_accesorios.cl
            </Link>
          </div>

          {/* Location Information */}
          <div className="flex items-center gap-2 text-lg font-medium">
            <Image src={location} alt="Location Icon" className="w-5 h-5" />
            <span className="text-[17px] text-[#666666]">
              3.5 km | Providencia, Región Metropolitana
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ceache;
