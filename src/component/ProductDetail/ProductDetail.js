import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import fakeData from "../../fakeData/products.JSON";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
const ProductDetail = () => {
  const { productKey } = useParams();
  const [selectedProduct, setSelectedProduct] = useState([]);
  useEffect(() => {
    fetch(fakeData)
      .then((res) => res.json())
      .then((data) => {
        const prod = data.find((pd) => pd.key === productKey);
        setSelectedProduct(prod);
      });
  }, [productKey]);
  return (
    <div>
      <Product showCartButton={false} prod={selectedProduct}></Product>
    </div>
  );
};

export default ProductDetail;
