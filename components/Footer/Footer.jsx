export default function Footer() {
  return (
    <div className="h-[165px] md:h-[250px] lg:h-[280px] bg-[#323236]">
      <div className="footer-container h-full flex flex-col justify-end">
        <h2 className="text-[16px] md:text-[25px] lg:text-[45px] text-white text-center font-semibold py-2 md:py-3 lg:py-3">
          ENCUENTRALO.CL
        </h2>

        <ul className="flex items-center justify-center gap-2 lg:gap-5">
          <li>
            <div className="cursor-pointer w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] bg-white hover:bg-[#413b3a] rounded-full grid place-items-center">
              <i className="fa-brands fa-facebook-f text-[#2D83C8] text-[8px] md:text-[13px] lg:text-[16px]"></i>
            </div>
          </li>

          <li>
            <div className="cursor-pointer w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] bg-white hover:bg-[#413b3a] rounded-full grid place-items-center">
              <i className="fa-brands fa-instagram text-[#2D83C8] text-[8px] md:text-[13px] lg:text-[16px]"></i>
            </div>
          </li>

          <li>
            <div className="cursor-pointer w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] bg-white hover:bg-[#413b3a] rounded-full grid place-items-center">
              <i className="fa-brands fa-twitter text-[#2D83C8] text-[8px] md:text-[13px] lg:text-[16px]"></i>
            </div>
          </li>

          <li>
            <div className="cursor-pointer w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] bg-white hover:bg-[#413b3a] rounded-full grid place-items-center">
              <i className="fa-brands fa-linkedin-in text-[#2D83C8] text-[8px] md:text-[13px] lg:text-[16px]"></i>
            </div>
          </li>
        </ul>

        <ul className="list-none flex items-center justify-center gap-5 lg:gap-10 py-4 md:py-6 lg:py-6">
          <li>
            <a
              href=""
              className="text-white text-[10px] md:text-[13px] lg:text-[16px]"
            >
              Principal
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-white text-[10px] md:text-[13px] lg:text-[16px]"
            >
              Sobre nosotros
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-white text-[10px] md:text-[13px] lg:text-[16px]"
            >
              Planes de suscripción
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-white text-[10px] md:text-[13px] lg:text-[16px]"
            >
              Contacto
            </a>
          </li>
        </ul>

        <p className="text-center text-white py-2 md:py-3 lg:py-4 border-t border-white text-[10px] md:text-[14px] lg:text-[18px]">
          Copyright 2024. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
