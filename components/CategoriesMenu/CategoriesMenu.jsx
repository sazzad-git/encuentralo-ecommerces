"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Nunito } from "next/font/google";

import add from "@/public/arrow.svg";
import rupa from "@/public/icon/rupa.svg";
import watch from "@/public/icon/watch.svg";
import calzado from "@/public/icon/calzado.svg";
import shower from "@/public/icon/shower.svg";
import house from "@/public/icon/house.svg";
import dog from "@/public/icon/dog.svg";
import kid from "@/public/icon/kid.svg";
import coffee from "@/public/icon/coffee.svg";
import device from "@/public/icon/device.svg";
import tv from "@/public/icon/tv.svg";
import world from "@/public/icon/world.svg";
import edit from "@/public/icon/edit.svg";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function CategoriesMenu() {
  const [hoveredCategory, setHoveredCategory] = useState(0);
  const [isSubMenuHovered, setIsSubMenuHovered] = useState(false);
  const timeoutRef = useRef(200);

  const data = [
    {
      name: "Ropa",
      icon: rupa,
      subcategory: ["Casual", "Formal", "Poleras", "Pantalones"],
    },
    {
      name: "Accesorios",
      icon: watch,
      subcategory: ["Casual", "Formal", "Poleras", "Pantalones"],
    },
    {
      name: "Calzado",
      icon: calzado,
      subcategory: ["Casual", "Formal", "Poleras", "Pantalones"],
    },
    {
      name: "Cuidado Personal",
      icon: shower,
      subcategory: ["Casual", "Formal", "Poleras", "Pantalones"],
    },
    {
      name: "Hogar y decoración",
      icon: house,
      subcategory: ["Casual", "Formal", "Poleras", "Pantalones"],
    },
    {
      name: "Mascotas",
      icon: dog,
      subcategory: ["Casual", "Formal", "Poleras", "Pantalones"],
    },
    {
      name: "Niño y Bebé",
      icon: kid,
      subcategory: ["Casual", "Formal", "Poleras", "Pantalones"],
    },
    {
      name: "Consumibles",
      icon: coffee,
      subcategory: ["Casual", "Formal", "Poleras", "Pantalones"],
    },
    {
      name: "Tecnología",
      icon: device,
      subcategory: ["Casual", "Formal", "Poleras", "Pantalones"],
    },
    {
      name: "Ocio",
      icon: tv,
      subcategory: ["Casual", "Formal", "Poleras", "Pantalones"],
    },
    {
      name: "Deporte",
      icon: world,
      subcategory: ["Casual", "Formal", "Poleras", "Pantalones"],
    },
    {
      name: "General",
      icon: edit,
      subcategory: ["Casual", "Formal", "Poleras", "Pantalones"],
    },
  ];

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredCategory(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!isSubMenuHovered) {
        setHoveredCategory(null);
      }
    }, 100);
  };

  const handleSubMenuMouseEnter = () => {
    setIsSubMenuHovered(true);
  };

  const handleSubMenuMouseLeave = () => {
    setIsSubMenuHovered(false);
    handleMouseLeave();
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`${nunito.variable} z-50 absolute top-[100%] left-0 w-[240px] md:w-[380px] border border-gray-300 bg-white rounded-[20px] py-5`}
    >
      <h4 className="text-[10px] md:text-[20px]  mb-2 px-5">Categorias</h4>
      <ul className="flex flex-col gap-1 md:gap-3 lg:gap-3">
        {data.map((category, index) => (
          <li
            key={index}
            className="relative hover:bg-gray-100 px-5"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex  items-center gap-3 text-[20px] text-[#665E5E] justify-between cursor-pointer">
              <div className="flex items-center gap-3 md:gap-3 md:my-[2px] ">
                <Image
                  width={25}
                  height={25}
                  src={category.icon}
                  alt={category.name}
                />
                <span className="text-[12px] md:text-[16px] ">
                  {category.name}
                </span>
              </div>
              <div className="bg-[#d9c09b] bg- flex items-center rounded-[5px] justify-center w-[24px] h-[24px] font-[#FFFFFF]">
                <Image width={14} height={14} src={add} alt="Add Icon" />
              </div>
            </div>

            {hoveredCategory === index && (
              <div
                className="absolute right-[-100px] top-0 ml-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50"
                onMouseEnter={handleSubMenuMouseEnter}
                onMouseLeave={handleSubMenuMouseLeave}
              >
                <ul className="py-1">
                  {category.subcategory.map((subcat, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4 py-1 hover:bg-gray-100 text-[10px] md:text-[14px] lg:text-[16px] cursor-pointer"
                    >
                      {subcat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
