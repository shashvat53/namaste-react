import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resid } = useParams();

  console.log(resid);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resid);
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };
  if (resInfo === null) {
    return (
      <div className="body">
        <h1>Loading...</h1>
      </div>
    );
  }

  const { name, cuisines, areaName } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  //   console.log(itemCards);

  return (
    <div className="body">
      <h1>{name}</h1>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <br />
      <h3>Menu</h3>
      {itemCards.map((card) => (
        <li key={card.card.info.id}>
          {card.card.info.name} -{" Rs. "}
          {card.card.info.defaultPrice / 100 || card.card.info.price / 100}
        </li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
