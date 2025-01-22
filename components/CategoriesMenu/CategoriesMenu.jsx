"use client";
import add from "@/public/icon/add.svg";
import rupa from "@/public/icon/rupa.svg";
import watch from "@/public/icon/watch.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { forwardRef, useEffect } from "react";

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
      <h4 className="text-[24px] mb-2">Categorias</h4>
      <ul className="flex flex-col gap-3">
        {[
          { name: "Rupa", icon: rupa },
          { name: "Accesorios", icon: watch },
          { name: "Calzado", icon: rupa },
          { name: "Cuidado Personal", icon: rupa },
          { name: "Hogar y decoración", icon: rupa },
          { name: "Mascotas", icon: rupa },
          { name: "Niño y Bebé", icon: rupa },
          { name: "Consumibles", icon: rupa },
          { name: "Tecnología", icon: rupa },
          { name: "Ocio", icon: rupa },
          { name: "Deporte", icon: rupa },
          { name: "General", icon: rupa },
          { name: "Personalizados", icon: rupa },
        ].map((category, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-[20px] font-bold text-[#665E5E] justify-between"
          >
            <div className="flex items-center gap-4 lg:my-[5px]">
              <Image width={25} src={category.icon} alt={category.name} />
              <span>{category.name}</span>
            </div>
            <Image width={24} height={24} src={add} alt="Add Icon" />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CategoriesMenu;
