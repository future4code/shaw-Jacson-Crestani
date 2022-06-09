import axios from "axios";
import React from "react";

const getAllUsers = () => {
  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
  const headers = {
    headers: {
      Authorization: 'jacson-crestani-shaw'
    }
  }
  axios
  .get(url, headers)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err.message.data);
  })
}




