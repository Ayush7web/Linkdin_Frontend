// import React from "react";
import Card from "../../components/Card/card";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Advertisement from "../../components/Advertisement/advertisement";
import Conversation from "../../components/Conversation/conversation";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Image from "../../Image/ayush-image.jpg"
import team from "../../Image/team.jpeg"

const Messages = () => {
  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100 justify-center ">
      <div className="w-full flex gap-5 items-center justify-center ">
        {/* left side panel */}
        <div className="w-full md:w-[80%]">
          <Card padding={0}>
            <div className="border-b-1 border-gray-300 px-5 py-2 font-semibold text-lg">
              Messaging
            </div>

            <div className="border-b-1 border-gray-300 px-5 py-2">
              <div className="py-1 px-3 cursor-pointer hover:bg-green-900 bg-green-800 font-semibold flex gap-2 w-fit rounded-2xl text-white">
                Focused <ArrowDropDownIcon />{" "}
              </div>
            </div>

            {/* --------------------container panel */}
            <div className="w-full md:flex">
              <div className="h-[590px] overflow-auto w-full md:w-[40%] border-r-1  border-gray-400">
                {/* for each chat  */}
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
              </div>

              {/* right partt of ths panel  */}
              <div className="w-full md:w-[60%] border-gray-400">
                <div className="border-gray-300 py-2 px-4 border-b-2 justify-between items-center">
                  <div>
                    <p className="text-sm font-semibold ">User Ayush</p>
                    <p className="text-sm border-gray-300 ">
                      {" "}
                      Hii , what are you doing{" "}
                    </p>
                  </div>
                </div>

                {/* for dot icon  */}
                <div className="flex justify-end relative bottom-10 right-2">
                  {" "}
                  <MoreHorizIcon />{" "}
                </div>

                {/* scrorable div  */}

                <div className="h-[330px] overflow-auto border-b-1 border-gray-300">
                  <div className=" w-full  border-b-1 border-gray-300 ">
                    <img
                      src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                      className="w-13 h-12 rounded-full mx-7 relative cursor-pointer"
                      alt=""
                    />

                    <div className="my-2 mx-2">
                      <div className="text-md">User Ayush</div>
                      <div className="text-sm text-gray-500">
                        Hi , How are you
                      </div>
                    </div>
                  </div>

                  {/* chat window  */}

                  <div className="w-full">
                    <div className="flex w-full cursor-pointer border-gray-300 gap-3 p-4">
                      <div>
                        <img src={Image} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex w-full cursor-pointer border-gray-300 gap-3 p-4">
                      <div>
                        <img src={team} alt="" />
                      </div>
                    </div>
                  </div>

                  {/* ---------------------------------- */}

                  <div className="w-full">
                    <div className="flex w-full cursor-pointer border-gray-300 gap-3 p-4">
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcResYO0aRQEXAKigORoonz-YrvJChw83GdmpQ&s"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex w-full cursor-pointer border-gray-300 gap-3 p-4">
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPn-ZA8WXbPR7wl9r8DimTX9SzQq9q7jnH9w&s"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex w-full cursor-pointer border-gray-300 gap-3 p-4">
                      <div>
                        <img src="src/images/ayush-image.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* --------------MESSAGE SECTION  */}

                <div className="p-2 w-full border-b-1 border-gray-500 bg-gray-400">
                  <textarea
                    rows={4}
                    className="border-gray-200 text-white outline-0 rounded-xl text-sm w-full p-3"
                    placeholder="Write a message......"
                    id=""
                  ></textarea>
                </div>

                {/* icon--------------------- */}

                <div className="p-3 flex justify-between">
                  <div>
                    <label htmlFor="messageImage" className="cursor-pointer">
                      <InsertPhotoIcon />
                    </label>
                    <input id="messageImage" type="file" className="hidden" />
                  </div>
                  <div className="px-3 py-1 cursor-pointer rounded-2xl border-1 bg-blue-950 text-white">
                    send
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className=" w-[26%] py-5 hidden md:block rounded-xl relative right-24 0">
        <div className="sticky top-19 ">
          {" "}
          <Advertisement />{" "}
        </div>
      </div>
    </div>
  );
};

export default Messages;
