"use client";
import Image from "next/image";
import { useState } from "react"; // Import useState
import heart from "@/public/accessories/heart.svg";
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

const Interesa = () => {
  // State to track liked status for each item
  const [likedItems, setLikedItems] = useState({});

  // State to track the number of visible items
  const [visibleItems, setVisibleItems] = useState(12);

  // Function to toggle liked status
  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the liked status for the specific item
    }));
  };

  // Function to load more items
  const loadMore = () => {
    setVisibleItems((prev) => prev + 4); // Load 3 more items
  };

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

  return (
    <div className="md:w-[1160px] mx-auto mb-[70px] mt-3 md:mb-[47px] px-[8px] md:px-0">
      <div className="grid grid-cols-3 gap-2  md:gap-[19px] sm:grid-cols-3 md:grid-cols-4">
        {data.slice(0, visibleItems).map((item) => (
          <div
            key={item.id}
            className="relative md:h-[287px] md:w-[276px] h-[120px] w-[120px] bg-white border border-gray-200 overflow-hidden"
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
              className={`absolute top-2 right-2 cursor-pointer ${
                likedItems[item.id] ? "bg-red" : ""
              }`} // Apply bg-red class if liked
              onClick={() => toggleLike(item.id)} // Toggle like on click
            >
              <Image
                src={item.heart}
                alt="Heart"
                width={34}
                height={34}
                className="p-1" // Optional: Add padding for better appearance
              />
            </div>

            <div className="absolute w-[10px] h-[10px] md:w-[25px] md:h-[26px] bottom-2 right-2 flex items-center gap-1">
              <Image
                src={item.currency}
                alt="Currency"
                className="w-full h-full"
              />
            </div>

            <div className="absolute bottom-2 left-2 font-bridone text-white text-[12px] md:text-[24px]">
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleItems < data.length && (
        <Button
          onClick={loadMore}
          className="flex mx-auto mt-1 h-[42px] w-[120px] md:mt-[50px] overflow-hidden bg-[#E8B30A] hover:bg-[#E8B30A] rounded-full text-base border-[1.5px] border-black text-black"
        >
          Ver más
        </Button>
      )}
    </div>
  );
};

export default Interesa;
