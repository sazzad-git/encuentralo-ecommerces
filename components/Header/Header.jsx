"use client";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import viewFinder from "@/public/images/viewFinder.svg";
import question from "@/public/images/question.svg";
import user from "@/public/images/user.svg";
import { Button } from "../ui/button";
import FilterMenu from "../FilterMenu/FilterMenu";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const handleToggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".filter-icon")
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white border-b border-[#cacaca]">
      <div className="custom-container">
        <div className="header-head flex items-center h-auto md:h-[50px] py-3 md:py-0 justify-between gap-3">
          {/* Logo */}
          <div className="logo-box">
            <Image
              className="max-w-[110px] sm:max-w-[170px] cursor-pointer"
              src={logo}
              alt="Logo"
            />
          </div>

          {/* Search Box */}
          <div className="search-box relative w-[70%] md:w-[600px] h-[25px] md:h-[40px] pe-8 md:pe-24 border border-[#cacaca] rounded-full md:rounded-lg ms-0 md:ms-10">
            <input
              className="ps-8 pe-8 md:ps-12 w-full absolute top-0 left-0 h-full text-[10px] md:text-base outline-none rounded-full md:rounded-lg"
              type="text"
              placeholder="Buscar productos, marcas y más..."
            />
            <i className="fa-solid fa-magnifying-glass size-3 lg:size-5 text-[#A06205] absolute top-[9px] left-[10px] md:top-1/2 md:left-[12px] -translate-y-1/2"></i>

            {/* Filter Icon with Dropdown */}
            <div className="filter-icon md:h-[24px] absolute top-1/2 right-[7px] -translate-y-1/2 flex items-center justify-end gap-3">
              <Image
                className="cursor-pointer hidden md:block"
                width={24}
                src={viewFinder}
                alt="Camera ViewFinder"
              />
              <div
                onClick={handleToggleDropdown}
                className="bg-[#A06205] h-[23px] w-[25px] md:h-[34px] md:w-[35px] grid place-items-center rounded-[5px] md:rounded-[10px] cursor-pointer"
              >
                <i className="fa-solid fa-sliders  size-4 text-white"></i>
              </div>
            </div>

            {isDropdownVisible && (
              <div ref={dropdownRef}>
                <FilterMenu />
              </div>
            )}
          </div>

          {/* User Section */}
          <div className="lg:flex items-center gap-6 justify-end hidden">
            <div className="items-center gap-4 hidden lg:flex ml-5">
              <Image
                className="cursor-pointer"
                width={25}
                src={question}
                alt="Question"
              />
              <Image
                className="cursor-pointer"
                width={22}
                src={user}
                alt="User"
              />
            </div>

            <Button className="ml-10 h-[42px] w-[120px] overflow-hidden bg-[#E8B30A] hover:bg-[#E8B30A] rounded-full text-base border-[1.5px] border-black text-black">
              Únete!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
