import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: booked = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  // const { data: booked = [] } = useQuery({
  //   queryKey: ["bookings", user?.email],
  //   queryFn: async () => {
  //     const res = await fetch(url, {
  //       headers: {
  //         authorization: `bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     });
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  return (
    <div>
      <h2 className="text-xl mb-5">My Bookings</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>name</th>
              <th>title</th>
              <th>price</th>
              <th>pay</th>
            </tr>
          </thead>
          <tbody>
            {booked.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.PhoneModel}</td>
                <td>{booking.price}</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
