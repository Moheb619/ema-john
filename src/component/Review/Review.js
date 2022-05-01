import React, { useEffect, useState } from "react";
import { clearTheCart, getStoredCart, removeFromDb } from "../../utilities/fakedb";
import fakeData from "../../fakeData/products.JSON";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
import happyImage from "../../images/giphy.gif";
const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrder] = useState(false);
  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key != productKey);
    setCart(newCart);
    removeFromDb(productKey);
  };
  const handlePlaceOrder = () => {
    setCart([]);
    setOrder(true);
    clearTheCart();
  };
  useEffect(() => {
    fetch(fakeData)
      .then((res) => res.json())
      .then((data) => {
        const saveCart = getStoredCart();
        const productKey = Object.keys(saveCart); //keys from savecart
        const cartProduct = productKey.map((cnt) => {
          const product = data.find((pd) => pd.key === cnt);
          product.quantity = saveCart[cnt];
          return product;
        });
        setCart(cartProduct);
      });
  }, []);
  let thankyou;
  if (orderPlaced) {
    thankyou = <img src={happyImage} alt="Thank You" />;
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((pd) => (
          <ReviewItem prod={pd} removeProduct={removeProduct} key={pd.key}></ReviewItem>
        ))}
        {thankyou}
      </div>
      <div className="cart-container px-2">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="main-button">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
