import Apartemahero from "../../assets/hero-img.png";

export default function HeroSection() {
  return (
    <div className="flex justify-center mt-[80px]">
      <div className="rtl w-[1300px] h-[430px] flex bg-backhero rounded-3xl relative">
        {/*باکس سفید زیر تصویر*/}
        <div className="absolute  bg-white rounded-2xl  w-[792px] h-[106px] mt-[380px] ml-[204px]">
          <p className="text-[19px] font-bold text-backgroundbutton mt-[38px] ml-[698px]">
            رزرو اتاق
          </p>
          
          <button className="absolute w-[120px] h-[40px] bg-backgroundbutton bg-gradient-to-b from-[#C27B9F] via-[#a33b6f] to-backgroundbutton duration-200 text-white rounded-lg text-sm font-bold -mt-[30px] ml-6">
            جستجو
          </button>

          
            <input type="text"
            placeholder="۱ مسافر ۱، اتاق"
            className="absolute w-[195px] h-[58px]  bg-Whait outline-none rounded-xl text-[16px] text-right ml-[172px] -mt-[40px]"/>
      
          
          <div className="absolute -mt-[40px] ml-[383px] rounded-xl w-[299px] h-[58px] bg-Whait text-center ">
           
            <input
              placeholder="تاریخ خروج"
               className="w-[149.5px] h-[58px] bg-Whait rounded-2xl  text-center text-[16px] outline-none"
            />

            <input
              type="text"
              placeholder="تاریخ ورود"
              className="w-[149.5px] h-[58px] bg-Whait rounded-2xl  text-center text-[16px] outline-none"
            />

          </div>
        </div>

        {/* متن اصلی */}
        <h1 className="absolute text-[48px] font-bold ml-[194px] mt-[165.5px] text-Whait drop-shadow-[3px_3px_10px_rgba(0,0,0,0.5)]">
          هتل پارسیان آزادی
        </h1>

        {/* متن فرعی */}
        <p className="absolute text-[40px] font-light text-Whait ml-[184px] mt-[250.5px] drop-shadow-[3px_3px_10px_rgba(0,0,0,0.5)]">
          انتخاب نخست بلندپایگان
        </p>

        {/* تصویر */}
        <img
          src={Apartemahero}
          className="w-[510px] h-[529px] -mt-[71px] ml-[813px]"
          alt="هتل"
        />
      </div>
    </div>
  );
}
