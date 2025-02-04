"use client";
import Image from "next/image";
import { useEffect, useState } from "react"; // Import useState
import heart from "@/public/accessories/heart.svg";
import hartRed from "@/public/accessories/hartRed.svg"; // Import the red heart icon
import currency from "@/public/accessories/dollar.svg";
import image from "@/public/accessories/image.png";
import image2 from "@/public/accessories/image2.png";
import image3 from "@/public/accessories/image3.png";
import image4 from "@/public/accessories/image4.png";
import image5 from "@/public/accessories/image5.png";
import image6 from "@/public/accessories/image6.png";
import image7 from "@/public/accessories/image7.png";
import image8 from "@/public/accessories/image8.png";
import image9 from "@/public/accessories/image9.png";
import image10 from "@/public/accessories/image10.png";
import image11 from "@/public/accessories/image11.png";
import image12 from "@/public/accessories/imagee12.png";
import { Button } from "../ui/button";

const data = [
  { id: 1, image: image, name: "anillos", currency: currency, heart: heart },
  {
    id: 2,
    image: image2,
    name: "collares",
    currency: currency,
    heart: heart,
  },
  { id: 3, image: image3, name: "anillos", currency: currency, heart: heart },
  { id: 4, image: image4, name: "anillos", currency: currency, heart: heart },
  { id: 5, image: image5, name: "anillos", currency: currency, heart: heart },
  { id: 6, image: image6, name: "anillos", currency: currency, heart: heart },
  { id: 7, image: image7, name: "anillos", currency: currency, heart: heart },
  { id: 8, image: image8, name: "anillos", currency: currency, heart: heart },
  { id: 9, image: image9, name: "anillos", currency: currency, heart: heart },
  {
    id: 10,
    image: image10,
    name: "anillos",
    currency: currency,
    heart: heart,
  },
  {
    id: 11,
    image: image11,
    name: "anillos",
    currency: currency,
    heart: heart,
  },
  {
    id: 12,
    image: image12,
    name: "anillos",
    currency: currency,
    heart: heart,
  },
  { id: 13, image: image, name: "anillos", currency: currency, heart: heart },
  {
    id: 14,
    image: image2,
    name: "collares",
    currency: currency,
    heart: heart,
  },
  {
    id: 15,
    image: image3,
    name: "anillos",
    currency: currency,
    heart: heart,
  },
  {
    id: 16,
    image: image4,
    name: "anillos",
    currency: currency,
    heart: heart,
  },
  {
    id: 17,
    image: image5,
    name: "anillos",
    currency: currency,
    heart: heart,
  },
  {
    id: 18,
    image: image6,
    name: "anillos",
    currency: currency,
    heart: heart,
  },
  {
    id: 19,
    image: image7,
    name: "anillos",
    currency: currency,
    heart: heart,
  },
  {
    id: 20,
    image: image8,
    name: "anillos",
    currency: currency,
    heart: heart,
  },
  {
    id: 21,
    image: image9,
    name: "anillos",
    currency: currency,
    heart: heart,
  },
  {
    id: 22,
    image: image10,
    name: "anillos",
    currency: currency,
    heart: heart,
  },
  {
    id: 23,
    image: image11,
    name: "anillos",
    currency: currency,
    heart: heart,
  },
  {
    id: 24,
    image: image12,
    name: "anillos",
    currency: currency,
    heart: heart,
  },
];

const Interesa = () => {
  // State to track liked status for each item
  const [likedItems, setLikedItems] = useState({});

  // State to track the number of visible items
  const [visibleItems, setVisibleItems] = useState(12);

  // State to track the number of items to load
  const [itemsToLoad, setItemsToLoad] = useState(4); // Default to 4 items for large screens

  // Function to toggle liked status
  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the liked status for the specific item
    }));
  };

  // Function to load more items
  const loadMore = () => {
    setVisibleItems((prev) => prev + itemsToLoad); // Load items based on screen size
  };

  // Effect to update itemsToLoad based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToLoad(3); // Load 3 items on small devices
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setItemsToLoad(3); // Load 3 items on medium devices
      } else {
        setItemsToLoad(4); // Load 4 items on large devices
      }
    };

    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="custom-container mb-[70px] mt-3 lg:mb-[47px] ">
      <div className="grid grid-cols-3 gap-2  lg:gap-[19px] sm:grid-cols-3 lg:grid-cols-4">
        {data.slice(0, visibleItems).map((item) => (
          <div
            key={item.id}
            className="relative md:h-[227px] md:w-[99%] lg:h-[287px] lg:w-[276px] h-[120px] w-[99%] bg-white border border-gray-200 overflow-hidden"
          >
            {/* Image Container with Hover Effect */}
            <div className="image-container relative w-full h-full">
              <Image
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Heart Icon with Toggle Functionality */}
            <div
              className={`absolute top-2 right-2 w-[16px] h-[16px] md:w-[28px] md:h-[28px] lg:w-[34px] lg:h-[34px] cursor-pointer `} // Apply bg-red class if liked
              onClick={() => toggleLike(item.id)} // Toggle like on click
            >
              <Image
                src={likedItems[item.id] ? hartRed : heart} // Use hartRed if liked, heart otherwise
                alt="Heart"
                className="w-full h-full" // Optional: Add padding for better appearance
              />
            </div>

            <div className="absolute w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[26px] bottom-2 right-2 flex items-center gap-1">
              <Image
                src={item.currency}
                alt="Currency"
                className="w-full h-full"
              />
            </div>

            <div className="absolute bottom-2 left-2 font-bridone text-white text-[12px] lg:text-[24px]">
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleItems < data.length && (
        <Button
          onClick={loadMore}
          className="flex mx-auto mt-3 h-[45px] w-[140px] lg:mt-[50px] overflow-hidden bg-[#E8B30A] hover:bg-[#E8B30A] rounded-full text-base border-[1.5px] border-black text-black"
        >
          Ver más
        </Button>
      )}
    </div>
  );
};

export default Interesa;
