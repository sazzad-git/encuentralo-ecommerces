import coffee from "@/public/ceache/coffee.svg";
import chocolate from "@/public/ceache/chocolate.svg";
import dinner from "@/public/ceache/dinner.svg";
import fb from "@/public/ceache/fb.svg";
import insta from "@/public/ceache/insta.svg";
import whatsapp from "@/public/ceache/whatsapp.svg";
import tiktok from "@/public/ceache/tiktok.svg";
import Image from "next/image";
import { Nunito } from "next/font/google";

// i need nunito font
const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],

  variable: "--font-nunito",
});

const Comida = () => {
  return (
    <div className="hidden  lg:block custom-container mx-auto mt-2">
      <div className="flex mb-7  items-center justify-between">
        <div className="flex  justify-between ">
          <div className="w-[99px] h-[104px] mr-[34px] border rounded-lg">
            <div className=" flex  items-center my-[10px] justify-center">
              <Image
                src={coffee}
                alt="coffee"
                className="lg:w-[51px] lg:h-[51px]"
              />
            </div>
            <p className="text-center font-bridone text-[#222222] text-[16px]">
              Cafe
            </p>
          </div>
          <div className="w-[99px] h-[104px] mr-[34px] border rounded-lg">
            <div className=" flex items-center my-[10px] justify-center">
              <Image
                src={chocolate}
                alt="coffee"
                className="lg:w-[51px] lg:h-[51px]"
              />
            </div>
            <p className="text-center font-bridone text-[#222222] text-[16px]">
              Chocolate
            </p>
          </div>
          <div className="w-[99px] h-[104px] mr-[34px] border rounded-lg">
            <div className=" flex items-center my-[10px] justify-center">
              <Image
                src={dinner}
                alt="coffee"
                className="lg:w-[51px] lg:h-[51px]"
              />
            </div>
            <p className="text-center font-bridone text-[#222222] text-[16px]">
              Comida
            </p>
          </div>
        </div>
        <div className="w-[276px] h-[105px] border rounded-lg mr-1">
          <p
            className={`text-center font-bold py-[11px] ${nunito.variable} text-[#222222] text-[17px]`}
          >
            Nuestas Redes
          </p>
          <div className="flex w-[149px] h-[32px] items-center justify-center  mx-auto">
            <div className="mr-[15px]">
              <Image
                src={fb}
                alt="coffee"
                className="lg:w-[15px] lg:h-[30px]"
              />
            </div>
            <div className="mr-[15px]">
              <Image
                src={insta}
                alt="coffee"
                className="lg:w-[30px] lg:h-[30px]"
              />
            </div>
            <div className="mr-[15px]">
              <Image
                src={whatsapp}
                alt="coffee"
                className="lg:w-[30px] lg:h-[30px]"
              />
            </div>
            <div className="mr-[15px]">
              <Image
                src={tiktok}
                alt="coffee"
                className="lg:w-[25px] lg:h-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comida;
