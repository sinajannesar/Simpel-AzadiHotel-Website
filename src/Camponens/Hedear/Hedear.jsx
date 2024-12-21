import logo from "../../assets/logo.png";
import Amkanat from "./Amkanat";
import flesh from "../../assets/fleshsarpaien.png";
import khat from "../../assets/khat.png";
import { MdOutlinePhone } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "fa", name: "فارسی" },
    { code: "fr", name: "Français" },
  ];

  return (
    <>
      <div className="flex justify-center py-4">
        <div className="flex justify-between w-full max-w-screen-xl px-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                className="flex items-center justify-center w-16 h-10 bg-white border-2 border-gray-200 rounded-xl"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img src={flesh} alt="dropdown icon" />
                <IoLanguage className="text-gray-700 w-6 h-6" />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <ul className="py-1">
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          className="block w-full text-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition"
                          onClick={() => {
                            setIsOpen(false);
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
            <div className="flex items-center gap-2 border-2 rounded-2xl border-gray-200 py-2 px-4">
              <p>ثبت نام</p>
              <img src={khat} alt="separator" />
              <p>ورود</p>
              <MdPersonOutline className="text-gray-700 w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 border-2 rounded-2xl border-gray-200 p-2">
              <p className="font-bold">۰۲۱-۲۷۲۰</p>
              <MdOutlinePhone className="text-gray-700 h-6 w-6" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#">
              <p className="hover:text-gray-700 transition duration-300">
                ارتباط با ما
              </p>
            </a>
            <a href="#">
              <p className="hover:text-gray-700 transition duration-300">
                رویداد ها
              </p>
            </a>

            <a href="#">
              <p className="hover:text-gray-700 transition duration-300">
                راهنمای گردشگری تهران
              </p>
            </a>

            <Amkanat />
          </div>
          <div className="flex items-center">
            <img src={logo} className="h-12" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}
