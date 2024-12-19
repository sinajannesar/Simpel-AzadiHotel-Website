import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import darake from "../../assets/darake.png";
import bostan from "../../assets/bostan.png";
import borg from "../../assets/borg.png";
import kakh from "../../assets/kakh.png";
import moshak from "../../assets/moshak.png";

export default function NearbyAttractions() {
  const slides = [
    {
      image: kakh,
      simbol: moshak,
      title: "کاخ سعدآباد",
      description: " کیلومتر ۷ (۱۲ دقیقه با خودرو)",
    },
    {
      image: borg,
      simbol: moshak,
      title: "برج میلاد",
      description: " کیلومتر ۸ (۱۱ دقیقه با خودرو)",
    },
    {
      image: bostan,
      simbol: moshak,
      title: "بوستان آب و آتش",
      description: " کیلومتر ۹ (۱۲ دقیقه با خودرو)",
    },
    {
      image: darake,
      simbol: moshak,
      title: "درکه",
      description: " کیلومتر۴  (۹ دقیقه با خودرو) ",
    },
    {
      image: darake,
      simbol: moshak,
      title: "درکه",
      description: " کیلومتر۴  (۹ دقیقه با خودرو) ",
    },
    {
      image: borg,
      simbol: moshak,
      title: "برج میلاد",
      description: " کیلومتر ۸ (۱۱ دقیقه با خودرو)",
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-[40px] flex justify-center mt-16">
        نزدیک‌ترین مکان‌های گردشگری
      </h1>
      <div className="max-w-7xl mx-auto py-10 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={4}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="px-4"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <div className="bg-white rounded-lg overflow-hidden shadow-md w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-right">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-sm text-gray-600">{slide.description}</p>
                </div>
                <div>
                  <a href="#">
                    <img src={slide.simbol} className="ml-4 -mt-8" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className=" absolute -mt-36 ml-[1330px]">
          <div className="swiper-button-next absolute  transform -translate-y-1/2 text-gray-700 hover:text-black transition-all duration-300 text-3xl h-6 w-6"></div>
        </div>
        <div className=" absolute -mt-36 -ml-12">
          <div className="swiper-button-prev absolute transform -translate-y-1/2 text-gray-700 hover:text-black transition-all duration-300 text-3xl"></div>
        </div>
      </div>
    </div>
  );
}
