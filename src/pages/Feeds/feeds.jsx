import React, { useState, useEffect } from "react";
import Card from "../../components/Card/card";
import ProfileCard from "../../components/ProfileCard/profileCard";
import MissedVideoCallIcon from "@mui/icons-material/MissedVideoCall";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ArticleIcon from "@mui/icons-material/Article";
import Advertisement from "../../components/Advertisement/advertisement";
import Post from "../../components/Post/post";
import Modal from "../../components/Modal/modal";
import AddModal from "../../components/AddModal/addModal";
import Image from "../../Image/ayush-image.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
// import Loader from "../../components/Loader/loader";

const Feeds = () => {
  const [personalData, setPersonalData] = useState(null);

  const [post, setPost] = useState([]);

  const [addPostModal, setAddPostModal] = useState(false);

  // const fetchSelfData = async () => {
  //   await axios
  //     .get("http://localhost:5000/api/auth/self", { withCredentials: true })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.error("API error", err);
  //       toast.error(err?.response?.data?.error);
  //     });
  // };
  // setPersonalData(res.data.user);
  const fetchData = async () => {
    try {
      const [selfData, postData, token] = await Promise.all([
        await axios.get(
          `${baseUrl}/api/auth/self`,
          { token },
          {
            withCredentials: true,
          }
        ),
        await axios.get(`${baseUrl}/api/post/getAllPost`),
      ]);
      setPersonalData(selfData.data.user);
      localStorage.setItem("userInfo", JSON.stringify(selfData.data.user));

      setPost(postData.data.posts);
    } catch (err) {
      // console.log(err);
      toast.error(err?.response?.data?.error);
    }
  };

  useEffect(() => {
    // fetchSelfData();
    fetchData();
  }, []);

  const handleOpenPostModal = () => {
    setAddPostModal((prev) => !prev);
  };

  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100 justify-center">
      {/* the left part card for feeds  */}
      <div className="w-[21%] sm-block sm:w-[21%] py-5">
        <div className="h-fit">
          <ProfileCard data={personalData} />
          {/* data={personalData} */}
        </div>
        <div className="w-full my-5">
          <Card padding={1}>
            <div className="w-full flex justify-between">
              <div>Profile Viewers</div>
              <div className="text-blue-900">27</div>
            </div>

            {/* ------------------- */}
            <div className="w-full flex justify-between">
              <div>Post Impression</div>
              <div className="text-blue-900">1076</div>
            </div>
          </Card>
        </div>
      </div>

      {/* the middle part card for feeds  */}

      <div className="w-[100%] py-5 sm:w-[50%]  ">
        {/* post section  */}
        <div>
          <Card padding={1}>
            <div className="flex gap-2 items-center">
              <img
                src={Image}
                alt=""
                className="rounded-4xl  h-13 w-13 border-white cursor-pointer"
              />
              <div
                onClick={() => setAddPostModal(true)}
                className="w-full border-1 py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100"
              >
                Start a Post
              </div>
            </div>
            {/* create a panel  */}
            <div className="w-full flex mt-3">
              <div
                onClick={() => setAddPostModal(true)}
                className="flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100"
              >
                {" "}
                <MissedVideoCallIcon sx={{ color: "green" }} />
                Video
              </div>

              <div
                onClick={() => setAddPostModal(true)}
                className="flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100"
              >
                {" "}
                <AddPhotoAlternateIcon sx={{ color: "blue" }} />
                Photo
              </div>

              <div
                onClick={() => setAddPostModal(true)}
                className="flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100"
              >
                {" "}
                <ArticleIcon sx={{ color: "yellow" }} />
                Article
              </div>
            </div>
          </Card>
        </div>

        {/* for lining  */}
        <div className="border-b-1 border-gray-400 w-[100%] my-5"></div>
        <div className="w-full flex flex-col gap-5">
          {/* calling a post  */}
          <Post />
          <Post />
        </div>
      </div>

      {/* the right part card for feeds  */}
      <div className="w-[21%] py-5  md: block">
        <div>
          <Card padding={1}>
            <div className="text-xl">Linkdin News</div>
            <div className="text-gray-600">Top Stories</div>
            <div className="my-1">
              <div className="text-md">Buffet to remain Berkshire chair</div>
              <div className="text-xs text-gray-400">2h ago</div>
            </div>
            {/* ------------- */}
            <div className="my-1">
              <div className="text-md">Foreign investment surge again</div>
              <div className="text-xs text-gray-400">3h ago</div>
            </div>
          </Card>
        </div>

        <div className="my-5 sticky top-19">
          <Advertisement></Advertisement>
        </div>
      </div>
      {/* ------------------- calling modal----------------------- */}

      {addPostModal && (
        <Modal title={""} handleOpenPostModal={handleOpenPostModal}>
          <AddModal />
        </Modal>
      )}

      {/* <Loader /> */}
      <ToastContainer />
    </div>
  );
};

export default Feeds;
