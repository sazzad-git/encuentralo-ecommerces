"use client";
import a from "@/public/images/rupa.svg";
import b from "@/public/images/zapatos.svg";
import c from "@/public/images/tecnologic.svg";
import d from "@/public/images/muehles.svg";
import e from "@/public/images/libores.svg";
import f from "@/public/images/deporte.svg";
import g from "@/public/images/comida.svg";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Rupa",
      img: a,
    },
    {
      id: 2,
      name: "Zapatos",
      img: b,
    },
    {
      id: 3,
      name: "Tecnologia",
      img: c,
    },
    {
      id: 4,
      name: "Muehles",
      img: d,
    },
    {
      id: 5,
      name: "Libores",
      img: e,
    },
    {
      id: 6,
      name: "Deporte",
      img: f,
    },
    {
      id: 7,
      name: "Comida",
      img: g,
    },
    {
      id: 8,
      name: "Libores",
      img: e,
    },
  ];

  // use aos animation on scroll
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div
        data-aos="fade-right"
        className="categories py-2 lg:py-5 lg:mb-[74px] "
      >
        <div className="custom-container">
          <div className="categories-head flex items-center gap-3 md:gap-5 lg:gap-8 justify-start md:justify-center overflow-x-scroll">
            {categories.map((sCategory) => (
              <div
                key={sCategory.id}
                className="flex flex-col items-center gap-1"
              >
                <div className="icon-box w-[40px] h-[40px] md:w-[50px] md:h-[50px]  lg:w-[113px] lg:h-[107px] border border-gray-300 rounded-xl md:rounded-full grid place-items-center p-2 md:p-3 lg:p-5 cursor-pointer hover:bg-[#f4ede2] hover:border-[#a06205]">
                  <Image
                    quality={100}
                    src={sCategory.img}
                    alt={sCategory.name}
                  />
                </div>
                <p className="hidden md:block text-[14px] lg:text-[17px]">
                  {sCategory.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
