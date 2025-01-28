import begLogo from "@/public/images/beg_logo.png";
import Image from "next/image";
import a from "@/public/images/beg_1.png";
import b from "@/public/images/beg_2.png";
import c from "@/public/images/beg_3.png";
import d from "@/public/images/beg_4.png";
import e from "@/public/images/beg_5.png";
import { MdOutlineHome, MdOutlineRecycling } from "react-icons/md";
import { LuTruck } from "react-icons/lu";

import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Trendencla() {
  const items = [1, 2];

  return (
    <div className="hidden lg:block  py-20 lg:mb-[38px]">
      <div className="custom-container">
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-1 bg-white flex items-center justify-center">
            <h2 className="title uppercase font-bridone text-[32px] font-semibold text-[#222222]">
              EN TENDENCIA
            </h2>
          </div>

          <div className="col-span-3 grid grid-cols-2 gap-5">
            {items.map((sItem, index) => (
              <div key={index} className="border brder-gray-300">
                <div className="flex justify-between p-2 lg:p-4 relative">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[52px] lg:h-[52px] rounded-full">
                      <Image src={begLogo} alt="Shop Logo" />
                    </div>
                    <div className="leading-0 lg:leading-[125%]">
                      <h4 className="text-[10px] font-bridone md:text-[18px] font-[350] text-[#222222]">
                        Aress.Cl
                      </h4>
                      <p
                        className={`text-[9px] md:text-[12px] lg:text-[16px] font-bold text-[#A06205] ${nunito.variable}`}
                      >
                        Accesorios
                        <span className={`font-normal ${nunito.variable}`}>
                          / Joyería
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 flex items-center justify-end gap-1 lg:top-1/2 lg:-translate-y-1/2">
                    <div className="w-[12px] h-[13px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer">
                      <MdOutlineHome className="size-3 md:size-4 lg:size-5 text-[#BF8937]" />
                    </div>
                    <div className="w-[12px] h-[13px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer">
                      <LuTruck className="size-3 md:size-4 lg:size-5 text-[#BF8937]" />
                    </div>
                    <div className="w-[12px] h-[13px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer">
                      <MdOutlineRecycling className="size-3 md:size-4 lg:size-5 text-[#BF8937]" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-1 m-1">
                  <div className="col-span-3 max-h-[125px] overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      src={a}
                      alt="Trendencla Images"
                    />
                  </div>
                  <div className="col-span-2 max-h-[125px] overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      src={b}
                      alt="Trendencla Images"
                    />
                  </div>
                  <div className="col-span-1 max-h-[125px] overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      src={c}
                      alt="Trendencla Images"
                    />
                  </div>
                  <div className="col-span-3 max-h-[125px] overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      src={d}
                      alt="Trendencla Images"
                    />
                  </div>
                  <div className="col-span-1 max-h-[125px] overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      src={e}
                      alt="Trendencla Images"
                    />
                  </div>
                </div>

                <p className="px-1 py-8 text-center text-[16px]">
                  <span className={`cursor-pointer ${nunito.variable}`}>
                    Bolsos, Moda, Abrigos
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
