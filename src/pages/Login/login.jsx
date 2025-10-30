import { Link, useNavigate } from "react-router-dom";
import GoogleLoginComp from "../../components/GoogleLogin/googleLoginComp";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
// const baseUrl = import.meta.env.VITE_API_BASE_URL;

const Login = (props) => {
  const navigate = useNavigate();
  const [loginField, setLoginField] = useState({ email: "", password: "" });

  const onChangeInput = (event, key) => {
    setLoginField({ ...loginField, [key]: event.target.value });
  };

  const handleLogin = async () => {
    if (
      loginField.email.trim().length === 0 ||
      loginField.password.trim().length === 0
    ) {
      toast.error("Please fill all credentials");
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginField,
        { withCredentials: true }
      );
      props.changeLoginValue(true);
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("userInfo", JSON.stringify(res.data.user));
      navigate("/feeds");
    } catch (err) {
      console.error(err);
      toast.error(
        err?.response?.data?.error || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10">
        <div className="text-3xl">Sign in</div>

        {/* Google button */}
        <div className="my-3 flex mx-auto mt-[20px] bg-white gap-2 rounded-2xl w-[100%] text-black cursor-pointer">
          <GoogleLoginComp changeLoginValue={props.changeLoginValue} />
        </div>

        {/* Line separator */}
        <div className="flex items-center gap-2">
          <div className="border-b border-gray-400 w-[45%]" />
          <div>or</div>
          <div className="border-b border-gray-400 w-[45%]" />
        </div>

        {/* Login form */}
        <div className="flex flex-col gap-4 mt-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={loginField.email}
              onChange={(e) => onChangeInput(e, "email")}
              type="email"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Email"
              autoComplete="username"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={loginField.password}
              onChange={(e) => onChangeInput(e, "password")}
              type="password"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>
        </div>

        {/* Sign in button */}
        <button
          type="button"
          onClick={handleLogin}
          className="w-full bg-blue-800 text-white py-3 px-4 rounded-xl cursor-pointer my-5 text-center"
        >
          Login
        </button>
      </div>

      <div className="mt-4 mb-10">
        New to Linkdin?{" "}
        <Link to="/signUp" className="text-blue-800">
          Join Now
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
