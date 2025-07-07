// import React from 'react'
import ProfileCard from '../../components/ProfileCard/profileCard';
import Card from '../../components/Card/card';
// import Post from '../../components/Post/post';
import Advertisement from '../../components/Advertisement/advertisement';
import Image from "../../Image/ayush-image.jpg"

const Notifications = () => {
  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100 justify-center">
      {/* the left part card for feeds  */}
      <div className="w-[21%] sm-block sm:w-[21%] py-5 ">
        <div className="h-fit">
          <ProfileCard />
        </div>
      </div>

      {/* the middle part card for feeds  */}

      <div className="w-[00%] py-5 sm:w-[50%]">
        <div>
          <Card padding={0}>
            <div className="w-full">
              {/* for each notifications */}
              <div
                className={`border-b-1 cursor-pointer flex items-center border-gray-300 p-3`}
              >
                <img
                  src={Image}
                  alt=""
                  className="rounded-4xl cursor-pointer w-15 h-15"
                />
                <div className="mx-4 flex-wrap text-blue-700">
                  Ayush have send your connection request , follow ths Guy{" "}
                </div>
              </div>

              {/* for each notifications */}
              <div
                className={`border-b-1 cursor-pointer flex items-center border-gray-300 p-3`}
              >
                <img
                  src={Image}
                  alt=""
                  className="rounded-4xl cursor-pointer w-15 h-15"
                />
                <div className="mx-4 flex-wrap text-blue-700">
                  Ayushi have send your accept request , follow ths Guy{" "}
                </div>
              </div>

              {/* for each notifications */}
              <div
                className={`border-b-1 cursor-pointer flex items-center border-gray-300 p-3`}
              >
                <img
                  src={Image}
                  alt=""
                  className="rounded-4xl cursor-pointer w-15 h-15"
                />
                <div className="mx-4 flex-wrap text-blue-700">
                  Ayush have send your comment on your post , follow ths Guy{" "}
                </div>
              </div>

              {/* for each notifications */}
              <div
                className={`border-b-1 cursor-pointer flex items-center border-gray-300 p-3`}
              >
                <img
                  src={Image}
                  alt=""
                  className="rounded-4xl cursor-pointer w-15 h-15"
                />
                <div className="mx-4 flex-wrap text-blue-700">
                  Ayush have send your share your profile with someone , follow
                  ths Guy{" "}
                </div>
              </div>

              {/* for each notifications */}
              <div
                className={`border-b-1 cursor-pointer flex items-center border-gray-300 p-3`}
              >
                <img
                  src={Image}
                  alt=""
                  className="rounded-4xl cursor-pointer w-15 h-15"
                />
                <div className="mx-4 flex-wrap text-blue-700">
                  Ayush have send your share your profile with someone , follow
                  ths Guy{" "}
                </div>
              </div>

              {/* for each notifications */}
              <div
                className={`border-b-1 cursor-pointer flex items-center border-gray-300 p-3`}
              >
                <img
                  src={Image}
                  alt=""
                  className="rounded-4xl cursor-pointer w-15 h-15"
                />
                <div className="mx-4 flex-wrap text-blue-700">
                  Ayush have send your share your profile with someone , follow
                  ths Guy{" "}
                </div>
              </div>

              {/* for each notifications */}
              <div
                className={`border-b-1 cursor-pointer flex items-center border-gray-300 p-3`}
              >
                <img
                  src={Image}
                  alt=""
                  className="rounded-4xl cursor-pointer w-15 h-15"
                />
                <div className="mx-4 flex-wrap text-blue-700">
                  Ayush have send your share your profile with someone , follow
                  ths Guy{" "}
                </div>
              </div>

              {/* for each notifications */}
              <div
                className={`border-b-1 cursor-pointer flex items-center border-gray-300 p-3`}
              >
                <img
                  src={Image}
                  alt=""
                  className="rounded-4xl cursor-pointer w-15 h-15"
                />
                <div className="mx-4 flex-wrap text-blue-700">
                  Ayush have send your share your profile with someone , follow
                  ths Guy{" "}
                </div>
              </div>

              {/* for each notifications */}
              <div
                className={`border-b-1 cursor-pointer flex items-center border-gray-300 p-3`}
              >
                <img
                  src={Image}
                  alt=""
                  className="rounded-4xl cursor-pointer w-15 h-15"
                />
                <div className="mx-4 flex-wrap text-blue-700">
                  Ayush have send your share your profile with someone , follow
                  ths Guy{" "}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* the right part card for feeds  */}
      <div className="hidden md:flex md:w-[21%]">
        <div className="sticky top-7 ">
          <Advertisement />
        </div>
      </div>
    </div>
  );
}

export default Notifications