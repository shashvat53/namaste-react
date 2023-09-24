import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, open }) => {
  // const [showItems, setShowItems] = useState(false);

  const clickHandler = () => {
    open();
  };
  // console.log(data);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-3 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={clickHandler}
        >
          <span className="text-lg font-medium">
            {data.title} ({data.itemCards.length})
          </span>
          {showItems ? <span>⬆️</span> : <span>⬇️</span>}
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
