import image from "../../assets/packimage.png";
import tel from "../../assets/phon.png"
import post from "../../assets/post.png"
import loc from "../../assets/loc.png"
export default function NearbyAttractionspart2() {
  return (
    <div>
      <div className="flex justify-center mt-20">
      <div className="w-[1300px] h-[360px] bg-backgroundbutton rounded-2xl ">
        <img src={image} className="mt-16 ml-36" />
        <h1 className="text-[40px] font-bold text-white -mt-56 ml-[832px] drop-shadow-[3px_3px_10px_rgba(0,0,0,0.5)]">
          تورهای گردشگری تهران
        </h1>

        <div className="ml-[690px]">
          <p className=" text-[19px] text-white text- mt-4 w-[504px]  text-right font-thin drop-shadow-[3px_3px_10px_rgba(0,0,0,0.5)]">
            {" "}
            به<span className="font-bold"> میزبانی </span>هتل پارسیان آزادی،
            رزرو از معتبرترین
            <br /> آژانس‌های مسافرتی
          </p>
        </div>

        <button className="  w-[151px] h-[50px] bg-gradient-to-b from-white via-[#EBD1DD] to-[#c57a9d] rounded-xl flex justify-center items-center  ml-[1050px] mt-[40px] ">
          <p className="font-bold">مشاهده و رزرو</p>
        </button>
      </div>
    </div>
    
      
      <div className="flex flex-col  justify-center md:flex-row gap-16 mt-20 -ml-4 ">


      <div className="w-[384px] h-[84px] rounded-xl   bg-gradient-to-b from-[#FFFFFF] to-[#ececec] flex flex-col justify-center ">
            <p className=" absolute font-bold  text-[11px] text-right ml-[260px] -mt-8 ">
           : ایمیل
            </p>
            <p className="text-[16px] text-center   mt-[14px]">
            reservation@azadihotel.com
            </p>
            <img src={loc} className="w-10 h-10 absolut ml-80 -mt-10 "/>
          </div>



          <div className="w-[384px] h-[84px] rounded-xl  bg-gradient-to-b from-[#FFFFFF] to-[#ececec] flex flex-col justify-center ">
            <p className=" absolute font-bold  text-[11px] text-right ml-64 -mt-8 ">
           : آدرس
            </p>
            <p className="text-[16px] text-center  mt-[14px]">
            تهران - بزرگراه چمران - تقاطع یادگار
            </p>
            <img src={post} className="w-10 h-10 absolut ml-80 -mt-10 "/>
          </div>

          <div className="w-[384px] h-[84px] rounded-xl   bg-gradient-to-b from-[#FFFFFF] to-[#ececec] flex flex-col justify-center ">
            <p className=" absolute font-bold  text-[11px] text-right ml-56 -mt-8 ">
            : پشتیبانی تلفنی
            </p>
            <p className="text-[16px] text-center  mt-[14px]">
            (پاسخگویی شبانه‌روزی) <span className="font-bold">۲۷۲۰-۰۲۱ </span> 
            </p>
            <img src={tel} className="w-10 h-10 absolut ml-80 -mt-10 "/>
          </div>

        </div>

        
      
    </div>
  );
}
