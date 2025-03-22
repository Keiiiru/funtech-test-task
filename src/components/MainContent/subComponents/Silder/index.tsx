import { useEffect, useRef } from "react";
import "./index.sass";
import Card from "./subComponents/Card";
import FirstImage from "../../../../assets/images/first-image.jpeg";
import { ArrowLeftIcon } from "../../../../assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../../../assets/icons/ArrowRightIcon";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper";

const Slider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const originalCards = [
    { id: 1, img: FirstImage },
    { id: 2, img: FirstImage },
    { id: 3, img: FirstImage },
    { id: 4, img: FirstImage },
    { id: 5, img: FirstImage },
  ];

  const cards = [...originalCards, ...originalCards, ...originalCards];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="slider">
      <h1 className="slider__header">Weekly - Top NFT</h1>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        spaceBetween={30}
        watchSlidesProgress={true}
        watchOverflow={true}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2.3,
            spaceBetween: 30,
          },

          768: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },

          1025: {
            slidesPerView: 6,
            spaceBetween: 40,
          },

          1441: {
            slidesPerView: 10,
            spaceBetween: 40,
          },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <Card img={card.img} />
          </SwiperSlide>
        ))}
      </Swiper>

      <nav className="slider__navigation">
        <button className="slider__button-prev" ref={prevRef}>
          <ArrowLeftIcon />
        </button>
        <button className="slider__button-next" ref={nextRef}>
          <ArrowRightIcon />
        </button>
      </nav>
    </div>
  );
};
export default Slider;
