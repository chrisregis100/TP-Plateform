import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Header from './Header';

function Caroussel() {
  return (
    <section className="overflow-auto relative">
      <div className="absolute top-0 w-full z-10">
         <Header />
      </div>
     

      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 2000 }}
        effect="fade"
      >
        <SwiperSlide>
          <div className="caroussel bg-black relative">
            <img
              src="/public/imagefont1.jpg"
              alt="image de fond"
              className="imagefont h-[1000px] w-full object-cover"
            />
            <div className="text-slider absolute top-1/2 transform -translate-y-1/2 w-full text-center">
              <h1>Bienvenue sur le site web de gestion des travaux pratiques</h1>
              <div className="h-[5px] bg-blue-700 mx-auto w-20"></div>
              <p>Pour vous inscrire à vos séances de Travaux Pratiques en toute sérénité</p>
              <button>Commencer</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="caroussel relative">
            <img
              src="/public/imagefont2.jpg"
              alt="image de fond"
              className="imagefont h-[1000px] w-full object-cover"
            />
            <div className="text-slider absolute top-1/2 transform -translate-y-1/2 w-full text-center">
              <h1>Bienvenue sur le site web de gestion des travaux pratiques</h1>
              <div className="h-[5px] bg-blue-700 mx-auto w-20"></div>
              <p>Pour vous inscrire à vos séances de Travaux Pratiques en toute sérénité</p>
              <button>Commencer</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Caroussel;
