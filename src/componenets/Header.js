import { LOGO_CDN_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  console.log("Header render");
  const [value, setValue] = useState("Log in");

  // if no dependancy array => useEffect is called after Every render
  // if dependancy array is epmty [] => useEffect is called on initial render (just once)
  // useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={LOGO_CDN_URL} className="log" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <li>
              <button
                className="btn"
                onClick={() => {
                  value === "Log in" ? setValue("Log out") : setValue("Log in");
                }}
              >
                {value}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
