import React, { useEffect, useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData/products.JSON";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";
const Shop = () => {
  const value = Math.floor(Math.random() * 71);
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(fakeData)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.slice(value, value + 10));

        const savedCart = getStoredCart();
        const productKey = Object.keys(savedCart);
        const previousCart = productKey.map((pdKey) => {
          const product = data.find((pd) => pd.key === pdKey);
          product.quantity = savedCart[pdKey];
          return product;
        });
        setCart(previousCart);
        console.log(previousCart);
      });
  }, []);

  const handleAddProduct = (product) => {
    const sameProduct = cart.find((pd) => pd.key === product.key);
    let count = 1;
    let newCart;
    if (!sameProduct) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      product.quantity = sameProduct.quantity;
      const other = cart.filter((pd) => pd.key !== sameProduct.key);
      newCart = [...other, product];
    }
    setCart(newCart);
    addToDb(product.key);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((pd) => (
          <Product showCartButton={true} handleAddProduct={handleAddProduct} prod={pd} key={pd.key}></Product>
        ))}
      </div>
      <div className="cart-container px-2">
        <Cart cart={cart}>
          <Link to={"/review"} style={{ textDecoration: "none", color: "black" }}>
            <button className="main-button">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
