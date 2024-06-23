import React from "react";
import Heading from "../../Components/Heading";

const index = () => {
  return (
    <section class="thumbnail-wrapper bg-light bg-gradient">
      <div class="container">
        <Heading
          className="mb-4"
          title={"Plan an unforgettable trip from your city"}
        />
      </div>
      <div class="container tablet-container">
        <div class="thumbnail-row row w-100">
          <a class="thumbnail-small text-decoration-none" href={void 0}>
            <figure>
              <img
                src="https://www.veenaworld.com/assets/images/home-new/hub-ahmedabad.jpg"
                alt="hub-ahmedabad"
              />
            </figure>
            <div class="thumbnail-small-content">
              <p>Tour Packages from</p>
              <h3>Ahmedabad</h3>
              <div class="thumbnail-small-meta">
                <span>18 tours</span>
              </div>
            </div>
          </a>
          <a class="thumbnail-small text-decoration-none" href={void 0}>
            <figure>
              <img
                src="https://www.veenaworld.com/assets/images/home-new/hub-bangalore.jpg"
                alt="hub-ahmedabad"
              />
            </figure>
            <div class="thumbnail-small-content">
              <p>Tour Packages from</p>
              <h3>Surat</h3>
              <div class="thumbnail-small-meta">
                <span>12 tours</span>
              </div>
            </div>
          </a>
          <a class="thumbnail-small text-decoration-none" href={void 0}>
            <figure>
              <img
                src="https://www.veenaworld.com/assets/images/home-new/hub-kolkata.jpg"
                alt="hub-ahmedabad"
              />
            </figure>
            <div class="thumbnail-small-content">
              <p>Tour Packages from</p>
              <h3>Rajkot</h3>
              <div class="thumbnail-small-meta">
                <span>10 tours</span>
              </div>
            </div>
          </a>
          <a class="thumbnail-small text-decoration-none" href={void 0}>
            <figure>
              <img
                src="https://www.veenaworld.com/assets/images/home-new/hub-mumbai.jpg"
                alt="hub-ahmedabad"
              />
            </figure>
            <div class="thumbnail-small-content">
              <p>Tour Packages from</p>
              <h3>Mumbai</h3>
              <div class="thumbnail-small-meta">
                <span>4 tours</span>
              </div>
            </div>
          </a>
          <a class="thumbnail-small text-decoration-none" href={void 0}>
            <figure>
              <img
                src="https://www.veenaworld.com/assets/images/home-new/hub-pune.jpg"
                alt="hub-ahmedabad"
              />
            </figure>
            <div class="thumbnail-small-content">
              <p>Tour Packages from</p>
              <h3>Pune</h3>
              <div class="thumbnail-small-meta">
                <span>7 tours</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default index;
