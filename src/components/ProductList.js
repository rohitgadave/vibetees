import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";
import downShoulderGreyImage from "../assets/products/down_sholder_grey.jpg"; // Adjust the path
import downShoulderPinkImage from "../assets/products/down_sholder_pink.jpg";
import downShoulderWhiteImage from "../assets/products/down_sholder_white.jpg";
import downShoulderRedImage from "../assets/products/down_sholder_red.jpg";

const products = [
  {
    id: 1,
    name: "Down Shoulder Grey",
    description: "Color: Grey | Size: M,L,XL",
    image: downShoulderGreyImage,
  },
  {
    id: 2,
    name: "Down Shoulder Pink",
    description: "Color: Pink | Size: M,L,XL",
    image: downShoulderPinkImage,
  },
  {
    id: 3,
    name: "Down Shoulder White",
    description: "Color: Pink | Size: M,L,XL",
    image: downShoulderWhiteImage,
  },
  {
    id: 4,
    name: "Down Shoulder Red",
    description: "Color: Red | Size: M,L,XL",
    image: downShoulderRedImage,
  },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
