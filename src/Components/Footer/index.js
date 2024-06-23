import React from "react";
import logo from "../Assets/images/logo.png";

const index = () => {
  return (
    <div class="blueFooter">
      <div class="container">
        <div class="d-flex flex-wrap linkDataSection py-5">
          <div class="col-12 col-xl-4 pe-lg-5 pe-3">
            <img alt="Holiday Pickup" src={logo} width={180} />
            <p className="my-4">
              We have an exclusive team of 50+ tour managers specialising in
              India and World tours
            </p>
          </div>
          <div class="col-12 col-xl-8 d-flex flex-wrap footer-links">
            <div class="col-12 col-md-4 px-0 px-md-3 ps-lg-0">
              <h3 class="title">Discover us</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="/contact">Contact us</a>
                </li>
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="#">Reviews</a>
                </li>
                <li>
                  <a href="/packages">our packages</a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-4 px-0 px-md-3 ps-lg-0">
              <h3 class="title">Support</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="/contact">Contact us</a>
                </li>
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="#">Reviews</a>
                </li>
                <li>
                  <a href="/packages">our packages</a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-4 px-0 px-md-3 ps-lg-0">
              <h3 class="title">Resources</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="/contact">Contact us</a>
                </li>
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="#">Reviews</a>
                </li>
                <li>
                  <a href="/packages">our packages</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="desclaimer">
          <p>
            <span>*Caution: Beware of Fake Promotions or Offers</span> *Please
            do not believe or engage with any promotional emails, SMS or
            Web-link which ask you to click on a link and fill in your details.
            All Holiday Pickup authorized email communications are delivered
            from domain <strong>@holidaypickup.com</strong> or{" "}
            <strong>@holidaypickup.in</strong> *Holiday Pickup bears no
            liability or responsibility whatsoever for any communication which
            is fraudulent or misleading in nature and not received from
            registered domain.
          </p>
        </div>
        <div class="termsSection d-flex flex-wrap align-items-center py-4 text-center">
          <div class="col-12 col-md-7 col-lg-8 col-xl order-md-1">
            <p class="mb-md-0 mb-3">
              © 2013 - 2024 Holiday Pickup Pvt Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
