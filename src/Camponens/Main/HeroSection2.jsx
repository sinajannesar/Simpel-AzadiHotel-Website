import aprteman from "../../assets/Aparteman.png"
import { FaRegCirclePlay } from "react-icons/fa6";

export default function HeroSection2() {
  return (
    <div className="flex ">
      <div className="ml-[300px]">
        <div className="w-[568px] h-[318px] bg-backhero mt-[119px] rounded-2xl ">
          <img src={aprteman} className="absolute -mt-[63px] -ml-[25px] rounded-2xl" />
          <button className="absolute  w-[170px] h-[50px] bg-gradient-to-b from-white via-[#EBD1DD] to-[#c57a9d] rounded-2xl flex justify-center items-center gap-[8px] ml-[350px] mt-[134px] ">
          <FaRegCirclePlay  className="mt-1"/>
         <p className="font-bold">ویدئو معرفی</p>
          </button>
        </div>
      </div>

      <div className="w-[568px] h-[318px]  ml-[170px]">
        <p className="text-right font-bold mt-[119px] text-[28px]">
          هتل پارسیان آزادی، پیشرو در ارائه خـدمات
          <br /> نـوین هتـلداری
        </p>
        <p className="text-right mt-6 leading-[27px] tracking-wide text-[15px]">
          هتل پارسیان آزادی یا هایت سابق از سال ۱۳۷۰ تحت نظر گروه هتل‌های
          پارسیان فعالیت <br />
          می کند. این هتل که یکی از بزرگترین و بلندترین هتل‌های بین‌المللی پنج
          ستاره ایران است <br />
          در سال ۱۳۹۱ با هزینه‌ای بالغ بر ۸۰ میلیارد تومان به طور کامل بازسازی
          شد.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mt-6 ">
          <div className="w-[276px] h-[96px] rounded-xl bg-[#Fdf7fb] bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FB] flex flex-col justify-center">
            <p className="font-bold text-backgroundbutton text-[19px] text-right mr-11">
              ۲۶ طبقه
            </p>
            <p className="text-[16px] text-center text-[#4D4D4D] mt-[4px]">
              بلندترین و زیباترین هتل ایران
            </p>
          </div>
          <div className="w-[276px] h-[96px] rounded-xl  bg-[#Fdf7fb] bg-gradient-to-b from-[#FFFFFF] to-[#FDF7FB] flex flex-col justify-center ">
            <p className="font-bold text-backgroundbutton text-[19px] text-right mr-8">
              ۴۷۵ واحد اقامتی
            </p>
            <p className="text-[16px] text-center text-[#4D4D4D] mt-[4px]">
              با انواع منظره، چیدمان و امکانات
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
