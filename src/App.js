import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Contactus from "./Components/Contactus";
import Notfound from "./Components/Notfound";
import Allpackages from "./Components/Allpackages";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.scss";
import UserData from "./Components/Userform/UserData";
import AboutUs from "./Components/Aboutus";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/packages" element={<Allpackages />} />
          <Route path="/admin/userdata" element={<UserData />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
