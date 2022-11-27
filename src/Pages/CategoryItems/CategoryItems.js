import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductList from "./ProductList";

const CategoryItems = () => {
  const products = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-4">
      {products.map((product) => (
        <ProductList key={product._id} product={product}></ProductList>
      ))}
    </div>
  );
};

export default CategoryItems;
