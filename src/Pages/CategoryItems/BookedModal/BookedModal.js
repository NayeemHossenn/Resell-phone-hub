import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookedModal = ({ items, setItems }) => {
  const { title, Original_price } = items;
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booked = {
      PhoneModel: title,
      price,
      name,
      email,
      phone,
      location,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booked),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setItems(null);
          toast.success("booked successfully");
        }
        console.log(data);
      });
  };

  return (
    <div>
      <input type="checkbox" id="book-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="book-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{title}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mt-5">
            <input
              type="text"
              name="price"
              value={Original_price}
              disabled
              className="input w-full"
            />

            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled
              placeholder="User Name"
              className="input w-full"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="email"
              className="input w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input w-full"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input w-full"
            />
            <br />
            <input
              className="btn btn-accent text-white"
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookedModal;
