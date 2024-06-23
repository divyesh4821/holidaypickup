import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Container,
  Button,
} from "reactstrap";
import Heading from "../Heading";
import Header from "../Header";
import Footer from "../Footer";

const CreatePlace = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const querySnapshot = await getDocs(collection(db, "places"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPlaces(data);
    };
    fetchPlaces();
  }, []);

  const handleEnquiry = (place) => {
    const phoneNumber = "+919824584572";
    const message = `Hi, I'm interested in the "${place.placename}" package and want to know more details about the package.
    \nPlace: ${place.placename}
    \n${place.description}
    \nDuration: ${place.duration}
    \nPrice: ₹${place.price}`
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    const a = document.createElement("a");
    a.href = whatsappURL;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.click();
  };

  return (
    <div>
      <Header />
      <Container>
        <Heading title={"Explore our all packages"} />
        <Row>
          {places.map((place) => (
            <div key={place.id} className="col-md-6 col-lg-4 mb-3">
              <Card className="h-100">
                <CardImg
                  className="m-0"
                  width="100%"
                  src={place.image}
                  alt={place.placename}
                />
                <CardBody>
                  <CardTitle tag="h3">{place.placename}</CardTitle>
                  <CardText>{place.description}</CardText>
                  <CardText className="mb-2">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        <h6 className="m-0 fs-5">₹{place.price}</h6>
                        <strike>{place.discountPrice}</strike>
                      </div>
                      <small className="mb-2 text-muted">
                        {place.duration}
                      </small>
                    </div>
                  </CardText>
                  <button
                    className="w-auto btn btn-outline-primary"
                    onClick={() => handleEnquiry(place)}
                  >
                    Enquiry
                  </button>
                </CardBody>
              </Card>
            </div>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default CreatePlace;
