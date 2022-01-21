import React, { useEffect, useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData/products.JSON";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
const Shop = () => {
  const value = Math.floor(Math.random() * 71);
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(fakeData)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.slice(value, value + 10));
      });
  }, []);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((pd) => (
          <Product handleAddProduct={handleAddProduct} prod={pd}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
