import React from "react";
const ReviewItem = (props) => {
  const { name, quantity, key, price, img } = props.prod;
  const reviewItemStyle = {
    borderBottom: "1px solid black",
    marginBottom: "5px",
    paddingBottom: "5px",
    marginLeft: "200px",
  };
  return (
    <div className="product">
      <div className="product-image">
        <img src={img} alt="productImage" />
      </div>
      <div className="product-details" style={reviewItemStyle}>
        <h4>{name}</h4>
        <p>Quantity: {quantity}</p>
        <p>
          <small>${price}</small>
        </p>
        <br />
        <button
          onClick={() => props.removeProduct(key)}
          className="main-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
