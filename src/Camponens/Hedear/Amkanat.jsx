import { useState } from "react";
import flesh from "../../assets/fleshsarpaien.png";

export default function PositionedMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-black">
      {/* دکمه اصلی */}
      <button
        className="flex items-center justify-center bg-white  border-black hover:text-backgroundbutton transition"
        onClick={toggleMenu}
      >
        <img src={flesh} className="mr-2 " />
        امکانات و خدمات
      </button>

      {/* منوی کشویی */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50 text-center">
          <ul className="py-2">
            <li>
              <button
                onClick={handleClose}
                className="block w-full  px-4 py-2 text-gray-700 hover:text-backgroundbutton text-center transition"
              >
                ارتباط
              </button>
            </li>
            <li>
              <button
                onClick={handleClose}
                className="block w-full text-center px-4 py-2 text-gray-700 hover:text-backgroundbutton transition"
              >
                اتاق‌های خالی
              </button>
            </li>
            <li>
              <button
                onClick={handleClose}
                className="block w-full text-center px-4 py-2 text-gray-700 hover:text-backgroundbutton transition"
              >
                رزرو
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
