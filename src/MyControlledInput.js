import { useState } from "react";
import React from "react";
var axios = require("axios");

function MyControlledInput() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);

    var data = JSON.stringify({ registrationNumber: value });
    const key = "0gWfVJRZ5e5MJHZqoptgl9nFPyBQyqs228I2wTbS";

    var config = {
      method: "post",
      url: "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
      headers: {
        "x-api-key": key,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Car Registration </h2>
        <input value={value} type="text" onChange={onChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyControlledInput;
