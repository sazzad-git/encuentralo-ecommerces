import begLogo from "@/public/images/beg_logo.png";
import Image from "next/image";
import a from "@/public/images/beg_1.png";
import b from "@/public/images/beg_2.png";
import c from "@/public/images/beg_3.png";
import d from "@/public/images/beg_4.png";
import e from "@/public/images/beg_5.png";
import victor2 from "@/public/hero/Vector2.svg";
import { Nunito } from "next/font/google";
import CardFooter from "../shared/CardFooter";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Trendencla() {
  const items = [
    { id: 1, imgA: a, imgB: b, imgC: c, imgD: d, victor: victor2 },
    { id: 2, imgA: a, imgB: b, imgC: c, imgD: d },
  ];
  const showRecyclingIcon = true;
  const showText = false;

  return (
    <div className="hidden lg:block py-20 lg:mb-[38px]">
      <div className="custom-container">
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-1 bg-white flex items-center justify-center">
            <h2 className="title uppercase font-bridone text-[32px] font-semibold text-[#222222]">
              EN TENDENCIA
            </h2>
          </div>

          <div className="col-span-3 grid grid-cols-2 gap-5">
            {items.map((sItem, index) => (
              <div key={sItem.id} className="border border-gray-300">
                <CardFooter
                  showRecyclingIcon={showRecyclingIcon}
                  victor={sItem.victor}
                  showText={showText}
                  begLogo={begLogo}
                />

                <div className="grid grid-cols-5 gap-1 m-1">
                  {/* Image A */}
                  <div className="col-span-3 max-h-[125px] overflow-hidden group">
                    <Image
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      src={sItem.imgA}
                      alt="Trendencla Images"
                    />
                  </div>

                  {/* Image B */}
                  <div className="col-span-2 max-h-[125px] overflow-hidden group">
                    <Image
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      src={sItem.imgB}
                      alt="Trendencla Images"
                    />
                  </div>

                  {/* Image C */}
                  <div className="col-span-1 max-h-[125px] overflow-hidden group">
                    <Image
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      src={sItem.imgC}
                      alt="Trendencla Images"
                    />
                  </div>

                  {/* Image D */}
                  <div className="col-span-3 max-h-[125px] overflow-hidden group">
                    <Image
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      src={sItem.imgD}
                      alt="Trendencla Images"
                    />
                  </div>

                  {/* Image E */}
                  <div className="col-span-1 max-h-[125px] overflow-hidden group">
                    <Image
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      src={e}
                      alt="Trendencla Images"
                    />
                  </div>
                </div>

                <p className="px-1 py-8 text-center text-[16px]">
                  <span className={`cursor-pointer ${nunito.variable}`}>
                    Bolsos, Moda, Abrigos
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
