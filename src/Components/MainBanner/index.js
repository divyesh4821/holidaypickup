// src/components/Banner.js

import React from "react";
import "./Banner.scss";
import logo from "../Assets/images/logo.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container h-100 w-100">
        <video className="banner-video" autoPlay={true} muted loop>
          <source
            src="https://videos.pexels.com/video-files/3015510/3015510-hd_1280_720_24fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* <div className="row"> */}
        <div className="banner-content position-relative z-9 h-100 d-flex justify-content-center align-items-center flex-column">
          <img src={logo} alt="" width={200} />
          <h1>Welcome to the Holiday Pickup</h1>
          <h2 className="text-capitalize">
            Hurray Let's Travel on this Holiday
          </h2>
          <p className="lh-lg">
            At TravelExplore, we believe that travel is more than just a
            journey.
          </p>
          <button className={"btn btn-outline-secondary"}>Discover More</button>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Banner;
