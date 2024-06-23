import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper's core styles (needed for all Swiper components)
import "swiper/css/navigation"; // Import Swiper Navigation module styles
import "swiper/css/pagination"; // Import Swiper Pagination module styles
import "swiper/css/scrollbar"; // Import Swiper Scrollbar module styles

const OwlCarouselComponent = (props) => {
  const { slidetoshow, items, autoplay } = props;

  const params = {
    slidesPerView: slidetoshow,
    autoplay: autoplay,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      clickable: true,
      el: ".swiper-pagination", // Connect pagination dots to Swiper
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: slidetoshow,
      },
    },
  };

  return (
    <Swiper {...params}>
      {items &&
        items.map((item, index) => (
          <SwiperSlide key={index} className="position-relative">
            <img
              className="w-100 h-auto"
              src={item.imageUrl}
              alt={`Slide ${index + 1}`}
            />
            <div className="bottom-0 p-2 rounded-2 rounded-top-0 top-0 opacity width-100 bg-white">
              <h4 className="mb-2 text-capitalize">{item.title}</h4>
              <p className="my-2">{item.days}</p>
              <div className="d-flex gap-3 justify-content-start">
                <b className="h5">₹{item.price}</b>
                <span>
                  ₹<strike>{item.disc}</strike>
                </span>
              </div>
              {/* <a href="tel:9825845723">Contact</a> */}
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default OwlCarouselComponent;
