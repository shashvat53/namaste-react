import { LOGO_CDN_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // console.log("Header render");
  const onlineStatus = useOnlineStatus();
  const [value, setValue] = useState("Log in");

  const cartItem = useSelector((store) => store.cart.items);

  const { logedInUser } = useContext(UserContext);

  // if no dependancy array => useEffect is called after Every render
  // if dependancy array is epmty [] => useEffect is called on initial render (just once)
  // useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  return (
    <div className="header w-full shadow-lg">
      <div className="max-w-[1400px] mx-auto  flex justify-between items-center">
        <div className="">
          <img src={LOGO_CDN_URL} className="w-28" />
        </div>
        <div className="nav-items ">
          <ul className="flex  ">
            <li className="pl-8">Online Status:{onlineStatus ? "✅" : "❌"}</li>
            <li className="pl-8">
              <Link to="/">Home</Link>{" "}
            </li>
            <li className="pl-8">
              <Link to="/about">About Us</Link>
            </li>
            <li className="pl-8">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="pl-8">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="pl-8 font-bold text-xl">
              <Link to="/cart">Cart ({cartItem.length})</Link>
            </li>
            <li className="pl-8">
              <button
                className="border border-orange px-[8px]"
                onClick={() => {
                  value === "Log in" ? setValue("Log out") : setValue("Log in");
                }}
              >
                {value}
              </button>
            </li>
            <li className="pl-8">{logedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
