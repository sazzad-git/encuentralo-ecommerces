import Image from "next/image";
import shopLogo from "@/public/images/shoplogo.png";
import { MdOutlineHome } from "react-icons/md";
import { LuTruck } from "react-icons/lu";
import { Nunito } from "next/font/google";
import img from "@/public/Poleronchampionblue1.png";
import imgOne from "@/public/clothing_01.png";
import imgTwo from "@/public/clothing_02.png";
import imgThree from "@/public/clothing_4.png";
import imgFour from "@/public/images/destacados_2.png";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function SmallInteresar() {
  const data = [
    { id: 1, img: img },
    { id: 2, img: imgOne },
    { id: 3, img: imgTwo },
    { id: 4, img: imgThree },
    { id: 5, img: imgFour },
    { id: 6, img: imgTwo },
  ];

  return (
    <div className="block md:hidden">
      <div className="custom-container pt-4 pb-20">
        <div className="flex items-center pb-2">
          <h2 className="text-[14px] font-bridone md:text-[25px] lg:text-[40px] text-[#222222] font-semibold">
            TE PODRIA INTERESAR
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {data.map((sData, index) => (
            <div key={sData.id} className="item border bg-white">
              <div className="h-[170px] p-1">
                <Image
                  className="w-full h-full object-cover"
                  src={sData.img}
                  alt="Slider Cover"
                />
              </div>

              <div className="flex justify-between p-2 lg:p-4 relative">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-[25px] h-[25px] lg:w-[52px] lg:h-[52px] rounded-full">
                    <Image src={shopLogo} alt="Shop Logo" />
                  </div>
                  <div className="leading-0 lg:leading-[125%]">
                    <h4 className="text-[10px] font-bridone lg:text-[20px]">
                      Aress.Cl
                    </h4>
                    <p className="text-[9px] lg:text-[16px] font-bold text-[#A06205]">
                      Accesorios <span className="font-normal">/ Joyería</span>
                    </p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 flex items-center justify-end gap-1 lg:relative">
                  <div className="w-[12px] h-[13px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer">
                    <MdOutlineHome className="size-3 lg:size-5 text-[#BF8937]" />
                  </div>
                  <div className="w-[12px] h-[13px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer">
                    <LuTruck className="size-3 lg:size-5 text-[#BF8937]" />
                  </div>
                </div>
              </div>

              <p
                className={`${nunito.variable} font-sans text-[8px] lg:text-[16px] p-2 pt-0 lg:p-3 capitalize`}
              >
                impulso naturaltienda es una tienda de suplementos deportivos
                naturales.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
