import React from "react";
import Festive from "../../Components/Festive";
import Slider from "../../Components/Slider";
import OwlCarouselComponent from "../../Components/Slider";
import Heading from "../../Components/Heading";
import Ourexperience from "../../Components/ourexperience";
import Contactarea from "../../Components/Contactarea";
import Discover from "../../Components/Discover";
import Footer from "../../Components/Footer";
import ThumbnailPackage from "../../Components/ThumbnailPackage";
import Ourwork from "../../Components/Ourwork";
import icon1 from "../Assets/Icons/icon1.svg";

import { Col, Row } from "reactstrap";
import Banner from "../MainBanner";
import Header from "../Header";
import UserReviews from "../UserReview";
const index = () => {
  const tourDomestic = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mumbai",
      price: "45,000",
      disc: "25,000",
      days: "5 Days - 4 Nights",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1567005753256-c0529035b300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Goa",
      price: "35,000",
      disc: "15,000",
      days: "4 Days - 3 Nights",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Kerala",
      price: "55,000",
      disc: "20,000",
      days: "6 Days - 5 Nights",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Rajasthan",
      price: "65,000",
      disc: "30,000",
      days: "7 Days - 6 Nights",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Agra",
      price: "40,000",
      disc: "10,000",
      days: "3 Days - 2 Nights",
    },
  ];

  const tourInternational = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Paris",
      price: "2,00,000",
      disc: "1,50,000",
      days: "8 Days - 7 Nights",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "London",
      price: "2,50,000",
      disc: "1,75,000",
      days: "9 Days - 8 Nights",
    },
    {
      imageUrl:
        "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dubai",
      price: "1,80,000",
      disc: "1,00,000",
      days: "6 Days - 5 Nights",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Switzerland",
      price: "3,00,000",
      disc: "2,00,000",
      days: "10 Days - 9 Nights",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Japan",
      price: "2,20,000",
      disc: "1,25,000",
      days: "7 Days - 6 Nights",
    },
  ];

  const bestofholiday = [
    {
      imagIcon: icon1,
      title: "Accommodation",
      detail:
        "Comfortable & convenient hotels cherry picked by our hotel management team",
    },
    {
      imagIcon: icon1,
      title: "All meals",
      detail: "Eat to your heart's content Breakfast. Lunch. Dinner.",
    },
    {
      imagIcon: icon1,
      title: "On-tour transport",
      detail:
        "Our itineraries include all rail, sea and road transport as part of the itinerary so you can enjoy tension free",
    },
    {
      imagIcon: icon1,
      title: "Tour managers",
      detail:
        "We have an exclusive team of 350 tour managers specialising in India and World tours",
    },
    {
      imagIcon: icon1,
      title: "Best value itinerary",
      detail:
        "Our dedicated product & destination research team spends hours curating the best value for money itineraries",
    },
    {
      imagIcon: icon1,
      title: "To and fro airfare",
      detail:
        "Holiday Pickup tours are inclusive of airfare from many hubs within India unless you pick the joining-leaving option",
    },
  ];

  return (
    <>
      <Header />
      <Banner />
      <Festive />
      <section className="bg-dark pt-lg-5 pt-md-4 pt-3 py-3">
        <div class="container">
          <div className="my-4">
            <OwlCarouselComponent
              slidetoshow={3}
              items={tourDomestic}
              autoplay={5000}
            />
          </div>
        </div>
      </section>
      <section className="bg-dark pb-lg-5 pb-md-4 pb-3">
        <div class="container-fluid">
          <div className=" ">
            <OwlCarouselComponent
              slidetoshow={4}
              items={tourInternational}
              autoplay={3000}
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-lg-5 py-md-4 py-3 bestofholiday">
        <div class="container">
          <Heading
            title={
              "Best of <span style='color: darkblue;'>Pickup Holiday</span> and what we provide"
            }
          />
          <Row className="g-5 my-3">
            {bestofholiday &&
              bestofholiday.map((dtl, index) => {
                return (
                  <Col lg={4} md={6} sm={12} key={index}>
                    <div className="bestValueBox-wrapper">
                      <div className="d-flex flex-start">
                        <div className="svgHolder d-flex justify-content-center align-items-center">
                          <img src={dtl.imagIcon} />
                        </div>
                        <div class="bestValueBox-title">
                          <h3>{dtl.title}</h3>
                          <p>{dtl.detail}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </div>
      </section>
      <UserReviews />
      <Ourexperience />
      <ThumbnailPackage />
      <Discover />
      <Contactarea />
      <Ourwork />
      <Footer />
    </>
  );
};

export default index;
