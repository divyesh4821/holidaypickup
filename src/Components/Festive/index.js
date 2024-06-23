// CardComponent.js
import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import image1 from "../Assets/images/shlh2-thb.jpg";
import OwlCarouselComponent from "../Slider";
import { Link } from "react-router-dom";

const cardsData = [
  {
    id: "KLHL",
    title: "Highlights of Kerala",
    price: "₹30,000",
    duration: "6 Days | 22 Departures",
    img: 'https://images.unsplash.com/photo-1707992505279-c1f098a030fe?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image path
  },
  {
    id: "STUM",
    title: "Indore Ujjain Mandu",
    price: "₹35,000",
    duration: "5 Days | 14 Departures",
    img: 'https://images.unsplash.com/photo-1709027832720-044821e93dee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image path
  },
  {
    id: "APDV",
    title: "Vizag Dindi Araku Valley Borra Caves",
    price: "₹52,000",
    duration: "7 Days | 7 Departures",
    img: 'https://images.unsplash.com/photo-1647870089235-3c438c6992d5?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image path
  },
  {
    id: "KAKC",
    title: "Coastal Karnataka",
    price: "₹62,000",
    duration: "8 Days | 10 Departures",
    img: 'https://images.unsplash.com/photo-1596829568009-bc436aac1b63?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image path
  },
];
const CardComponent = () => {
  return (
    <section className="Festive-area text-white py-5">
      <Container className="position-relative z-1">
        <h1 className="text-center my-4">Even more Incredible in the Rains!</h1>
        {/* <h3 className="text-center text-warning mb-4">DEKHO APNA DESH</h3> */}
        <Row className="my-4">
          {cardsData.map((card) => (
            <Col key={card.id} md={4} lg={3} className="mb-2 h-100">
              <div className="box-card">
                <img src={card.img} alt={card.title} className="card-img-top" />
                <div className="card-body bg-white p-2 rounded-2 rounded-top-0">
                  <h2>{card.title}</h2>
                  <div className="d-flex justify-content-between">
                    <small className="mb-2 text-muted">{card.duration}</small>
                    <span>{card.price}</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center my-4">
          <Link to={'/packages'}><Button color="btn btn-outline-secondary">View More</Button></Link>
        </div>
      </Container>
    </section>
  );
};

export default CardComponent;
