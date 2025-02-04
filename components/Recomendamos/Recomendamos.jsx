"use client";
import Image from "next/image";
import { useState, useEffect } from "react"; // Import useState and useEffect
import shopLogo from "@/public/images/shoplogo.png";
import img from "@/public/Poleronchampionblue1.png";
import imgOne from "@/public/clothing_01.png";
import imgTwo from "@/public/clothing_02.png";
import imgThree from "@/public/clothing_4.png";
import imgFour from "@/public/images/destacados_2.png";
import victor2 from "@/public/hero/Vector2.svg";
import { Nunito } from "next/font/google";
import Icons from "../common/Icons";
import { Button } from "../ui/button";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Recomendamos() {
  const showRecyclingIcon = false;

  // State to track the number of visible items
  const [visibleItems, setVisibleItems] = useState(8); // Default to 8 for large screens

  // State to track the number of items to load
  const [itemsToLoad, setItemsToLoad] = useState(4); // Default to 4 for large screens

  // Function to load more items
  const loadMore = () => {
    setVisibleItems((prev) => prev + itemsToLoad); // Load items based on screen size
  };

  // Effect to update initial visibleItems and itemsToLoad based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile
        setVisibleItems(4); // Show 4 items initially
        setItemsToLoad(2); // Load 2 items on "Load More"
      } else {
        // Large display
        setVisibleItems(8); // Show 8 items initially
        setItemsToLoad(4); // Load 4 items on "Load More"
      }
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    { id: 1, img: img },
    { id: 2, img: imgOne, victor: victor2 },
    { id: 3, img: imgTwo },
    { id: 4, img: imgThree },
    { id: 5, img: imgFour },
    { id: 6, img: imgTwo },
    { id: 7, img: imgThree },
    { id: 8, img: imgFour },
    { id: 9, img: img },
    { id: 10, img: imgOne, victor: victor2 },
    { id: 11, img: imgTwo },
    { id: 12, img: imgThree },
    { id: 13, img: imgFour },
    { id: 14, img: imgTwo },
    { id: 15, img: imgThree },
    { id: 16, img: imgFour },
  ];

  return (
    <div className="custom-container py-5 lg:mb-[61px]">
      <div className="flex items-center justify-between pb-2 md:pb-4 lg:pb-6 lg:mb-[32px]">
        <h2
          className={`font-bridone text-[14px] md:text-[18px] lg:text-[40px] text-[#222222]`}
        >
          RECOMENDAMOS
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[27px] gap-x-[19px]">
        {data.slice(0, visibleItems).map((sData) => (
          <div key={sData.id} className="item border bg-white">
            <div className="h-[206px] lg:h-[228px] p-2">
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
                  <h4 className="text-[10px] text-[#222222] font-[350] font-bridone md:text-[13px] lg:text-[16px]">
                    Aress.Cl
                    {sData.victor && (
                      <Image
                        className="inline ml-[7px]"
                        src={sData?.victor}
                        alt="Vector"
                      />
                    )}
                  </h4>
                  <p
                    className={`text-[9px] md:text-[14px] font-bold text-[#A06205] ${nunito.variable}`}
                  >
                    Accesorios
                    <span className={`font-normal ${nunito.variable}`}>
                      / Joyería
                    </span>
                  </p>
                </div>
              </div>
              <div className="absolute top-2 right-2 flex items-center md:mt-2 justify-end gap-1">
                <Icons showRecyclingIcon={showRecyclingIcon} />
              </div>
            </div>
            <p
              className={`${nunito.variable} font-sans text-[9px] md:text-[13px] p-3 capitalize`}
            >
              impulso naturaltienda es una tienda de suplementos deportivos
              naturales.
            </p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleItems < data.length && (
        <Button
          onClick={loadMore}
          className="flex mx-auto mt-3 h-[45px] w-[140px] md:mt-[50px] overflow-hidden bg-[#E8B30A] hover:bg-[#E8B30A] rounded-full text-base border-[1.5px] border-black text-black"
        >
          Ver más
        </Button>
      )}
    </div>
  );
}
