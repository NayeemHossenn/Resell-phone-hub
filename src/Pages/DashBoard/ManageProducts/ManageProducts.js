import React from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const ManageProducts = () => {
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        "https://resale-phone-server-nayeemhossenn.vercel.app/products"
      );
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = (id) => {
    fetch(
      `https://resale-phone-server-nayeemhossenn.vercel.app/products/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log(data);
          toast.success("deleted syccessfully");
          refetch();
        }
      });
    console.log(id);
  };
  return (
    <div>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <th>{product.name}</th>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="text-2xl text-red-600"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
