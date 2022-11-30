import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../../../assets/404not.jpg";

const ErrorElement = () => {
  const error = useRouteError();
  return (
    // <div className="">
    //   <h2 className=" text-center text-warning text-4xl font-bold">
    //     Error Occured!!!!!
    //   </h2>
    //   {error && (
    //     <div>
    //       <h4 className=" text-center text-red-400 test-2xl font-bold">
    //         {error.statusText || error.message}
    //       </h4>
    //       <h4 className=" text-center text-red-600 text-2xl">{error.status}</h4>
    //     </div>
    //   )}
    // </div>

    <div class="flex items-center justify-center w-screen h-screen">
      <div class="px-4 lg:py-12">
        <div class="lg:gap-4 lg:flex">
          <div class="flex flex-col items-center justify-center md:py-24 lg:py-32">
            {/* <h1 class="font-bold text-blue-600 text-9xl">404</h1> */}
            <p class="mb-2 text-xl font-bold text-center text-gray-800 md:text-4xl">
              <span class="text-red-500">Oops!</span> Page not found
            </p>
            <p class="mb-8 text-center text-red-500 text-3xl">
              {error.statusText || error.message} || {error.status}
            </p>

            <Link to="/" class="px-6 py-2 btn btn-info bg-base-100">
              Go home
            </Link>
          </div>
          <div class="mt-4">
            <img src={img} alt="img" class="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorElement;
