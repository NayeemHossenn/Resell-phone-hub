import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookedModal from "./BookedModal/BookedModal";
import ProductList from "./ProductList";

const CategoryItems = () => {
  const products = useLoaderData();
  const [items, setItems] = useState(null);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-4">
        {products.map((product) => (
          <ProductList
            key={product._id}
            product={product}
            setItems={setItems}
          ></ProductList>
        ))}
      </div>
      {items && <BookedModal items={items} setItems={setItems}></BookedModal>}
    </div>
  );
};

export default CategoryItems;
