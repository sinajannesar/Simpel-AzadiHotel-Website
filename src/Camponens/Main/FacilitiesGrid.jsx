import imgfa from "../../assets/backfa1.png";
import imgfa1 from "../../assets/backfa2.png";
import imgfa2 from "../../assets/backfa3.png";
import imgfa3 from "../../assets/backfa4.png";
import imgfa4 from "../../assets/backfa5.png";
import imgfa5 from "../../assets/backfa6.png";
import { GoArrowLeft } from "react-icons/go";

export default function FacilitiesGrid() {
  return (
    <div>
      <div className="mt-[80px]">
        <h1 className="flex justify-center text-[40px] font-bold">
          امکانات و خدمات رفاهی ویژه
        </h1>

        <div className=" md:flex">
          <div className=" absolute mt-[24px] ml-[1013px]">
            <div className=" absolute w-[486px] h-[62px] bg-gradient-to-b from-white  to-[#F6E9EE] rounded-br-xl rounded-l-xl  mt-[123px] ml-[103px] ">
              <button className="w-[48px] h-[62px] bg-backgroundbutton rounded-tl-xl">
                <GoArrowLeft className="text-Whait text-[25px] ml-3" />
              </button>
              <p className=" absolute -mt-[52px] ml-[290px] text-[19px] font-bold ">
                رستوران‌های بین المللی
              </p>
            </div>

            <img src={imgfa} alt="restoran" className=" rounded-xl" />
          </div>
          <div className=" absolute ml-[280px] ">
            <div className=" absolute  w-[486px] h-[62px] bg-gradient-to-b from-white  to-[#F6E9EE] rounded-br-xl rounded-l-xl  mt-[148px] ml-[103px]">
              <button className="w-[48px] h-[62px] bg-backgroundbutton rounded-tl-xl">
                <GoArrowLeft className="text-Whait text-[25px] ml-3" />
              </button>
              <p className="absolute -mt-[55px] ml-[370px] text-[19px] font-bold ">
                بیزنس سنتر
              </p>
            </div>


            <div>
              <button></button>
            </div>

            <img src={imgfa1} alt="bixnes" />
          </div>


          
          <div className=" absolute ml-[1216px] mt-[232px]">
            <button></button>
            <img src={imgfa2} alt="klop" />
          </div>
          <div className=" absolute mt-[232px] ml-[280px]">
            <button></button>
            <img src={imgfa3} alt="salon" />
          </div>
          <div className=" absolute mt-[440px] ml-[688px]">
            <button></button>
            <img src={imgfa4} alt="khadamat" />
          </div>
          <div className=" absolute mt-[440px] ml-[280px]">
            <button></button>
            <img src={imgfa5} alt="taxc" />
          </div>
        </div>
      </div>
    </div>
  );
}
