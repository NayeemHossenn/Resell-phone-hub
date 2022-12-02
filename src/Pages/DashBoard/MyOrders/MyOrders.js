import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `https://resale-phone-server-nayeemhossenn.vercel.app/bookings?email=${user?.email}`;

  const { data: booked = [], refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(
      `https://resale-phone-server-nayeemhossenn.vercel.app/bookings/${id}`,
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
      <h2 className="text-xl text-blue-500 mb-5">My Orders</h2>
      <div className="overflow-x-auto ">
        <table className="table w-full  ">
          <thead>
            <tr>
              <th>name</th>
              <th>title</th>
              <th>price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {booked.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.PhoneModel}</td>
                <td>{booking.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="text-xl text-red-500"
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

export default MyOrders;
