import { useState, useEffect } from "react";
import "./App.css";
import NavbarV1 from "./components/NavbarV1/navbarV1";
import LandingPage from "./pages/LandingPage/landingPage";
import Footer from "./components/Footer/footer";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp/signUp";
import Login from "./pages/Login/login";
// import GoogleLoginComp from "./components/GoogleLogin/googleLoginComp";
import NavbarV2 from "./components/NavbarV2/navbarV2";
import Feeds from "./pages/Feeds/feeds";
// import Post from "./components/Post/post";
import Employee from "./pages/Employee/employee";
import Resume from "./pages/Resume/resume";
import Messages from "./pages/Messages/messages";
import Notifications from "./pages/Notifications/notifications";
import Profile from "./pages/Profile/profile";
import AllActivities from "./pages/AllActivities/allActivities";
import SingleActivity from "./pages/SingleActivity/singleActivity";

// import axios from 'axios';

function App() {
  // const isLogin = false;
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));

  const changeLoginValue = (val) => {
    setIsLogin(val);
  };

  // useEffect(()=>{
  //   fetchData()
  // })

  return (
    <div className="bg-gray-100 w-[100%] h-[100%] box-border">
      {/* <NavbarV1 /> */}
      {isLogin ? <NavbarV2 /> : <NavbarV1 />}

      <Routes>
        <Route
          path="/"
          element={
            isLogin ? (
              <Navigate to={"/feeds"} />
            ) : (
              <LandingPage changeLoginValue={changeLoginValue} />
            )
          }
        />
        <Route
          path="/signUp"
          element={
            isLogin ? (
              <Navigate to={"/feeds"} />
            ) : (
              <SignUp changeLoginValue={changeLoginValue} />
            )
          }
        />
        <Route
          path="/login"
          element={
            isLogin ? (
              <Navigate to={"/feeds"} />
            ) : (
              <Login changeLoginValue={changeLoginValue} />
            )
          }
        />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id/activities" element={<AllActivities />} />
        <Route
          path="/profile/:id/activities/:postId"
          element={<SingleActivity />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
