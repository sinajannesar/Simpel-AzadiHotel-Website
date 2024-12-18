import logo from "../../assets/logo.png";
import Amkanat from "./Amkanat";
import khat from "../../assets/khat.png";
import flesh from "../../assets/fleshsarpaien.png";
import { MdOutlinePhone } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { useState } from "react";

export default function Hedear() {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "fa", name: "فارسی" },
    { code: "fr", name: "Français" },
  ];

  return (
    <>
      <div className=" flex justify-center">
        <div className="flex justify-end space-x-[32px]">
          <div className="flex mr-[200px] gap-[16px] mt-[29.2px]">
            <div className="relative inline-block text-left">
              {/* دکمه اصلی */}
              <div>
                <button
                  className="flex items-center justify-center w-[64px] h-[40px] bg-white border-2 border-borderbuttowhait rounded-xl "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <img src={flesh} />
                  <IoLanguage className="text-backgroundbutton w-[24px] h-[24px]" />
                </button>
              </div>

              {/* منوی کشویی */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <ul className="py-1">
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          className="block w-full text-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition"
                          onClick={() => {
                            setIsOpen(false); // بستن منو
                            console.log(`Language selected: ${lang.code}`);
                          }}
                        >
                          {lang.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex gap-[8px] font-sans border-2 rounded-2xl items-center justify-center border-borderbuttowhait w-[135px] h-[40px]">
              <p>ثبت نام</p>
              <img src={khat} />
              <p>ورود</p>
              <MdPersonOutline className="text-backgroundbutton  w-[24px] h-[24px]" />
            </div>
            <div className="flex gap-[8px] border-2 rounded-2xl items-center justify-center border-borderbuttowhait w-[124px] h-[42px]">
              <p className="font-bold">۰۲۱-۲۷۲۰</p>
              <MdOutlinePhone className="text-backgroundbutton h-[24px] w-[24px]" />
            </div>
          </div>

          <div className="flex  font-sans gap-[24px] mt-[38.2px] px-8 ">
            <p className=" hover:text-backgroundbutton transition duration-300 ">
              ارتباط با ما{" "}
            </p>
            <p className=" hover:text-backgroundbutton transition duration-300">
              رویداد ها
            </p>
            <p className=" hover:text-backgroundbutton transition duration-300">
              {" "}
              راهنمای گردشگری تهران{" "}
            </p>
            <>
              <Amkanat  />
            </>
          </div>
          <div className="flex justify-end">
            <img src={logo} className="flex mt-[24px] " />
          </div>
        </div>
      </div>
    </>
  );
}
