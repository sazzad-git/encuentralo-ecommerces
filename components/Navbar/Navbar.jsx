import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import { Nunito } from "next/font/google";

// nomito font
const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Navbar() {
  return (
    <div className="navbar relative border-b border-[#cacaca] bg-white">
      <div className="custom-container">
        <div className="navbar-head">
          <ul className="flex items-center justify-center gap-0 md:gap-4 h-[68px]">
            <li className="relative group">
              {/* Button for hover */}
              <button className="py-1 pe-3 md:pe-4 lg:pe-5 flex items-center gap-1 capitalize text-gray-500 text-[10px] md:text-[14px] lg:text-[18px] hover:text-[#A06205]">
                <i className="fa-solid fa-bars size-3 md:size-4 lg:size-5"></i>
                <span className={`${nunito.variable}`}>Categorías</span>
              </button>

              {/* Dropdown menu */}
              <div className="absolute left-0 top-full z-50 hidden group-hover:block">
                <CategoriesMenu />
              </div>
            </li>
            <li>
              <a
                href="#"
                className={`py-1 px-4 md:px-4 lg:px-5 inline-block capitalize text-gray-500 text-[10px] md:text-[14px] lg:text-[18px] hover:text-[#A06205] ${nunito.variable}`}
              >
                Recién llegados
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`py-1 px-3 md:px-4 lg:px-5 inline-block capitalize text-gray-500 text-[10px] md:text-[14px] lg:text-[18px] hover:text-[#A06205] ${nunito.variable}`}
              >
                hechos a Mano
              </a>
            </li>
            <li className="hidden lg:block">
              <a
                href="#"
                className={`py-1 px-3 md:px-4 lg:px-5 inline-block capitalize text-gray-500 text-[10px] md:text-[14px] lg:text-[18px] hover:text-[#A06205]`}
              >
                Regalos
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`py-[5px] px-3 me-3 md:px-4 lg:px-5 text-[10px] md:text-[14px] lg:text-[18px] inline-block capitalize bg-[#f4ede2] rounded-full text-[#A06205] border border-[#A06205] hover:bg-[#A06205] hover:text-white`}
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
