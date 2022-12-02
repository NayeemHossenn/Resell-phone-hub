import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const { data: categoriesItems = [], isLoading } = useQuery({
    queryKey: ["categoriesItems"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categoriesList");
      const data = await res.json();
      return data;
    },
  });

  const handleaddProduct = (data) => {
    const products = {
      name: data.product,
      price: data.price,
      phone: data.phone,
      location: data.location,
      categories: data.categories,
      description: data.description,
      Year_of_purchase: data.purchase,
      condition: data.category,
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("added successfully");
          navigate("/dashboard/manageProducts");
          <Loading></Loading>;
        }
        console.log(data);
      });
  };

  return (
    <div className="w-96 p-5">
      <h2 className="text-3xl mb-4">Add a Products</h2>
      <form onSubmit={handleSubmit(handleaddProduct)}>
        <div className="form-control w-full max-w-xs grid gap-3 md:grid-cols-2 ">
          <input
            type="text"
            {...register("product", { required: true })}
            placeholder="Producte"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            {...register("price", { required: true })}
            placeholder="price"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            {...register("phone", { required: true })}
            placeholder="Enter Your phone"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            {...register("location", { required: true })}
            placeholder="location"
            className="input input-bordered w-full max-w-xs"
          />
          {/* <input
            type="text"
            {...register("categories", { required: true })}
            placeholder="select category"
            className="input input-bordered w-full max-w-xs"
          /> */}

          <select
            className="bg-gray-100 p-2"
            {...register("categories", { required: true })}
          >
            {categoriesItems.map((category) => (
              <option value={category.title} key={category._id}>
                {" "}
                {category.title}
              </option>
            ))}

            {/* <option value="Excelent"> ExcellentCondition</option>
            <option value="Excelent">Good Condition</option>
            <option value="Fair ">Fair Condition</option> */}
          </select>

          <input
            type="text"
            {...register("description", { required: true })}
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            {...register("purchase", {
              required: true,
            })}
            placeholder="years of purchase"
            className="input input-bordered w-full max-w-xs"
          />

          <select
            className="bg-gray-300 p-2"
            {...register("category", { required: true })}
          >
            <option value="Excelent"> ExcellentCondition</option>
            <option value="Excelent">Good Condition</option>
            <option value="Fair ">Fair Condition</option>
          </select>
        </div>

        <br />
        <input
          className="btn btn-neutral w-full"
          value="Add a Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProducts;
