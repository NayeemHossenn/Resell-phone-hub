import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const UserList = () => {
  const { data: allUser = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users?role=buyer");
      const data = await res.json();
      return data;
    },
  });

  const handleAdmin = (_id) => {
    fetch(`http://localhost:5000/users/admin/${_id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("make admin successfully");
          refetch();
        }
      });
  };

  const handleSeller = (_id) => {
    fetch(`http://localhost:5000/users/seller/${_id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("make seller successfully");
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
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
    <div className="bg-gray-200 p-4 rounded mt-5">
      <h2 className="text-3xl mb-5">All users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify Admin</th>
              <th>Verify </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  {user.role !== "admin" && (
                    <button
                      onClick={() => handleAdmin(user._id)}
                      className="text-primary"
                    >
                      Admin
                    </button>
                  )}
                </td>

                <td>
                  {user.role !== "seller" && (
                    <button
                      onClick={() => handleSeller(user._id)}
                      className="text-primary"
                    >
                      verify sellers
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-red-500"
                  >
                    Delete
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

export default UserList;
