import React from "react";

const ProductList = ({ product }) => {
  return (
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
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
