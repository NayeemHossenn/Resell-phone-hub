import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    console.log(data);
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
