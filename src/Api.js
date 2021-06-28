var axios = require("axios");

var data = JSON.stringify({ registrationNumber: "LR15XNB" });
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
