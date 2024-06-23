// src/NotFound.js
import React from "react";
import "./NotFound.scss";
import { Button } from "reactstrap";
import notfound from "../Assets/images/404.svg";
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="svg-container">
        <img src={notfound} alt="" className="w100" width={700} />
      </div>
      <Button color="primary" href="/">
        Go Home
      </Button>
    </div>
  );
};

export default NotFound;
