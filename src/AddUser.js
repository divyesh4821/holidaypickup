import React, { useState } from "react";
import { db, collection, addDoc } from "./firebase";

const AddUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    qualification: "",
    birthday: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), formData);
      alert("User added successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        age: "",
        qualification: "",
        birthday: "",
        city: "",
        state: "",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="qualification"
        placeholder="Qualification"
        value={formData.qualification}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="birthday"
        placeholder="Birthday"
        value={formData.birthday}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        required
      />
      <button type="submit">
        Add User
      </button>
    </form>
  );
};

export default AddUser;
