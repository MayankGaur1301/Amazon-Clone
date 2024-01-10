import React from "react";
import amazonLogo from "../assets/47b7bdac4285ee24654ca7d68cf06351-removebg-preview.png";
import "../components-css/header.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { RiHandbagLine } from "react-icons/ri";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket }] = useStateValue();
  console.log(basket, "this is the basket")

  return (
    <nav className="header">
      <div className="header_logo">
        <Link className="logoLink" to="/">
          <img src={amazonLogo} alt="amazon" className="amazon_img" />
        </Link>
      </div>

      <div className="header_searchInput">
        <input
          type="text"
          className="searchInput"
          placeholder="Search amazon.in"
        />
        <AiOutlineSearch className="searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_options">
          <p>Hello</p>
          <Link to="/signin" className="navbar_options">
            Sign In
          </Link>
        </div>
        <div className="header_options">
          <p>Returns</p>
          <Link to="/orders" className="navbar_options">
            & Orders
          </Link>
        </div>
        <div className="header_options">
          <p>Your</p>
          <Link to="/prime" className="navbar_options">
            Prime
          </Link>
        </div>
        <div className="header_options">
          <Link to="/basket">
            <RiHandbagLine className="basket" />
          </Link>
          <sup>{basket?.length}</sup>
        </div>
      </div>
    </nav>
  );
};

export default Header;
