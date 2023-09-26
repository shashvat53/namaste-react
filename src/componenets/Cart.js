import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);
  return (
    <div className="w-6/12 mx-auto mt-[20px]">
      <div>
        <button
          className="p-[4px_12px] bg-white shadow-md rounded-lg mb-2"
          onClick={handleClearCart}
        >
          Clear All
        </button>
        {cartItem.length === 0 && (
          <h1 className="text-2xl font-semibold text-center pt-[40px]">
            Your Cart is Empty!
          </h1>
        )}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
