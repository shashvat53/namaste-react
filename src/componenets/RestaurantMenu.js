import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const resInfo = useRestaurantMenu(resid);
  const [showIndex, setShowIndex] = useState(0);

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

  // console.log(
  //   resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="body text-center py-12">
      <h1 className="text-xl font-bold">{name}</h1>
      <h4 className="text-lg">{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <br />
      <h3 className="text-xl font-bold">Menu</h3>
      {categories.map((c, index) => (
        <RestaurantCategory
          key={c.card.card.title}
          data={c.card.card}
          showItems={index === showIndex ? true : false}
          open={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

// 41
