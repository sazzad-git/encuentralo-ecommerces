import Image from "next/image";
import shopLogo from "@/public/images/shoplogo.png";
import { MdOutlineHome } from "react-icons/md";
import { LuTruck } from "react-icons/lu";
import img from "@/public/Poleronchampionblue1.png";
import imgOne from "@/public/clothing_01.png";
import imgTwo from "@/public/clothing_02.png";
import imgThree from "@/public/clothing_4.png";
import imgFour from "@/public/images/destacados_2.png";
import victor2 from "@/public/hero/Vector2.svg";

import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Recomendamos() {
  const data = [
    { id: 1, img: img },
    { id: 2, img: imgOne, victor: victor2 },
    { id: 3, img: imgTwo },
    { id: 4, img: imgThree },
    { id: 5, img: imgFour },
    { id: 6, img: imgTwo },
    { id: 7, img: imgThree },
    { id: 8, img: imgFour },
  ];

  return (
    <div className="custom-container py-5 hidden lg:block lg:mb-[61px]">
      <div className="flex items-center justify-between pb-2 md:pb-4 lg:pb-6 lg:mb-[32px]">
        <h2
          className={` font-bridone text-[14px] md:text-[18px] lg:text-[40px] text-[#222222]`}
        >
          RECOMENDAMOS
        </h2>
      </div>

      <div className=" grid grid-cols-4 gap-y-[27px] gap-x-[19px] ">
        {data.map((sData, index) => (
          <div key={sData.id} className="item border bg-white">
            <div className="h-[228px] p-2">
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
                  <h4 className="text-[10px] text-[#222222] font-[350] font-bridone md:text-[13px] lg:text-[17px]">
                    Aress.Cl
                    {sData.victor && (
                      <Image
                        className="inline"
                        src={sData?.victor}
                        alt="Vector"
                      />
                    )}
                  </h4>
                  <p
                    className={`text-[9px] md:text-[12px] font-bold text-[#A06205] ${nunito.variable}`}
                  >
                    Accesorios
                    <span className={`font-normal ${nunito.variable}`}>
                      / Joyería
                    </span>
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
        ))}
      </div>
    </div>
  );
}
