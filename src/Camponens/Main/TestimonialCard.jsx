import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import infa from "../../assets/infatino.png";
import paki from "../../assets/paki.png";
import icon from "../../assets/icon.png";

export default function TestimonialSlider() {
  const testimonials = [
    {
      text: "به نظر من این کاری که کشور شکل‌گیری است واقعاً چشم‌انداز ایران را سامان می‌بخشد. ایران یکی از همان نقاطی می‌شود که مسافران زیادی برای ایران و هتل آرتیست تهران پیشنهاد سفر به ایران و بازدید را به همه شما می‌دهم.",
      name: "جناب جیانی اینفانتینو",
      role: "رئیس فیفا",
      image: infa,
      stiker: icon,
    },
    {
      text: "از سخاوت شما در هتل پارسیان آزادی متشکریم، رفتار دوستانه و معاشرت با شما جذبه و جلال این شهر را به منتها درجه رسانید. قلباً قدرشناسی صـادقانه خود را به کلیه پرسنل محترم هتل آزادی ابراز می‌دارم.",
      name: "جناب بان کی مون",
      role: "دبیر کل سابق سازمان ملل",
      image: paki,
      stiker: icon,
    },
    {
      text: "خدمات ارائه‌شده در این مجموعه فوق‌العاده است و من تجربه خیلی خوبی داشتم. به همه پیشنهاد می‌کنم.",
      name: "جناب آقای صالحی",
      role: "گردشگر داخلی",
      image: "https://via.placeholder.com/50",
      stiker: icon,
    },
    {
      text: "محیط دوستانه و زیبا باعث شد من و خانواده‌ام بهترین روزها را در این هتل تجربه کنیم. واقعاً ممنونم.",
      name: "جناب آقای جوادی",
      role: "توریست خارجی",
      image: "https://via.placeholder.com/50",
      stiker: icon,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10">
      {/* عنوان صفحه */}
      <h1 className="font-bold text-[40px] flex justify-center mt-[660px] mb-10">
        دست‌ نوشته‌های مهمانان
      </h1>

      {/* اسلایدر */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={48}
        slidesPerView={2}
        pagination={{ clickable: true ,
        }}
        className=""
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white  rounded-3xl p-6 flex flex-col items-end gap-4 w-[576px] h-[338px] text-right border-2">
              <div className="flex-دبیر کل سابق سازمان ملل-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-xl object-cover  "
                />
              </div>
              <div className="text-right">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="w-[183px] h-[74px] bg-gradient-to-b from-white via-[#FDF7FB] to-[#FDF7FB] rounded-xl ml-80 ">
                  <h4 className="font-bold text-backgroundbutton py-3 px-2">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 px-2 whitespace-nowrap">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
            <div className=" absolute -mt-[360px] m-11">
              <img src={testimonial.stiker} alt="img" className="  " />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
