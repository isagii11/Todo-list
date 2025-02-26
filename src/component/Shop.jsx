import  { useState } from "react";
import ProductItem from "./ProductItem";

const Shop = () => {
  let [product] = useState({
    name: "iphone 7",
    price: 100000,
    description: "8GB ram with 128GB",
  });
  return (
    <div>
      <h1> Welcome to my shop </h1>
      <ProductItem product={product}/>
    </div>
  );
};

export default Shop;
