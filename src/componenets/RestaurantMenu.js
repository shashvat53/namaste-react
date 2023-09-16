import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const resInfo = useRestaurantMenu(resid);

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
