// import { ITEM_IMG_CDN } from "../utils/constants";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = (items) => {
  //   console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      <div className="w-full text-left">
        {items.items.map((item) => (
          <div
            className="border-b-2 border-gray-400 p-3 my-3 flex justify-between"
            key={item.card.info.id}
          >
            <div>
              <span className="text-lg">{item.card.info.name}</span>
              <br />
              <span>
                ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}{" "}
              </span>
            </div>

            <div className="relative">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  item.card.info.imageId
                }
                className="w-[118px] rounded "
              />
              <button
                className="absolute right-[20px] bottom-0 p-[2px_18px] bg-white shadow-lg rounded"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
