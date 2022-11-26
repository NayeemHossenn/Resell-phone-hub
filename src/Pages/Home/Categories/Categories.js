import React, { useEffect, useState } from "react";

const Categories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div>
        <div className="text-center mt-8">
          <p className="text-2xl font-bold ">Resale Phone Categories</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {products.map((product) => (
            <div key={product._id}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={product.CatImg} alt="Shoes" className="w-1/2" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title ">{product.title}</h2>

                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">See All</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
