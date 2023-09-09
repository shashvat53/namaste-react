import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  let [listOfRestaurant, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            // filltered restaurant
            listOfRestaurant = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(listOfRestaurant);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
