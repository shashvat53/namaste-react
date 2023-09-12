import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState([]);

  // Whenever state variable is update, react triggers a reconciliation cycle(re-render the componenet)
  // console.log("Body re-render");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter Restaurant Name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRes = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilterData(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-res"
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
        {filterData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
