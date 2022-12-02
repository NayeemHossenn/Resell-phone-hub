import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useJwtToken from "../../hooks/useJwtToken";

const SignUp = () => {
  const { createUser, updateUserProfile, providerLogin } =
    useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const [token] = useJwtToken(userEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();
  if (token) {
    navigate("/");
  }

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
            saveUser(data.name, data.email, data.role);
          })
          .catch((error) => console.log(error));
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://resale-phone-server-nayeemhossenn.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserEmail(email);
        navigate(from, { replace: true });
      });
  };

  return (
    <div className="hero  w-full">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            className="w-3/4"
            src="https://t4.ftcdn.net/jpg/04/28/75/97/360_F_428759715_jsOPITlaytE3QXc2yI1D4U6uwZdVGkRp.jpg"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
          <div>
            <h2 className="text-3xl ">SignUp</h2>
            <form onSubmit={handleSubmit(handleSignIn)}>
              <div className="form-control ">
                <label className="label"></label>

                <select {...register("role")}>
                  <option value="">Select role</option>
                  <option value="seller">Sellers</option>
                  <option value="buyer">buyers</option>
                </select>

                <input
                  type="name"
                  {...register("name", { required: "name is required" })}
                  placeholder="Enter Your Name"
                  className="input input-bordered mt-2 "
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email?.message}</p>
                )}
                <label className="label"></label>

                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Enter Your Email"
                  className="input input-bordered "
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password?.message}</p>
                )}
              </div>
              <div className="form-control ">
                <label className="label"></label>
                <input
                  type="password"
                  {...register("password", {
                    required: "password is required",
                  })}
                  placeholder="Enter Password"
                  className="input input-bordered "
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
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full"
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
