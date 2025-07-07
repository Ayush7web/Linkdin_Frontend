import { useState } from "react";
import Advertisement from "../../components/Advertisement/advertisement";
import Card from "../../components/Card/card";
import EditIcon from "@mui/icons-material/Edit";
import Post from "../../components/Post/post";
import AddIcon from "@mui/icons-material/Add";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Modal from "../../components/Modal/modal";
import ImageModal from "../../components/ImageModal/imageModal";
import EditinfoModal from "../../components/EditInfoModal/editinfoModal";
import AboutModal from "../../components/AboutModal/aboutModal";
import ExpModal from "../../components/ExpModal/expModal";
// import { CottageSharp } from "@mui/icons-material";
import MessageModal from "../../components/MessageModal/messageModal";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Image from "../../Image/ayush-image.jpg"

const Profile = () => {

  const id  = useParams();
  const [imageModal, setImageModal] = useState(true);
  const [circularImage, setCircularImage] = useState();
  const [infoModal, setInfoModel] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);
  const [expModal, setExpModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);

  const handleInfoModal = () => {
    setInfoModel((prev) => !prev);
  };

  const modalImageOpenClose = () => {
    setImageModal((prev) => !prev);
  };

  const handleOnClickCover = () => {
    setImageModal(true);
    setCircularImage(false);
  };

  const handleCircularImageOpen = () => {
    setImageModal(true);
    setCircularImage(true);
  };

  const handleAboutModal = () => {
    setAboutModal((prev) => !prev);
  };

  const handleExpModal = () => {
    setExpModal((prev) => !prev);
  };

  const handleMessageModal = () => {
    setMessageModal((prev) => !prev);
  };

  // const handleOnClickCover = () =>{
  //   setImageSetModal((prev) => !prev);
  // }

  // const circularOpenCloseImage = () =>{
  //   setImageSetModal((prev) => !prev);
  // }

  // const editDetails = () =>{
  //   setImageSetModal((prev) => !prev)
  // }

  return (
    <div className="  px-5 xl:px-50 py-9 mt-14 bg-gray-100  ">
      <div className="flex justify-between relative left-7">
        {/* left side main section */}

        <div className="w-full md:w-[70%]">
          <div>
            <Card padding={0}>
              <div className="w-full h-fit">
                <div className="relative w-full h-[200px]">
                  <div
                    onClick={handleOnClickCover}
                    className="cursor-pointer absolute top-3 right-3 bg-white rounded-full p-2 flex w-[35px] h-[35px] justify-center items-center"
                  >
                    <EditIcon />
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINDfdeyPKAoyBNb_RRLOHKa7nG7rH8deuqQ&s"
                    alt=""
                    className="w-full h-[200px] rounded-tr-lg rounded-tl-lg"
                  />
                  {/* entire image */}
                  <div
                    onClick={handleCircularImageOpen}
                    className="absolute object-cover top-29 left-6 z-10"
                  >
                    <img
                      src={Image}
                      alt=""
                      className="rounded-full border-2 border-white cursor-pointer w-30 h-30"
                    />
                  </div>
                </div>
                {/* --------------------------------------- */}

                <div
                  onClick={handleInfoModal}
                  className="mt-10 relative px-8 py-2"
                >
                  <div className="cursor-pointer absolute top-1 right-3 bg-white rounded-full p-2 flex w-[35px] h-[35px] justify-center items-center">
                    <EditIcon />
                  </div>
                  <div className="w-full">
                    <div className="text-2xl">Ayush Kumar</div>
                    <div className="text-gray-700">
                      I'm a full stack developer
                    </div>
                    <div className="text-gray-500 text-sm">Jaipur , India</div>
                    <div className="text-md text-blue-800 w-fit cursor-pointer hover:underline">
                      10k Connections
                    </div>
                    <div className="md:flex w-full justify-between">
                      <div className="my-5 flex gap-5">
                        <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold">
                          Open to{" "}
                        </div>
                        <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold">
                          Share{" "}
                        </div>
                        <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold">
                          Logout{" "}
                        </div>
                      </div>

                      <div className="my-5 flex gap-5">
                        <div
                          onClick={handleMessageModal}
                          className="cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold"
                        >
                          message{" "}
                        </div>
                        <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold">
                          connect{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* apart  */}

          <div className="my-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">About</div>
                <div className="cursor-pointer" onClick={handleAboutModal}>
                  <EditIcon />
                </div>
              </div>

              <div className="text-gray-700 text-md w-[80%]">
                This guide covers what full stack development is, why it’s
                crucial, and the skills and technologies you need to master it.
                You’ll also learn about the workflow stages and popular
                technology stacks in this field.This guide covers what full
                stack development is, why it’s crucial, and the skills and
                technologies you need to master it. You’ll also learn about the
                workflow stages and popular technology stacks in this field.This
                guide covers what full stack development is, why it’s crucial,
                and the skills and technologies you need to master it. You’ll
                also learn about the workflow stages and popular technology
                stacks in this field.This guide covers what full stack
                development is, why it’s crucial, and the skills and
                technologies you need to master it. You’ll also learn about the
                workflow stages and popular technology stacks in this field.
              </div>
            </Card>
          </div>

          <div className="mt-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">Skill</div>
              </div>

              <div className="text-gray-700 text-md my-2 w-full flex gap-4 flex-wrap">
                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">
                  React js
                </div>
                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">
                  Node js
                </div>
                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">
                  java script
                </div>
                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">
                  Mongo DB
                </div>
                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">
                  Tailwind Css
                </div>
              </div>
            </Card>
          </div>

          {/* -----Scrolabel part  */}

          <div className="mt-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">Activities</div>
              </div>
              <div className="cursor-pointer px-3 py-1 w-fit border-1 rounded-4xl bg-green-800 text-white font-semibold">
                Posts
              </div>

              {/* parent div for scrollable activities     */}
              <div className="overflow-x-auto my-2 flex gap-1 overflow-y-hidden w-full">
                <Link
                  to={`/profile/${id}/activities/:77`}
                  className="cursor-pointer shrink-0 w-[380px] h-[560px] "
                >
                  <Post profile={1} />
                </Link>

                <Link
                  to={`/profile/${id}/activities/:78`}
                  className="cursor-pointer shrink-0 w-[380px] h-[560px] "
                >
                  <Post profile={1} />
                </Link>
                {/* --------------- */}

                <Link
                  to={`/profile/${id}/activities/:79`}
                  className="cursor-pointer shrink-0 w-[380px] h-[560px] "
                >
                  <Post profile={1} />
                </Link>

                <Link
                  to={`/profile/${id}/activities/:80`}
                  className="cursor-pointer shrink-0 w-[380px] h-[560px] "
                >
                  <Post profile={1} />
                </Link>
                {/* --------------- */}

                {/* <div className="cursor-pointer shrink-0 w-[380px] h-[560px] ">
                  <Post profile={1} />
                </div> */}
                {/* --------------- */}

                {/* <div className="cursor-pointer shrink-0 w-[380px] h-[560px] ">
                  <Post profile={1} />
                </div> */}
                {/* --------------- */}

                {/* <div className="cursor-pointer shrink-0 w-[380px] h-[560px] ">
                  <Post profile={1} />
                </div> */}
              </div>

              <div className="w-full flex justify-center items-center">
                <Link
                  to={`/profile/${id}/activities`}
                  className="p-2 rounded-xl cursor-pointer hover:bg-gray-300"
                >
                  Show all Posts <ArrowRightAltIcon />
                </Link>
              </div>
            </Card>
          </div>

          <div>
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">Experience</div>
                <div className="cursor-pointer" onClick={handleExpModal}>
                  <AddIcon />
                </div>
              </div>

              <div className="mt-5">
                <div className="p-2 border-t-2 border-gray-300 flex justify-between">
                  <div className="">
                    <div className="text-lg">Full Stack Developer</div>
                    <div className="text-sm">Alphonic</div>
                    <div className="text-sm text-gray-500">
                      August 2025 -- Present
                    </div>
                    <div className="text-sm text-gray-500">Jaipur, India</div>
                  </div>
                  <div className="cursor-pointer">
                    <EditIcon />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="p-2 border-t-2 border-gray-300 flex justify-between">
                  <div className="">
                    <div className="text-lg">Full Stack Developer</div>
                    <div className="text-sm">Alphonic</div>
                    <div className="text-sm text-gray-500">
                      August 2025 -- Present
                    </div>
                    <div className="text-sm text-gray-500">Jaipur, India</div>
                  </div>
                  <div className="cursor-pointer">
                    <EditIcon />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* right part of main section  */}
        <div className="hidden md:flex md:w-[28%]">
          <div className="sticky top-10 ">
            <Advertisement />
          </div>
        </div>
      </div>
      {imageModal && (
        <Modal title="upload image" handleOpenPostModal={modalImageOpenClose}>
          <ImageModal isCircular={circularImage} />
        </Modal>
      )}

      {infoModal && (
        <Modal title="Edit info" handleOpenPostModal={handleInfoModal}>
          <EditinfoModal />
        </Modal>
      )}

      {aboutModal && (
        <Modal title="Edit About" handleOpenPostModal={handleAboutModal}>
          <AboutModal />
        </Modal>
      )}
      {expModal && (
        <Modal title="Experience" handleOpenPostModal={handleExpModal}>
          <ExpModal />
        </Modal>
      )}

      {messageModal && (
        <Modal title="write a message" handleOpenPostModal={handleMessageModal}>
          <MessageModal />
        </Modal>
      )}
    </div>
  );
};

export default Profile;
