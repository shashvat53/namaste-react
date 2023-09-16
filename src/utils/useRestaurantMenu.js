import { MENU_API_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);
  // fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resid);
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
