
import Card from "../Card/card";
import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Post = ({ profile }) => {
  let [seeMore, setSeeMore] = useState(false);
  const [comment, setComment] = useState(false);

  const handleSendComment = (e) => {
    e.preventDefault();
  };

  let desc = ` Full Stack Developer with hands-on experience in both front-end and
        back-end technologies. Proficient in HTML, CSS, JavaScript, React,
        Node.js, Express, and MongoDB. Skilled in building responsive web
        applications, RESTful APIs, and integrating databases. Passionate about
        clean code, scalable systems, and continuous learning.`;

  return (
    <Card padding={0}>
      <div className="flex gap-3 p-4">
        <div className="w-12 h-12 rounded-4xl">
          <img
            src="src/images/ayush-image.jpg"
            alt=""
            className="w-12 h-12 rounded-4xl border-2 border-white cursor-pointer"
          />
        </div>
        <div>
          <div className="text-lg font-semibold">Ayush Kumar</div>
          <div className="text-xs text-gray-500">
            Full Stack Developer - @Alphonic
          </div>
        </div>
      </div>

      {/* ---------------------Description add  */}
      <div className="text-md p-4 my-3 whitespace-pre-line flex-grow">
        {seeMore ? desc : `${desc.slice(0, 70)}.....`}{" "}
        <span
          onClick={() => setSeeMore((prev) => !prev)}
          className="cursor-pointer text-gray-500"
        >
          {seeMore ? "See Less" : "See More"}
        </span>
      </div>

      {/* -----------------------------POST IMAGE ON FEED ------------------------- */}

      <div className="w-[100%] h-[350px]">
        <img
          src="https://workspace.digital/wp-content/uploads/2018/06/thumb-image.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>

      {/* ------------------LIKES COMMENT SHARE  PAGE-------------------------- */}

      <div className="my-2 p-4 flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <ThumbUpIcon sx={{ color: "blue", fontSize: 15 }} />{" "}
          <div className="text-sm text-gray-600"> 1K Likes</div>
        </div>

        <div className="flex gap-1 items-center">
          <div className="text-sm text-gray-600"> 500 Comments</div>
        </div>
      </div>

      {/* BUTTON SECTION  */}

      {
         !profile && (
        <div className="flex p-1">
          <div className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100">
            {" "}
            <ThumbUpIcon sx={{ color: "blue", fontSize: 20 }} />{" "}
            <span>Like</span>
          </div>

          {/* ------comment icon  */}
          <div
            onClick={() => setComment(true)}
            className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100"
          >
            {" "}
            <CommentOutlinedIcon sx={{ fontSize: 20 }} /> <span>Comment</span>
          </div>

          {/* --------share icon */}

          <div className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100">
            {" "}
            <SendOutlinedIcon sx={{ color: "blue", fontSize: 20 }} />{" "}
            <span>Share</span>
          </div>
        </div>
      )}

      {/* -------------FOR COMMENT type, KARNE KE LIYE  */}

      {comment && (
        <div className="p-4 w-full">
          <div className="flex gap-2 items-center">
            <img
              src="src/images/ayush-image.jpg"
              alt=""
              className="rounded-4xl  h-9 w-9 border-white cursor-pointer"
            />
            <form className="w-full flex gap-2" onSubmit={handleSendComment}>
              <input
                type="text"
                placeholder="Add a comment...."
                className="w-full border-1 py-3 px-5 rounded-3xl hover:bg-gray-100"
              />
              <button
                type="submit"
                className="cursor-pointer bg-blue-800 text-white rounded-full py-1 px-4"
              >
                Send
              </button>
            </form>
          </div>

          {/* show comment --------- kisne kya likha */}
          <div className="w-full p-4">
            <div className="my-4">
              <div className="flex gap-3">
                <img
                  src="src/images/ayush-image.jpg"
                  alt=""
                  className="rounded-4xl  h-7 w-7 border-white cursor-pointer"
                />
                <div className="cursor-pointer">
                  <div className="text-md">Ayush Kumar</div>
                  <div className="text-sm text-gray-500">
                    @Alphonic Frontend Developer
                  </div>
                </div>
              </div>
              <div className="px-11 my-2">
                {" "}
                superb Bro , what's a build a frame
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Post;
