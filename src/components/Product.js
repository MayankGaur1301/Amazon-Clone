import React from "react";
import "../components-css/product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, image, price, rating }) => {

  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {                    //item is basically a payload.
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="products_img">
        <img src={image} className="product_image" />
      </div>
      <div className="product_details">
        <p className="title">{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p>⭐</p>;
            })}
        </div>
        <button className="add_to_basket" onClick={addToBasket}>
          Add To Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
