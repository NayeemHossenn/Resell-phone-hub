import { useQuery } from "@tanstack/react-query";
import React from "react";

const ProductList = ({ product, setItems }) => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        "https://resale-phone-server-nayeemhossenn.vercel.app/products"
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-5 pt-10">
          <img src={product.img} alt="" className="rounded-xl w-1/2" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.title}</h2>
          <p className="text-xl">Resale Price:{product.Resale_price}</p>
          <p>Original Price:{product.Original_price}</p>
          <p>Location:{product.location}</p>
          <p>Years Of Use:{product.use}</p>
          <p>Seller Name:{product.sellersName}</p>
          <p>Posted time:{product.postedTime}</p>

          <div className="card-actions">
            <label
              htmlFor="book-modal"
              className="btn text-white"
              onClick={() => setItems(product)}
            >
              Book now
            </label>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl mt-5">
        {products.map((addeedProduct) => (
          <div className="card-body items-center text-center  w-96 bg-base-100 shadow-xl mt-5">
            <h2 className="card-title">{addeedProduct.name}</h2>
            <p className="text-xl">Price:{addeedProduct.price}</p>
            <p>location:{addeedProduct.location}</p>
            <p>Categories:{addeedProduct.categories}</p>
            <p>Description:{addeedProduct.description}</p>
            <p>Condition:{addeedProduct.condition}</p>
            <p>Years Of Use:{addeedProduct.Year_of_purchase}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
