import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useJwtToken from "../../hooks/useJwtToken";

const Login = () => {
  const { SignIn, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [token] = useJwtToken(userEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // if (token) {
  //   navigate(from, { replace: true });
  // }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const handleLogin = (data) => {
    setError("");
    SignIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUserEmail(data.email);
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    // <div className="flex justify-center items-center h-[600px]">
    //   <div>
    //     <h2 className="text-3xl ">Login</h2>
    //     <form onSubmit={handleSubmit(handleLogin)}>
    //       <div className="form-control ">
    //         <label className="label"></label>
    //         <input
    //           type="email"
    //           {...register("email", { required: "Email is required" })}
    //           placeholder="Enter Your Email"
    //           className="input input-bordered "
    //         />
    //         {errors.email && (
    //           <p className="text-red-500">{errors.email?.message}</p>
    //         )}
    //       </div>
    //       <div className="form-control ">
    //         <label className="label"></label>
    //         <input
    //           type="password"
    //           {...register("password", { required: "password is required" })}
    //           placeholder="Enter Password"
    //           className="input input-bordered "
    //         />
    //         {errors.password && (
    //           <p className="text-red-500">{errors.password?.message}</p>
    //         )}
    //       </div>
    //       <br />
    //       <input
    //         className="btn btn-neutral w-full"
    //         value="Login"
    //         type="submit"
    //       />
    //       <div>{error && <p className="text-red-500">{error}</p>}</div>
    //     </form>
    //     <p>
    //       Create an account?
    //       <Link className="text-secondary" to="/signup">
    //         Click Here
    //       </Link>
    //     </p>
    //     <br />
    //     <button onClick={handleGoogleSignIn} className="btn btn-outline">
    //       Continue With Google
    //     </button>
    //   </div>
    // </div>

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
            <h2 className="text-3xl ">Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control ">
                <label className="label"></label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Enter Your Email"
                  className="input input-bordered "
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email?.message}</p>
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
            <button onClick={handleGoogleSignIn} className="btn btn-outline">
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
