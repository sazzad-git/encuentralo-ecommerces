import Mask from "@/public/hero/Mask.svg";
import car from "@/public/hero/car.svg";
import Image from "next/image";
const HeroIcons = () => {
  return (
    <>
      <div className="w-[12px] h-[13px] md:w-[16px] md:h-[15px] lg:w-[23px] lg:h-[22px]  border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer group relative">
        <Image src={Mask} className="w-full h-full" alt="Mask" />
        <span className="absolute -top-8 left-[-12px] md:left-[-4px] -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          Home Info
        </span>
      </div>
      <div className="w-[12px] h-[13px] md:w-[16px] md:h-[15px] lg:w-[23px] lg:h-[22px]  border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer group relative">
        <Image src={car} className="w-full h-full" alt="Car" />
        <span className="absolute -top-8 left-[-22px] md:left-[-8px] -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          Delivery Info
        </span>
      </div>
    </>
  );
};

export default HeroIcons;
