import Image from "next/image";
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

const Interesa = () => {
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
  ];

  return (
    <div className="md:w-[1160px] mx-auto mb-[70px] mt-3 md:mb-[47px] px-[8px] md:px-0">
      <div className="grid grid-cols-3 gap-2  md:gap-[19px] sm:grid-cols-3 md:grid-cols-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative md:h-[287px] md:w-[276px] h-[120px] w-[120px] bg-white border border-gray-200 overflow-hidden"
          >
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-2 right-2">
              <Image src={item.heart} alt="Heart" width={24} height={24} />
            </div>

            <div className="absolute bottom-2 right-2 flex items-center gap-1">
              <Image
                src={item.currency}
                alt="Currency"
                width={16}
                height={16}
              />
              <span className="text-xs">USD</span>
            </div>

            <div className="absolute bottom-2 left-2 text-xs">
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interesa;
