// import React from "react";
import { Link } from "react-router-dom";
import GoogleLoginComp from "../../components/GoogleLogin/googleLoginComp";
const Login = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10">
        <div className="text-3xl">Sign in</div>

        {/* for google button  */}
        <div className="my-3 flex mx-auto mt-[20px] bg-white gap-2 rounded-2xl  w-[100%] text-black cursor-pointer">
          <GoogleLoginComp />
        </div>

        {/* for line  */}
        <div className="flex items-center gap-2">
          <div className="border-b-1 border-gray-400 w-[45%]" /> <div>or</div>{" "}
          <div className="border-b-1 border-gray-400 w-[45%]" />
        </div>

        {/* login form  */}
        <div className=" flex flex-col gap-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="Password">Password</label>
            <input
              type="text"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Password"
            />
          </div>
        </div>

        {/* sign in button  */}
        <div className="w-full bg-blue-800 text-white py-3 px-4 rounded-xl cursor-pointer my-5 text-center ">
          Sign in
        </div>
      </div>

      <div className="mt-4 mb-10">
        New to Linkdin?{" "}
        <Link to={"/signUp"} className="text-blue-800">
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Login;
