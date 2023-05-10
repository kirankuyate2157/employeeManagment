import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const handleSubmit = async () => {
    try {
      const userData = {
        ID: "679",
        firstName: "ganesh",
        lastName: "jullyal",
        companyName: "dulerwr3rt..",
        email: "utuhe@gmail.com",
        password: "vdvdcdscass",
      };

      // Send data to API
      const response = await axios.post(
        "http://localhost:8080/api/v1/users",
        userData
      );

      // Handle successful response, if needed
      console.log(response.data);

      // Reset form fields
      // ...
    } catch (error) {
      // Handle error, if needed
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>Send POST Request</button>
    </div>
  );
};

export default Home;
