// import React from "react";



import { Link } from "react-router-dom";
import GoogleLoginComp from "../../components/GoogleLogin/googleLoginComp";

export const LandingPage = (props) => {
  return (
    <div className="md:flex justify-between px-5 my-4  py-[50px] md:pl-[90px]">
      <div className="md:w-[50%]">
        <div className="text-4xl mx-auto text-gray-500">
          Welcome To Your Professional Community
        </div>
        <div className="my-3 flex mx-auto mt-[20px]  gap-2 w-[70%] text-black cursor-pointer">
          <GoogleLoginComp changeLoginValue={props.changeLoginValue} />
        </div>
        <Link
          to={"/login"}
          className="flex  mx-auto mt-[20px] py-2 px-2 bg-white gap-2 rounded-3xl w-[70%] items-center justify-center text-black hover:bg-gray-100 border-2 cursor-pointer "
        >
          Sign in with email
        </Link>
        <div className="mx-auto mb-4 text-sm w-[70%] mt-6">
          By clicking Continue to join or sign in, you agree to{" "}
          <span className="text-blue-800 cursor-pointer hover:underline">
            LinkdIn's User Agreement
          </span>
          ,{" "}
          <span className="text-blue-800 cursor-pointer hover:underline">
            Privacy Policy
          </span>
          , and{" "}
          <span className="text-blue-800 cursor-pointer hover:underline">
            Cookie Policy
          </span>
          .
        </div>
        <Link
          to={"/signUp"}
          className="mx-auto text-center mb-4 text-lg w-[70%] mt-4"
        >
          New to Linkdin?{" "}
          <span className="text-blue-800 cursor-pointer hover:underline">
            Join now
          </span>
        </Link>
      </div>

      {/* right side image kept in landing page */}

      <div className="md:w-[45%] h-120">
        <img
          src={
            "https://mahadmanpower.in/wp-content/uploads/2025/05/3202-e1746695426601.jpg"
          }
          alt="image"
          className="w-full h-full rounded-2xl"
        />
      </div>
    </div>
  );
};
export default LandingPage;
