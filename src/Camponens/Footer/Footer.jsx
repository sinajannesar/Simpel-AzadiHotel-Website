import logo from "../../assets/logo.png";
import logo2 from "../../assets/logos.png"
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { SiAparat } from "react-icons/si";


export default function Footer() {
  return (
    <div>
      <div className="w-[1300px] h-[1px] bg-slate-200 mt-6 ml-72 "></div>

      <div className="">
        <div className=" grid-cols-2 flex justify-center ml-[900px] gap-36 mt-8 ">
          <div className="text-right space-y-4">
            <h1 className="text-[16px] font-bold ">اطلاعات تکمیلی</h1>
            <ul className=" space-y-2">
              <li>
                <a href="#">فروش سازمانی</a>
              </li>
              <li>
                <a href="#">همکاری با آژانس‌ها</a>
              </li>
              <li>
                <a href="#">مناقصات و مزایدات</a>
              </li>
              <li>
                <a href="#">فرصت‌های شغلی</a>
              </li>
            </ul>
          </div>

          <div className="text-right space-y-4 ">
            <h1 className="text-[16px] font-bold ">خدمات مشتریان</h1>
            <ul className=" space-y-2">
              <li>
                <a href="#">راهنمای خرید</a>
              </li>
              <li>
                <a href="#">راهنمای استرداد</a>
              </li>
              <li>
                <a href="#">قوانین و مقررات</a>
              </li>
              <li>
                <a href="#">سوالات متداول</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <img src={logo} className="ml-[990px] -mt-40" />

            <p className="text-[11px] text-[#161616] text-right w-[804px] whitespace-nowrap ml-80 mt-4 leading-relaxed">
              هتل پارسیان آزادی یا هایت سابق از سال ۱۳۷۰ تحت نظر گروه هتل های
              پارسیان فعالیت می کند. این هتل که یکی از بزرگترین و بلندترین
              هتل‌های بین‌المللی پنج ستاره ایران در شمال<br/> تهران است در سال ۱۳۹۱
              با هزینه ای بالغ بر ۸۰ میلیارد تومان به طور کامل بازسازی شد. هتل
              پارسیان آزادی در محله اوین ، در مکان برخورد دو بزرگراه اصلی
              بزرگراه شهید چمران و بزرگراه<br/>. یادگار امام قرار دارد
            </p>

            <img src={logo2} className="m-4 ml-[360px]"/>
          </div>
        </div>
      </div>
      <div className="w-[1300px] h-[1px] bg-slate-200 mt-6 ml-72 "></div>

      <div >
        <p className="text-[11px] text-[#161616] mt-6 ml-[1280px]">کلیه حقوق این وبسایت محفوظ و متعلق به هتل پارسیان آزادی می‌باشد</p>
        <div className="flex gap-3 ml-72 -mt-4">
        <RiInstagramFill className="text-backgroundbutton" />
        <FaTelegram className="text-backgroundbutton"/>
        <SiAparat className="text-backgroundbutton"/>
        </div>
        
      </div>
    </div>
  );
}
