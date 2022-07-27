import axios from "axios";
import React, { useEffect, useState } from "react";
// import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import { useProtectedPage } from "../../Hooks/useProtectedPage";


const Feed = () => {
  useProtectedPage();
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = () => {
    axios.get(`BASE_URL/restaurants`, {
      headers: {
        auth: localStorage.getItem("token"),
      }
    }
        .then((res) => {
          console.log(res.data);
          setRestaurants(res.data.restaurants);
        }
        )
        .catch((err) => {
          console.log(err);
        })
    );
  }

  useEffect(() => {
    getRestaurants();
  }, []);
  return ( 

  <div>Feed</div>

  )
}

export default Feed;