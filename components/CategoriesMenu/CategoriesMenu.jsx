"use client";
import add from "@/public/icon/add.svg";
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
import Aos from "aos";
import "aos/dist/aos.css";
import { Nunito } from "next/font/google";
import Image from "next/image";
import { forwardRef, useEffect } from "react";

// i need nonito font
const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

const CategoriesMenu = forwardRef(function CategoriesMenu(props, ref) {
  useEffect(() => {
    // use aos animation on scroll
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="fade-right"
      ref={ref}
      className="z-50 absolute top-[100%] left-0 w-[380px] border border-gray-300 bg-white rounded-r-[20px] p-5"
    >
      <h4 className={`text-[24px] mb-2`}>Categorias</h4>
      <ul className="flex flex-col gap-3">
        {[
          { name: "Ropa", icon: rupa },
          { name: "Accesorios", icon: watch },
          { name: "Calzado", icon: calzado },
          { name: "Cuidado Personal", icon: shower },
          { name: "Hogar y decoración", icon: house },
          { name: "Mascotas", icon: dog },
          { name: "Niño y Bebé", icon: kid },
          { name: "Consumibles", icon: coffee },
          { name: "Tecnología", icon: device },
          { name: "Ocio", icon: tv },
          { name: "Deporte", icon: world },
          { name: "General", icon: edit },
        ].map((category, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-[20px] font-bold text-[#665E5E] justify-between"
          >
            <div
              className={`${nunito.variable} flex items-center gap-4 lg:my-[5px]`}
            >
              <Image width={25} src={category.icon} alt={category.name} />
              <span className={`${nunito.variable}`}>{category.name}</span>
            </div>
            <Image width={24} height={24} src={add} alt="Add Icon" />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CategoriesMenu;
