import { LOGO_CDN_URL } from "../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
