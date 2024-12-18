import room from "../../assets/room.png";
import room1 from "../../assets/Aparteman.png"
import { MdOutlineConnectedTv } from "react-icons/md";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { BsSnow } from "react-icons/bs";
import { MdOutlineCurtains } from "react-icons/md";
import { BiCabinet } from "react-icons/bi";
import { IoWifiOutline } from "react-icons/io5";
import { RiSofaLine } from "react-icons/ri";
import { RiSafe3Line } from "react-icons/ri";
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";
import  { useState } from "react";

const images = [room,room1];

export default function RoomCard() {
    const [currentIndex, setCurrentIndex] = useState(0);

  // حرکت به عکس بعدی
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
      };
  return (
    <div>
      <div className="mt-[80px] ">
        <h1 className="text-[40px] font-bold flex justify-center">
          اتاق‌ها و سوئیت‌‌ها
        </h1>
      </div>
      <div className="space-x-6 flex justify-center mt-6">
        <button className="w-[160px] h-[57px] border-2 rounded-2xl hover:border-backhero hover:text-backhero">
          <p className="text-[13px] font-bold text-right mr-6 ">
            سوئیت پرزندیتال
          </p>
          <p className="text-[11px] ml-7 hover:text-inherit !text-black">
            واقع در طبقه ۲۴
          </p>
        </button>
        <button className="w-[160px] h-[57px] border-2 rounded-2xl  hover:border-backhero hover:text-backhero">
          <p className="text-[13px] font-bold text-right mr-6">سوئیت دوبلکس</p>
          <p className="text-[11px] ml-7 !text-black">واقع در طبقه ۲۴</p>
        </button>
        <button className="w-[160px] h-[57px] border-2 rounded-2xl  hover:border-backhero hover:text-backhero">
          <p className="text-[13px] font-bold text-right mr-6">سوئیت رویال</p>
          <p className="text-[11px] !text-black">واقع در طبقات ۲۲ و ۲۳</p>
        </button>
        <button className="w-[160px] h-[57px] border-2 rounded-2xl  hover:border-backhero hover:text-backhero">
          <p className="text-[13px] font-bold text-right mr-6">سوئیت جونیور</p>
          <p className="text-[11px] !text-black">واقع در طبقات ۳ الی ۲۴</p>
        </button>
        <button className="w-[160px] h-[57px] border-2 rounded-2xl  hover:border-backhero hover:text-backhero ">
          <p className="text-[13px] font-bold text-right mr-6">
            اتاق استاندارد
          </p>
          <p className="text-[11px] !text-black">واقع در طبقات ۳ الی ۲۴</p>
        </button>
      </div>
      <div className="flex justify-center">
        <div className="flex w-[1350px] h-[364px] border-backkhat  border-2 rounded-2xl mt-[24px] ">
          <div className="w-[690px] h-[364px]">
            <h1 className="text-[24px] font-bold absolute  w-[666px] h-[45px] text-right ml-[170px] mt-6  text-backhero">
              اتاق استاندارد
            </h1>
          </div>
          <div className="h-[1px] w-[806px] absolute bg-backkhat mt-[85px] ml-8"></div>
          <div>
            <div>
              <div className=" absolute w-[400px] mx-auto mt-24  -ml-[250px]">
                <h2 className="text-[20px] font-bold mb-4 text-right">
                  امکانات اتاق
                </h2>
                <div className="grid grid-cols-2 gap-4 text-right ml-36 font-bold">
                  <div className="flex items-center gap-2 p-3 bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FB] rounded-lg w-[130px] h-[37px] -ml-1">
                    <p className="text-[13px] whitespace-nowrap">
                      تلویزیون هوشمند
                    </p>
                    <span>
                      <MdOutlineConnectedTv />
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-5 bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FB] rounded-lg w-[130px] h-[37px]">
                    <p className="text-[13px] whitespace-nowrap">
                      یخچال مینی‌بار
                    </p>
                    <span>
                      <CgSmartHomeRefrigerator />
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FB] rounded-lg -ml-6 w-[149px] h-[37px] ">
                    <p className="text-[13px] whitespace-nowrap">
                      تهویه هوا اتوماتیک
                    </p>
                    <span>
                      <BsSnow />
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FB] rounded-lg w-[130px] h-[37px]">
                    <p className="text-[13px] whitespace-nowrap">
                      پرده‌های کنترلی
                    </p>
                    <span>
                      <MdOutlineCurtains />
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FB] rounded-lg w-[130px] h-[37px] ml-4">
                    <p className="text-[13px] whitespace-nowrap">
                      اینترنت بی‌سیم
                    </p>
                    <span>
                      <IoWifiOutline />
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FB] rounded-lg w-[108px] h-[37px] ml-6">
                    <p className="text-[13px] whitespace-nowrap">کمد دیواری</p>
                    <span>
                      <BiCabinet />
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FB] rounded-lg w-[130px] h-[37px] ml-2">
                    <p className="text-[13px] whitespace-nowrap ">
                      صندوق امانات
                    </p>
                    <span>
                      <RiSafe3Line />
                    </span>
                    <div className="flex items-center gap-2 p-3 bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FB] rounded-lg w-[122px] h-[37px] ml-5">
                      <p className="text-[13px] whitespace-nowrap">
                        مبلمان راحتی
                      </p>
                      <span>
                        <RiSofaLine />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <>
              <div className=" absolute w-[1px] h-[238px] bg-backkhat -ml-44 mt-28"></div>
            </>
            <div className=" absolute -ml-[600px] ">
              <h1 className=" absolute w-[316.5px] h-[26px] font-bold text-[20px] mt-[102px] ml-[275px]">
                اطلاعات تکمیلی
              </h1>
              <div className="grid grid-cols-2 gap- ml-[130px] mt-[150px] ">
                <div className=" absolute items-center  p-3 bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FB] rounded-lg w-[140px] h-[37px] -ml-7 -mt-1">
                  <p className="text-[15px] whitespace-nowrap font-bold ">
                  مناسب برای ۱  تا ۲ نفر
                  </p>
                </div>
                <div className=" flex items-center  p-3 bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FB] rounded-lg w-[140px] h-[37px] ml-[135px]">
                  <p className="text-[15px] whitespace-nowrap  font-bold">مساحت اتاق : ۲۷ متر</p>
                </div>
                <div className=" ml-[140px] absolute mt-10 items-center p-3 bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FB] rounded-lg w-[140px] h-[37px]  ">
                  <p className="text-[15px] whitespace-nowrap px-1 font-bold ">سرویس روزانه اتاق</p>
                </div>
                <div className=" absolute">
                  <button className=" absolute  w-[356px] h-[50px] bg-gradient-to-b from-[#b36a8e] via-[#922362] to-[#901d64] text-white rounded-xl -ml-[135px] mt-[126px]">
                    مشاهده و رزرو
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative w-[486px] h-[364px] mx-auto">
      {/* نمایش عکس فعلی */}
      <img
        src={images[currentIndex]}
        alt={`Room ${currentIndex}`}
        className="ml-[85px] -mt-[2px]  rounded-r-2xl"
      />

      {/* دکمه چپ */}
      <button
        onClick={prevSlide}
        className="absolute left-[93px] top-[180px] -translate-y-1/2 w-[32px] h-[32px] bg-backbutton text-white rounded-full flex items-center justify-center"
      >
        <VscChevronLeft className="text-[22px]" />
      </button>

      {/* دکمه راست */}
      <button
        onClick={nextSlide}
        className="absolute -right-[77px] top-[180px] -translate-y-1/2 w-[32px] h-[32px] bg-backbutton text-white rounded-full flex items-center justify-center"
      >
        <VscChevronRight className="text-[22px]" />
      </button>
    </div>
        </div>
      </div>
    </div>
  );
}
