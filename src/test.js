const axios = require("axios");
import axios from "axios";

axios
  .post(
    "http://35.232.138.198:8000/testimonial/",
    {
      // Data to be sent in the request body

      action: 1,
      content_json: { Header: "Introduction Of Python" },
    },
    {
      headers: {
        "Content-Type": "application/json", // Adjust content type as per your requirement
      },
    },
    {
      // Configuration options
      withCredentials: true,
    }
  )
  .then((response) => {
    // Handle the response
    console.log("working");
    console.log(response.data);
  })
  .catch((error) => {
    // Handle any errors
    console.log(error);
    console.log("error");
  });
