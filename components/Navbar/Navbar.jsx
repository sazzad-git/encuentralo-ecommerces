"use client";

import { useState, useEffect, useRef } from "react";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";

export default function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Add delay for opening the dropdown
  const handleToggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".dropdown-button")
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
    <div className="navbar relative border-b border-[#cacaca] bg-white">
      <div className="custom-container">
        <div className="navbar-head">
          <ul className="flex items-center justify-center gap-0 md:gap-4 h-[68px]">
            <li>
              <button
                onClick={handleToggleDropdown}
                className="dropdown-button py-1 pe-3 md:pe-4 lg:pe-5 flex items-center gap-1 capitalize text-gray-500 text-[10px] md:text-[14px] lg:text-[18px] hover:text-[#A06205]"
              >
                <i className="fa-solid fa-bars size-3 md:size-4 lg:size-5"></i>
                <span>Categorías</span>
              </button>
              {isDropdownVisible && <CategoriesMenu ref={dropdownRef} />}
            </li>
            <li>
              <a
                href="#"
                className="py-1 px-4 md:px-4 lg:px-5 inline-block capitalize text-gray-500 text-[10px] md:text-[14px] lg:text-[18px] hover:text-[#A06205]"
              >
                Recién llegados
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-1 px-3 md:px-4 lg:px-5 inline-block capitalize text-gray-500 text-[10px] md:text-[14px] lg:text-[18px] hover:text-[#A06205]"
              >
                hechos a Mano
              </a>
            </li>
            <li className="hidden lg:block">
              <a
                href="#"
                className="py-1 px-3 md:px-4 lg:px-5 inline-block capitalize text-gray-500 text-[10px] md:text-[14px] lg:text-[18px] hover:text-[#A06205]"
              >
                Regalos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-[5px] px-3 me-3 md:px-4 lg:px-5 text-[10px] md:text-[14px] lg:text-[18px] inline-block capitalize bg-[#f4ede2] rounded-full text-[#A06205] border border-[#A06205] hover:bg-[#A06205] hover:text-white"
              >
                Sorprendeme
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
