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

import { Nunito } from "next/font/google";
import Image from "next/image";

// i need nonito font
const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function CategoriesMenu() {
  const data = [
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
  ];

  return (
    <div className="z-50 absolute top-[100%] left-0 w-[240px] md:w-[380px] border border-gray-300 bg-white rounded-[20px] p-5">
      <h4 className={`text-[10px] md:text-[16px] lg:text-[24px] mb-2`}>
        Categorias
      </h4>
      <ul className="flex flex-col gap-1 md:gap-3 lg:gap-3">
        {data.map((category, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-[20px] font-bold text-[#665E5E] justify-between"
          >
            <div
              className={`${nunito.variable} flex items-center gap-2 md:gap-4 lg:gap-4 lg:my-[5px]`}
            >
              <Image width={25} src={category.icon} alt={category.name} />
              <span
                className={`${nunito.variable} text-[10px] md:text-[16px] lg:text-[20px]`}
              >
                {category.name}
              </span>
            </div>
            <Image width={24} height={24} src={add} alt="Add Icon" />
          </li>
        ))}
      </ul>
    </div>
  );
}
