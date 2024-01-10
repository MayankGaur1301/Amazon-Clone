import React from "react";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import "../components-css/basket.css";
import BasketItems from "./BasketItems";
import Subtotal from "./Subtotal";

const Basket = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="basket_container">
      {basket?.length === 0 ? (
        <div className="empty_para">
          <h2>Your Shopping basket Is Empty!</h2>
          <p style={{ textTransform: "capitalize" }}>
            <i>
              You have no items in your basket. to buy one or more items, click
            </i>
            <strong>"Add To basket"</strong> <i>next to the item.</i>
            <Link to="/">
              <button className="back_home_btn"> HOME PAGE</button>
            </Link>
          </p>
        </div>
      ) : (
        <div className="basket_items">
          <h2>Your basket Items</h2>

          {/* List out all of the basket item products */}
          {basket.map((item) => (
            <BasketItems
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Basket;
