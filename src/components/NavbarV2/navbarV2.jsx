import { useState } from "react";
import "./navbarV2.css";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import CasesRoundedIcon from "@mui/icons-material/CasesRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import { useLocation, Link } from "react-router-dom";
import Image from "../../Image/ayush-image.jpg";
// import { Balcony } from "@mui/icons-material";

const NavbarV2 = () => {
  const [dropdown] = useState(false);
  const location = useLocation();

  return (
    // for navbar
    <div className=" bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-[100%] z-[1000]  ">
      {/* for navbar left part */}
      <div className="flex gap-2 items-center mx-35">
        <Link to={"/feeds"}>
          <img
            src={
              "https://img.freepik.com/premium-vector/blue-white-linkedin-icon-blue-background_462839-1656.jpg"
            }
            alt="Linkdin-Logo"
            className="w-7 h-7 "
          />
        </Link>

        {/* for searchBox  */}
        <div className="relative">
          <input
            type="text"
            className="searchInput w-69 bg-gray-100 rounded-sm h-10 px-4"
            placeholder="search"
          />
          {/* for dropdown list  */}
          {dropdown && (
            <div className="absolute w-69 mb-1 border-b-1 left-0 bg-gray-200 ">
              <div className="flex gap-2 items-center p-2">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6069/6069202.png"
                    alt=""
                    className="w-8 h-8 mb-1 border-b-1 rounded-full"
                  />
                </div>
                <div>AYUSH KUMAR</div>
              </div>

              {/* list 2  */}
              <div className="flex gap-2 items-center p-2">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6069/6069202.png"
                    alt=""
                    className="w-8 h-8 mb-1 border-b-1 rounded-full"
                  />
                </div>
                <div> SATYAM KUMAR</div>
              </div>

              {/* -------------------------------------------------------------- */}
            </div>
          )}
        </div>
      </div>

      {/* for creating navbar in right part  */}

      <div className="hidden gap-10 md:flex mr-15">
        {/* for icon  */}
        <Link
          to={"/feeds"}
          className="flex flex-col items-center cursor-pointer"
        >
          <HomeIcon
            // put the conditions about color our NavbarV2 to show.... be care
            sx={{ color: location.pathname === "/feeds" ? "black" : "gray" }}
          />

          {/* border lagaye hai apne icon ke niche  */}
          <div
            className={`text-sm text-gray-500 ${
              location.pathname === "/feeds" ? "border-b-3" : ""
            }`}
          >
            Home
          </div>
        </Link>
        {/* -------------------- */}

        <Link
          to={"/employee"}
          className="flex flex-col items-center cursor-pointer"
        >
          <GroupsIcon
            sx={{
              color: location.pathname === "/employee" ? "black" : "gray",
            }}
          />
          <div
            className={`text-sm text-gray-500 ${
              location.pathname === "/employee" ? "border-b-3" : ""
            }`}
          >
            Employee
          </div>
        </Link>
        {/* -------------------- */}

        <Link
          to={"/resume"}
          className="flex flex-col items-center cursor-pointer"
        >
          <CasesRoundedIcon
            sx={{ color: location.pathname === "/resume" ? "black" : "gray" }}
          />
          <div
            className={`text-sm text-gray-500 ${
              location.pathname === "/resume" ? "border-b-3" : ""
            }`}
          >
            Resume
          </div>
        </Link>
        {/* -------------------- */}

        <Link
          to={"/messages"}
          className="flex flex-col items-center cursor-pointer"
        >
          <EmailRoundedIcon
            sx={{ color: location.pathname === "/messages" ? "black" : "gray" }}
          />
          <div
            className={`text-sm text-gray-500 ${
              location.pathname === "/messages" ? "border-b-3" : ""
            }`}
          >
            Messages
          </div>
        </Link>
        {/* -------------------- */}

        <Link
          to={"/notifications"}
          className="flex flex-col items-center cursor-pointer"
        >
          <div>
            <NotificationImportantIcon
              sx={{
                color:
                  location.pathname === "/notifications" ? "black" : "gray",
              }}
            />{" "}
            <span className="p-1 rounded-full  text-sm bg-red-700 text-white">
              1
            </span>
          </div>
          <div
            className={`text-sm text-gray-500 ${
              location.pathname === "/notifications" ? "border-b-3" : ""
            }`}
          >
            Notifications
          </div>
        </Link>
        {/* -------------------- */}
        <Link
          to={"/profile"}
          className="flex flex-col items-center cursor-pointer"
        >
          <img src={Image} className="w-7 h-7 rounded-full" />
          <div className="text-sm text-gray-500">Profile</div>
        </Link>
      </div>
    </div>
  );
};

export default NavbarV2;
