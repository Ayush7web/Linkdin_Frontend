// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLoginComp from "../../components/GoogleLogin/googleLoginComp";
import { useState } from "react";
import { Password } from "@mui/icons-material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const baseUrl = import.meta.env.VITE_API_BASE_URL;




// ==================
const SignUp = (props) => {
  const navigate = useNavigate();

  const [registerField, setRegisterField] = useState({
    email: "",
    Password: "",
    f_name: "",
  });

  const handleInputField = (event, key) => {
    setRegisterField({ ...registerField, [key]: event.target.value });
  };

  const handleRegister = async () => {
    if (
      registerField.email.trim().length === 0 ||
      registerField.password.trim().length === 0 ||
      registerField.f_name.trim().length === 0
    ) {
      return toast.error("please fill all details");
    }

    await axios
      .post(`${baseUrl}/api/auth/register`, registerField)
      .then((res) => {
        // console.log(res)
        toast.success("you have registered successfully");
        setRegisterField({
          ...registerField,
          email: "",
          Password: "",
          f_name: "",
        });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.error);
      });
  };

  // ==============================================================================================================
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="text-4xl mb-5">
        {" "}
        Make the most of your professional life
      </div>

      {/* create a login form  */}
      <div className=" w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10">
        <div className=" flex flex-col gap-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={registerField.email}
              onChange={(e) => {
                handleInputField(e, "email");
              }}
              type="text"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="Password">Password</label>
            <input
              value={registerField.password}
              onChange={(e) => {
                handleInputField(e, "password");
              }}
              type="password"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Password"
            />
          </div>

          <div>
            <label htmlFor="Full Name">Full Name</label>
            <input
              value={registerField.f_name}
              onChange={(e) => {
                handleInputField(e, "f_name");
              }}
              type="text"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Full Name"
            />
          </div>
        </div>
        {/* Register button  */}
        <div
          onClick={handleRegister}
          className="w-full bg-blue-800 text-white py-3 px-4 rounded-xl cursor-pointer my-5 text-center "
        >
          Register
        </div>

        {/* for line  */}
        <div className="flex items-center gap-2">
          <div className="border-b-1 border-gray-400 w-[45%]" /> <div>or</div>{" "}
          <div className="border-b-1 border-gray-400 w-[45%]" />
        </div>
        {/* for google button  */}
        <div className="my-3 flex mx-auto mt-[20px] bg-white gap-2 rounded-2xl w-[100%] text-black cursor-pointer">
          {/* <img
            src={"/src/images/googleIcon.jpeg"}
            alt="googleLogo"
            className="w-15 mx-3 rounded-3xl"
          />
          sign in with google */}
          <GoogleLoginComp changeLoginValue={props.changeLoginValue} />
        </div>
      </div>

      <div className="mt-4 mb-10">
        Already on Linkdin?{" "}
        <Link to={"/login"} className="text-blue-800 cursor-pointer">
          Sign in
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
