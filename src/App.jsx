import "./App.css";
import NavbarV1 from "./components/NavbarV1/navbarV1";
import LandingPage from "./pages/LandingPage/landingPage";
import Footer from "./components/Footer/footer";
import { Routes, Route } from "react-router-dom";
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




function App() {
  const isLogin = true;

  return (
    <div className="bg-gray-100 w-[100%] h-[100%] box-border">
      {/* <NavbarV1 /> */}
      {isLogin ? <NavbarV2 /> : <NavbarV1/>  }

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
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
