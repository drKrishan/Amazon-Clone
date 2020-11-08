import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import Rating from "./Rating";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  //vinoth
  //console.log("this is basket", basket);
  const addToBasket = () => {
    //Diapatch Items
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
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
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <Rating rating={rating} />
      </div>

      <img src={image} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
