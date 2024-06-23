import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Container,
  Col,
} from "reactstrap";

const CreatePlace = () => {
  const [places, setPlaces] = useState([]);
  const [placename, setPlacename] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState("");

  // Fetch places from Firestore on component mount
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        // Update existing place
        await updateDoc(doc(db, "places", editId), {
          placename,
          duration,
          price,
          description,
          image,
          discountPrice,
        });
        setEditMode(false);
        setEditId("");
      } else {
        // Add new place
        const docRef = await addDoc(collection(db, "places"), {
          placename,
          duration,
          price,
          description,
          image,
          discountPrice,
        });
        console.log("Document written with ID: ", docRef.id);
      }
      // Clear form fields after submission
      setPlacename("");
      setDuration("");
      setPrice("");
      setDescription("");
      setImage("");
      setDiscountPrice("");
      // Refresh places data
      const updatedPlaces = await getDocs(collection(db, "places"));
      const updatedData = updatedPlaces.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPlaces(updatedData);
    } catch (error) {
      console.error("Error adding/updating document: ", error);
    }
  };

  const handleEdit = async (place) => {
    setEditMode(true);
    setEditId(place.id);
    setPlacename(place.placename);
    setDuration(place.duration);
    setPrice(place.price);
    setDescription(place.description);
    setImage(place.image);
    setDiscountPrice(place.discountPrice);
  };

  const handleDelete = async (placeId) => {
    if (window.confirm("Are you sure you want to delete this place?")) {
      try {
        await deleteDoc(doc(db, "places", placeId));
        // Refresh places data after deletion
        const updatedPlaces = await getDocs(collection(db, "places"));
        const updatedData = updatedPlaces.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlaces(updatedData);
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  return (
    <div>
      <h2>Create a New Place</h2>
      <form onSubmit={handleSubmit}>
        <table className="table">
          <tbody>
            <tr>
              <td>Place Name:</td>
              <td>
                <input
                  type="text"
                  value={placename}
                  onChange={(e) => setPlacename(e.target.value)}
                  className="form-control"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Duration:</td>
              <td>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="form-control"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-control"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                  cols={40}
                />
              </td>
            </tr>
            <tr>
              <td>Image URL:</td>
              <td>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <td>Discount Price:</td>
              <td>
                <input
                  type="text"
                  value={discountPrice}
                  onChange={(e) => setDiscountPrice(e.target.value)}
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <Button type="submit" color="primary">
                  {editMode ? "Update Place" : "Add Place"}
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <hr />

      <h2>Places</h2>
      <Container>
        <Row>
          {console.log(places)}
          {places.map((place) => (
            <div key={place.id} className="col-md-6 col-lg-4 mb-3">
              <Card>
                <CardImg
                  className="m-0"
                  width="100%"
                  // style={{ maxWidth: "200px" }}
                  src={place.image}
                  alt={place.placename}
                />
                <CardBody>
                  <CardTitle tag="h3">{place.placename}</CardTitle>
                  <CardText>{place.description}</CardText>
                  <CardText>
                    <div class="d-flex justify-content-between">
                      <small class="mb-2 text-muted">{place.duration}</small>
                      <div class="d-flex">
                        <span>₹{place.price}</span>
                        <strike>{place.discountPrice}</strike>
                      </div>
                    </div>
                  </CardText>
                  <Button color="info" onClick={() => handleEdit(place)}>
                    Edit
                  </Button>{" "}
                  <Button color="danger" onClick={() => handleDelete(place.id)}>
                    Delete
                  </Button>
                </CardBody>
              </Card>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CreatePlace;
