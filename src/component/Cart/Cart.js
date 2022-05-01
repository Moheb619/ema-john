import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  const total = formatNumber(props.cart.reduce((total, prod) => total + prod.price * prod.quantity, 0));
  let shipping = 0;
  if (total > 0) {
    shipping = 12.99;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 35) {
    shipping = 0;
  }
  const vat = formatNumber(total / 15);
  return (
    <div className="cart-container">
      <div className="cartHeading">
        <h2>Order Summery</h2>
        <p>Item Ordered: {props.cart.length}</p>
      </div>
      <p>
        <small>Product Price: ${total}</small>
      </p>
      <p>
        <small>Shipping Cost: ${shipping}</small>
      </p>
      <p>
        <small>Tax+VAT: ${vat}</small>
      </p>
      <p className="grandTotal">
        Total Price:$
        {formatNumber(total + shipping + vat)}
      </p>
      {props.children}
    </div>
  );
};

export default Cart;
