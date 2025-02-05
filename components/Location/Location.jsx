import Image from "next/image";
import maps from "@/public/maps.png";
import parcentage from "@/public/parcentage.svg";
import { Nunito } from "next/font/google";

const data1 = {
  title: "Encuentranos En",
  subtitle: "Santa Magdalena 181, Providencia , Santiago",
};

const data2 = {
  title: "Nuestros horarios",
  subtitles: [
    ["Lunes - Jueves", "08:00 - 17:30"],
    ["Viernes", "10:00 - 19:00"],
    ["Sábados", "10:00 - 20:00"],
    ["Domingos", "Cerrado", true],
  ],
};

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

const Location = () => {
  return (
    <div>
      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Container (40%) */}
        <div className="w-full md:w-2/5 flex flex-col gap-8">
          {/* Location Box */}
          <div className="border border-[#666666] rounded-xl p-6">
            <h2 className="text-[30px] font-bridone mb-[30px] text-center">
              {data1.title}
            </h2>
            <p
              className={`text-[#666666] text-[24px] text-center mb-[50px] ${nunito.variable}`}
            >
              {data1.subtitle}
            </p>
          </div>

          {/* Schedule Box */}
          <div className="border border-[#666666] rounded-xl p-6">
            <h2 className="text-[30px] font-bridone mb-[30px] text-center">
              {data2.title}
            </h2>
            <div className="flex flex-col items-start ml-10 mb-[30px]">
              {data2.subtitles.map(([day, time, isBold], index) => (
                <div key={index} className="flex justify-start">
                  <span
                    className={`w-[170px] text-[24px] text-[#666666] font-medium ${nunito.variable}`}
                  >
                    {day}
                  </span>
                  <span
                    className={`mx-2 text-[24px] text-[#666666] ${nunito.variable}`}
                  >
                    :
                  </span>
                  <span
                    className={`text-[24px] text-[#666666] ${nunito.variable} ${
                      isBold ? "font-bold" : ""
                    }`}
                  >
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Container (Maps - 60%) */}
        <div className="w-full md:w-3/5">
          <div className="rounded-[40px] border border-[#A06205] overflow-hidden h-[calc(100%-65px)]">
            <Image
              src={maps}
              alt="Maps"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
