import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Header from "../Header";
import Footer from "../Footer";
import Contactarea from "../../Components/Contactarea";
import Ourexperience from "../../Components/ourexperience";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Container className="mt-5">
        {/* Introduction Section */}
        <Row>
          <Col>
            <h1 className="mb-4">About Holiday Pickup</h1>
            <p>
              Welcome to Holiday Pickup, your premier destination for bespoke
              travel experiences. Established with a passion for exploration and
              a commitment to exceptional service, Holiday Pickup is dedicated
              to crafting unforgettable journeys tailored to your unique
              preferences and interests. Whether you dream of relaxing on
              pristine beaches, embarking on thrilling adventures, or
              discovering vibrant cultures, we are here to make your travel
              dreams a reality.
            </p>
          </Col>
        </Row>

        {/* Mission and Vision Section */}
        <Row className="mt-5">
          <Col md={6}>
            <h3>Mission</h3>
            <p>
              Our mission at Holiday Pickup is to inspire and enrich lives
              through travel. We strive to create meaningful connections between
              people and places, offering transformative experiences that leave
              a lasting impact. By delivering personalized service, unwavering
              reliability, and unparalleled expertise, we aim to exceed
              expectations and ensure every journey with us is filled with joy,
              discovery, and unforgettable memories.
            </p>
          </Col>
          <Col md={6}>
            <h3>Vision</h3>
            <p>
              Our vision is to become the leading provider of bespoke travel
              solutions globally, recognized for innovation, integrity, and
              excellence. We aspire to set new standards in the travel industry
              by continuously evolving our offerings, embracing sustainability
              practices, and fostering a culture of customer-centricity. With a
              commitment to authenticity and a passion for exploration, we
              envision a world where every journey with Holiday Pickup is a
              journey of a lifetime.
            </p>
          </Col>
        </Row>

        {/* Our Team Section */}

        {/* Our Services Section */}
        <Row className="mt-5">
          <Col md={12}>
            <h3>Our Services</h3>
            <p>
              Holiday Pickup offers a wide range of personalized travel services
              designed to cater to every traveler's needs and preferences.
              Whether you're planning a family vacation, a romantic getaway, or
              a corporate retreat, we provide comprehensive travel solutions
              that ensure a seamless and enjoyable experience from start to
              finish.
            </p>
            <ul>
              <li>
                Customized Travel Packages: Tailored to your specific
                preferences and interests.
              </li>
              <li>
                Group Tours: Join like-minded travelers for shared experiences
                and camaraderie.
              </li>
              <li>
                Honeymoon Packages: Romantic escapes designed for newlyweds to
                celebrate love.
              </li>
              <li>
                Adventure Travel: Thrilling journeys to exotic destinations for
                adrenaline enthusiasts.
              </li>
              <li>
                Corporate Travel Solutions: Professional and efficient travel
                arrangements for businesses.
              </li>
              <li>
                Destination Weddings: Create unforgettable memories with a
                picture-perfect wedding abroad.
              </li>
              <li>
                Special Event Planning: From anniversaries to milestone
                celebrations, we handle every detail.
              </li>
              <li>
                Travel Insurance: Peace of mind with comprehensive travel
                insurance coverage.
              </li>
            </ul>
          </Col>
        </Row>

        {/* Why Choose Us Section */}
        <Row className="mt-5">
          <Col>
            <h3>Why Choose Us?</h3>
            <p>
              At Holiday Pickup, we are committed to delivering exceptional
              travel experiences with integrity, professionalism, and a personal
              touch. Here’s why travelers choose us:
            </p>
            <ul>
              <li>
                Expertise: Our team brings years of experience and deep
                knowledge of global destinations.
              </li>
              <li>
                Customization: Tailor-made itineraries to suit individual
                preferences and interests.
              </li>
              <li>
                Customer-Centric Approach: Dedicated support and personalized
                service throughout your journey.
              </li>
              <li>
                Quality and Reliability: Trusted partnerships with top hotels,
                airlines, and service providers.
              </li>
              <li>
                Value for Money: Competitive pricing and transparent billing
                with no hidden costs.
              </li>
              <li>
                Sustainability: Promoting responsible travel practices for a
                greener, more sustainable future.
              </li>
              <li>
                24/7 Support: Assistance and guidance available round-the-clock
                for peace of mind.
              </li>
              <li>
                Customer Satisfaction: Consistently high ratings and positive
                feedback from satisfied travelers.
              </li>
            </ul>
          </Col>
        </Row>

        {/* Contact Us Section */}
      </Container>
      <Ourexperience />
      <Container>
        <Row className="my-5">
          <Col>
            <h3>Contact Us</h3>
            <p>
              We are here to assist you with all your travel inquiries and
              bookings. Contact us today to start planning your next adventure
              with Holiday Pickup!
            </p>
          </Col>
        </Row>
      </Container>
      <Contactarea />
      <Footer />
    </div>
  );
};

export default AboutUs;
