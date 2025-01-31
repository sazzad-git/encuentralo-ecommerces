"use client";
import nature from "@/public/icon/nature.svg";
import shop from "@/public/icon/shop.svg";
import flag from "@/public/icon/flag.svg";
import truck from "@/public/icon/truck.svg";
import coin from "@/public/icon/coin.svg";
import moneysend from "@/public/icon/moneysend.svg";
import card from "@/public/icon/card.svg";
import routing from "@/public/icon/routing.svg";
import map from "@/public/icon/map.svg";
import sort from "@/public/icon/sort.png";
import Image from "next/image";
import { forwardRef, useState } from "react";
import { Button } from "../ui/button";

const FilterMenu = forwardRef(function FilterMenu(props, ref) {
  const [value, setValue] = useState(3.5); // Initial value for the slider

  const handleSliderChange = (e) => {
    setValue(Number(e.target.value)); // Update the state with the slider value
  };
  return (
    <div
      ref={ref}
      className="w-[323px] h-[389px] md:h-[424px] bg-white absolute top-[110%] right-0 z-50 p-4 rounded-[14px] border border-gray-200"
    >
      <h5 className="text-[16px] border-b border-gray-300 pb-1">Filtros</h5>
      <ul className="py-2 flex flex-col gap-1">
        <li className="flex items-center text-[12px] md:text-[15px]  gap-1">
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <div className="w-[15px]">
              <Image src={nature} alt="Icon" />
            </div>
          </div>
          <span className="text-[#9E9E9E] border-s border-gray-300 ps-1">
            Amigable con el medio Ambiente
          </span>
        </li>

        <li className="flex items-center text-[12px] md:text-[15px]  gap-1">
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <div className="w-[15px]">
              <Image src={shop} alt="Icon" />
            </div>
          </div>
          <span className="text-[#9E9E9E] border-s border-gray-300 ps-1">
            Tienda Física
          </span>
        </li>

        <li className="flex items-center text-[12px] md:text-[15px]  gap-1">
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <div className="w-[15px]">
              <Image src={flag} alt="Icon" />
            </div>
          </div>
          <span className="text-[#9E9E9E] border-s border-gray-300 ps-1">
            Producto Nacional
          </span>
        </li>

        <li className="flex items-center text-[12px] md:text-[15px]  gap-1">
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <div className="w-[15px]">
              <Image src={truck} alt="Icon" />
            </div>
          </div>
          <span className="text-[#9E9E9E] border-s border-gray-300 ps-1">
            Envío Rápido
          </span>
        </li>
      </ul>

      <h5 className="text-[14px] border-b border-gray-300">Metodos de Pago</h5>
      <ul className="py-2 flex flex-col gap-1">
        <li className="flex items-center text-[12px] md:text-[15px]  gap-1">
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <div className="w-[15px]">
              <Image src={coin} alt="Icon" />
            </div>
          </div>
          <span className="text-[#9E9E9E] border-s border-gray-300 ps-1">
            Efectivo
          </span>
        </li>

        <li className="flex items-center text-[12px] md:text-[15px]  gap-1">
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <div className="w-[15px]">
              <Image src={moneysend} alt="Icon" />
            </div>
          </div>
          <span className="text-[#9E9E9E] border-s border-gray-300 ps-1">
            Transferencia
          </span>
        </li>

        <li className="flex items-center text-[12px] md:text-[15px]  gap-1">
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <div className="w-[15px]">
              <Image src={card} alt="Icon" />
            </div>
          </div>
          <span className="text-[#9E9E9E] border-s border-gray-300 ps-1">
            Pago Online
          </span>
        </li>
      </ul>

      <h5 className="text-[14px] border-b border-gray-300">Ubicacion</h5>
      <ul className="py-2 mb-[30px] pt-[14px] flex flex-col gap-1">
        <li className="flex items-center mb-[6px] text-[12px] md:text-[15px] gap-1">
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <div className="w-[15px]">
              <Image src={routing} alt="Icon" />
            </div>
          </div>

          <div className="w-full flex items-center gap-1">
            <span className="text-[#9E9E9E] border-s mr-4 border-gray-300 ps-1">
              Distancia
            </span>
            {/* range add */}

            <div className="relative w-full h-[2px] bg-[#9E9E9E]">
              <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-[2px] h-3 bg-[#9E9E9E]"></div>
              {/* Dynamic marker */}

              {/* Dynamic label */}
              <span
                className="absolute bottom-[4px] text-[#454141] text-[10px] rounded-[10px] border border-[#454141] px-1"
                style={{
                  left: `${(value / 300) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              >
                {value.toFixed(1)}km
              </span>
              {/* Thumb */}
              <div
                className="absolute top-[-3px] transform -translate-x-1/2 w-2 h-2 border border-[#A06205] bg-[#D9D9D9] rounded-full"
                style={{ left: `${(value / 300) * 100}%` }}
              ></div>
              {/* Range slider input */}
              <input
                type="range"
                min="0"
                max="300"
                step="0.1"
                value={value}
                onChange={handleSliderChange}
                className="absolute top-0 left-0 w-full h-[2px] opacity-0 cursor-pointer"
              />
              {/* Min and Max labels */}
              <span className="absolute bottom-[-15px] left-0 text-[#9E9E9E] text-[10px]">
                0
              </span>
              <span className="absolute bottom-[-15px] right-0 text-[#9E9E9E] text-[10px]">
                300
              </span>
            </div>
            {/* finish range */}
          </div>
        </li>

        <li className="flex items-center text-[12px] md:text-[15px]  gap-1">
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <div className="w-[15px]">
              <Image src={map} alt="Icon" />
            </div>
          </div>
          <div className="w-full flex items-center gap-1">
            <span className="text-[#9E9E9E] border-s border-gray-300 ps-1 mr-8">
              Región
            </span>
            <div className="relative w-full">
              <input
                className="border border-[#9E9E9E] rounded-[7px] w-full h-[20px] placeholder:pl-2 placeholder:text-[10px]"
                placeholder="Región Metropolitana"
                type="text"
              />
              <div className="absolute top-[50%] right-1 transform translate-y-[-50%]">
                <Image src={sort} alt="Sort" />
              </div>
            </div>
          </div>
        </li>

        <Button className="flex mx-auto mt-1 h-[42px] w-[120px] overflow-hidden bg-[#E8B30A] hover:bg-[#E8B30A] rounded-full text-base border-[1.5px] border-black text-black">
          Actualizar
        </Button>
      </ul>
    </div>
  );
});

export default FilterMenu;
