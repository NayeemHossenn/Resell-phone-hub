import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSignIn = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success("user created successfully");
        reset();
        const profile = {
          displayName: data.name,
        };
        updateUserProfile(profile)
          .then(() => {
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center h-[800px]">
      <div>
        <h2 className="text-3xl ">SignUp</h2>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"></label>
            <input
              type="name"
              {...register("name", { required: "name is required" })}
              placeholder="Enter Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
            <label className="label"></label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"></label>
            <input
              type="password"
              {...register("password", { required: "password is required" })}
              placeholder="Enter Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <br />
          <input
            className="btn btn-neutral w-full"
            value="SignUp"
            type="submit"
          />
        </form>
        <p>
          Already have an account?
          <Link className="text-secondary" to="/login">
            Login Here
          </Link>
        </p>
        <br />
        <button className="btn btn-outline w-full">Continue With Google</button>
      </div>
    </div>
  );
};

export default SignUp;
