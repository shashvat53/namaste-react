import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  let [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState([]);

  // Whenever state variable is update, react triggers a reconciliation cycle(re-render the componenet)
  // console.log("Body re-render", listOfRestaurant);
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

  const { logedInUser, setUserName } = useContext(UserContext);

  // const onlineStatus = useOnlineStatus();
  // if (onlineStatus === false) {
  //   return <h1>Please Check Your Internet 🟥</h1>;
  // }

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="w-full py-12">
      <div className="body max-w-[1400px] mx-auto">
        <div className="search flex justify-between items-center mb-6">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter Restaurant Name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="border border-[#ccc] p-[4px_12px] rounded-l-lg focus:outline-none"
            />
            <button
              className="border border-[#F7B922] p-[4px_12px] rounded-r-lg bg-[#F7B922] text-white"
              onClick={() => {
                // console.log(searchText);
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
            className=" border border-[#F7B922] p-[4px_12px] rounded-lg bg-[#F7B922] text-white"
            onClick={() => {
              // filltered restaurant
              topres = listOfRestaurant.filter((res) => res.info.avgRating > 4);
              // console.log(topres);
              setListOfRestaurant(topres);
              // setFilterData(topres);
            }}
          >
            Top rated Restaurant
          </button>
          <div>
            <label>logedIn: </label>
            <input
              className="border border-black p-2"
              value={logedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="res-container flex flex-wrap gap-6">
          {filterData.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

// 8982544673
// 6263773716
