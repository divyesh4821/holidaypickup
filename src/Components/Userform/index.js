import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import Heading from "../Heading";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const docRef = await addDoc(collection(db, "userQueries"), {
        name,
        email,
        phone,
        description,
      });
      // Reset form fields after submission
      setName("");
      setEmail("");
      setPhone("");
      setDescription("");
      setSubmitting(false);
      setSubmittedSuccessfully(true);

      // Remove success message after 3 seconds
      setTimeout(() => {
        setSubmittedSuccessfully(false);
      }, 7000);

      // Optionally show a success message or redirect user
    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmitting(false);
    }
  };

  return (
    <div className="py-lg-5 py-4">
      <Heading title="Enter below details we'll contact you soon" />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone Number:</Label>
          <Input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            type="textarea"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </FormGroup>
        <div>
          <Button
            type="submit"
            color="primary"
            disabled={submitting}
            className="width-100 mx-auto"
          >
            {submitting ? "Submitting..." : "Submit"}
          </Button>
          {submittedSuccessfully && (
            <Alert color="success" className="mt-3">
              Your data has been submitted successfully!
            </Alert>
          )}
        </div>
      </Form>
    </div>
  );
};

export default UserForm;
