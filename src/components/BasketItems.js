import React from "react";
import "../components-css/basketItems.css";
import { useStateValue } from "./StateProvider";

const BasketItems = ({ id, title, price, image, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <>
      <div className="basket_product">
        <div className="basket_details">
          <div className="product_image_basket">
            <img src={image} alt="" />
          </div>
          <div className="product_details_basket">
            <p className="product_title_basket">{title}</p>
            <p className="product_price_basket">
              <b>
                <small>$</small> {price}
              </b>
            </p>
            <p className="product_rating_basket">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </p>
            <button
              className="remove_from_basket_btn"
              onClick={removeFromBasket}
            >
              Remove From Basket
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default BasketItems;
