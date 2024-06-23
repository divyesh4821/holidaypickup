import React from "react";
import Contactarea from "../../Components/Contactarea";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import UserForm from "../Userform";
const index = () => {
  return (
    <div>
      <Header />
      <UserForm />
      <Contactarea />
      <Footer />
    </div>
  );
};

export default index;
