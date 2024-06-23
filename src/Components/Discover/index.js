import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import "swiper/css/bundle";

import image1 from "../Assets/images/shlh2-thb.jpg";

const index = () => {
  const params = {
    slidesPerView: 1,

    // centeredSlides: true,
    spaceBetween: 30,
    // slidesPerGroup: 1,
    // loop: true,
    // loopFillGroupWithBlank: true,
    // pagination: {
    //   clickable: true,
    //   el: ".swiper-pagination", // Connect pagination dots to Swiper
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  };
  return (
    <section class="customiseExperience  py-5 bg-dark text-white">
      <div class="container customiseExperience-container">
        <div>
          <div class="d-flex flex-wrap customiseDiv">
            <div class="col-12 col-lg-6 order-2 order-lg-1 d-flex align-items-center pe-lg-5 pe-md-3 pe-0">
              <div class="slideshow-container">
                <video className="banner-video w-100 rounded" autoPlay muted loop>
                  <source
                    src="https://videos.pexels.com/video-files/3002384/3002384-hd_1280_720_25fps.mp4"
                    type="video/mp4"
                  />
                </video>

                <div class="custom-carousel-arrows">
                  <div class="arrow left"></div>
                  <div class="arrow right"></div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 order-1 order-lg-2 d-flex align-items-center">
              <div class="">
                <h2 class="">
                  Discover the World, <br />
                  specially curated for you!
                </h2>
                <p class="first-para" className="my-lg-4 my-3">
                  Our exclusive customized holidays division can cater to every
                  travel need: hotel, air tickets, VISA, sightseeings, transfer
                  or the entire package, all designed keeping in mind your
                  interests!
                </p>
                <p class="">
                  <strong class="">
                    Tell us what you want and we will design it for you.
                  </strong>
                </p>
                <div class="d-flex enquiry flex-row align-items-center">
                  <button class="btn btn-outline-primary" tabindex="0">
                    Enquire now
                  </button>
                  <span class="px-3 py-3 py-lg-0">OR</span>
                  <h3 className="">
                    <a
                      href="tel:+91 81530 08330"
                      class="tel-no d-flex align-items-center text-white"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="#FFF"
                        xmlns="http://www.w3.org/2000/svg"
                        class="mx-2"
                      >
                        <path
                          d="M18.6784 15.4015C18.6784 15.7075 18.6075 16.022 18.457 16.328C18.3066 16.634 18.1118 16.923 17.8551 17.195C17.4213 17.654 16.9433 17.9855 16.4033 18.198C15.8721 18.4105 15.2967 18.521 14.677 18.521C13.7741 18.521 12.8092 18.317 11.7911 17.9005C10.7731 17.484 9.75508 16.923 8.7459 16.2175C7.72787 15.5035 6.76295 14.713 5.84229 13.8375C4.93049 12.9535 4.10721 12.027 3.37246 11.058C2.64656 10.089 2.06229 9.12 1.63738 8.1595C1.21246 7.1905 1 6.264 1 5.38C1 4.802 1.10623 4.2495 1.31869 3.7395C1.53115 3.221 1.86754 2.745 2.33672 2.32C2.90328 1.7845 3.52295 1.521 4.17803 1.521C4.4259 1.521 4.67377 1.572 4.89508 1.674C5.12524 1.776 5.32885 1.929 5.4882 2.15L7.54197 4.9295C7.70131 5.142 7.81639 5.3375 7.89606 5.5245C7.97574 5.703 8.02 5.8815 8.02 6.043C8.02 6.247 7.95803 6.451 7.8341 6.6465C7.71901 6.842 7.55082 7.046 7.33836 7.25L6.66557 7.9215C6.56819 8.015 6.52393 8.1255 6.52393 8.2615C6.52393 8.3295 6.53279 8.389 6.55049 8.457C6.57705 8.525 6.60361 8.576 6.62131 8.627C6.78065 8.9075 7.05508 9.273 7.44459 9.715C7.84295 10.157 8.26787 10.6075 8.72819 11.058C9.20623 11.5085 9.66655 11.925 10.1357 12.3075C10.5961 12.6815 10.9767 12.9365 11.2777 13.0895C11.322 13.1065 11.3751 13.132 11.437 13.1575C11.5079 13.183 11.5787 13.1915 11.6584 13.1915C11.8088 13.1915 11.9239 13.1405 12.0213 13.047L12.6941 12.4095C12.9154 12.197 13.1279 12.0355 13.3315 11.9335C13.5351 11.8145 13.7387 11.755 13.96 11.755C14.1282 11.755 14.3052 11.789 14.5 11.8655C14.6948 11.942 14.8984 12.0525 15.1197 12.197L18.0498 14.1945C18.28 14.3475 18.4393 14.526 18.5367 14.7385C18.6252 14.951 18.6784 15.1635 18.6784 15.4015Z"
                          stroke="#595959"
                          stroke-width="1.2"
                          stroke-miterlimit="10"
                          class=""
                        ></path>
                        <path
                          d="M15.6072 7.47073C15.6072 6.96073 15.1911 6.17873 14.5714 5.54123C14.0049 4.95473 13.2524 4.49573 12.5088 4.49573"
                          stroke="#595959"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class=""
                        ></path>
                        <path
                          d="M18.7055 7.471C18.7055 4.1815 15.9347 1.521 12.5088 1.521"
                          stroke="#595959"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class=""
                        ></path>
                      </svg>
                      <span class="">+91 81530 08330</span>
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
