import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = (props) => {
  const { name, img, seller, stock, price } = props.prod;
  return (
    <div className="product">
      <div className="product-image">
        <img src={img} alt="productImage" />
      </div>
      <div className="product-details">
        <h4>{name}</h4>
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left in stock- Order now</small>
        </p>
        <button
          onClick={() => {
            {
              props.handleAddProduct(props.prod);
            }
          }}
          className="main-button"
        >
          <span className="shoppingCartIcon">
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
