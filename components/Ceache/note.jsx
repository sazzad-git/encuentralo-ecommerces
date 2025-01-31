import fb from "@/public/ceache/fb.svg";
import insta from "@/public/ceache/insta.svg";
import whatsapp from "@/public/ceache/whatsapp.svg";
import tiktok from "@/public/ceache/tiktok.svg";

<div className="w-[177px] h-[173px] rounded-full border bg-white flex justify-center items-center">
  {/* Blue Circle with Custom Clipping */}
  <div className="relative w-[173px] h-[168px]">
    {/* Blue Circle with Clipping */}
    <div
      className="absolute inset-0 w-full h-full bg-blue-500"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 40%, 60% 60%, 50% 100%, 0 100%)", // 40% cut from bottom middle to right
        borderRadius: "50%",
      }}
    ></div>
    {/* White Circle Inside with Ceache Icon */}
    <div className="absolute inset-0 m-[3px] rounded-full bg-white flex justify-center items-center">
      <Image
        src={ceache}
        alt="Ceache Icon"
        className="w-[165px] h-[160px] rounded-full"
      />
    </div>
  </div>
</div>;
