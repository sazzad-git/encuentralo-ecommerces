import Image from "next/image";
import React from "react";
import shopLogo from "@/public/images/shoplogo.png";
import { Nunito } from "next/font/google";
import { MdOutlineHome, MdOutlineRecycling } from "react-icons/md";
import { LuTruck } from "react-icons/lu";
import Icons from "../common/Icons";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

const CardFooter = ({ victor, showRecyclingIcon, showText, begLogo }) => {
  return (
    <>
      {/* Other Content */}

      {/* "flex justify-between p-2 lg:p-4 relative items-center">
                  <div className="flex items-center gap-2 lg:gap-3"> */}

      <div className="flex justify-between p-2 lg:p-4 relative">
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[52px] lg:h-[52px] rounded-full">
            <Image src={begLogo || shopLogo} alt="Shop Logo" />
          </div>
          <div className="leading-0 lg:leading-[125%]">
            <h4 className="text-[10px] text-[#222222] font-[350] font-bridone md:text-[18px] lg:text-[18px]">
              Aress.Cl
              {victor && (
                <Image
                  className="inline md:ml-[7px]"
                  src={victor}
                  alt="Vector"
                />
              )}
            </h4>
            <p
              className={`${nunito.variable} lg:mt-1 text-[9px] md:text-[11px] lg:text-[16px] font-bold text-[#A06205]`}
            >
              Accesorios
              <span className={`${nunito.variable} font-normal`}>
                / Joyería
              </span>
            </p>
          </div>
        </div>
        {/* Card Icons */}
        <Icons showRecyclingIcon={showRecyclingIcon} />
      </div>

      {showText && (
        <p
          className={`${nunito.variable} font-sans text-[8px] md:text-[12px] lg:text-[16px] p-2 pt-0 lg:p-3 capitalize`}
        >
          aress.cl es una tienda de articulos de ropa chabacana.
        </p>
      )}
    </>
  );
};

export default CardFooter;
