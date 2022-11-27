import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { SignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {
    setError("");
    SignIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center h-[600px]">
      <div>
        <h2 className="text-3xl ">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"></label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
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
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <br />
          <input
            className="btn btn-neutral w-full"
            value="Login"
            type="submit"
          />
          <div>{error && <p className="text-red-500">{error}</p>}</div>
        </form>
        <p>
          Create an account?
          <Link className="text-secondary" to="/signup">
            Click Here
          </Link>
        </p>
        <br />
        <button className="btn btn-outline">Continue With Google</button>
      </div>
    </div>
  );
};

export default Login;
