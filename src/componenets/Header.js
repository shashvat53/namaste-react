import { LOGO_CDN_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  console.log("Header render");
  const [value, setValue] = useState("Log in");
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={LOGO_CDN_URL} className="log" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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
