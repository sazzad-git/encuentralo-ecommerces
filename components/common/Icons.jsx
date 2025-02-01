import React from "react";
import { LuTruck } from "react-icons/lu";
import { MdOutlineHome, MdOutlineRecycling } from "react-icons/md";

const Icons = ({ showRecyclingIcon }) => {
  return (
    <>
      <div className=" flex items-center justify-end gap-1 lg:top-1/3 lg:-translate-y-1/2 absolute top-2 right-2">
        <div className="w-[12px] h-[13px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer group relative">
          <MdOutlineHome className="size-3 md:size-4 lg:size-5 text-[#BF8937]" />
          <span className="absolute -top-8 left-[-22px] md:left-[8px] -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-[9999]">
            Home Info
          </span>
        </div>
        <div className="w-[12px] h-[13px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer group relative">
          <LuTruck className="size-3 md:size-4 lg:size-5 text-[#BF8937]" />
          <span className="absolute -top-8 left-[-22px] md:left-[4px] -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            Delivery Info
          </span>
        </div>
        {showRecyclingIcon && (
          <div className="w-[12px] h-[13px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer group relative">
            <MdOutlineRecycling className="size-3 md:size-4 lg:size-5 text-[#BF8937]" />
            <span className="absolute -top-8 left-[-22px] md:left-[-10px] -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Recycle Info
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Icons;
