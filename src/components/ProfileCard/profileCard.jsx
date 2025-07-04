import Card from "../Card/card";
// import React from "react";

const ProfileCard = () => {
  return (
    <Card padding={0}>
      <div className="relative h-25">
        <div className="relative w-full h-22 rounded-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP1Zok5S8PpkBZTaC02AsDMRmiG2pNQhKkyA&s"
            alt=""
            className="rounded-t-md h-full w-full"
          />
        </div>
        <div className="absolute top-14 left-6 z-10">
          <img
            src="src/images/ayush-image.jpg"
            alt=""
            className="rounded-4xl border-2 h-16 w-16 border-white cursor-pointer"
          />
        </div>
      </div>

      {/* --------------------------below profile part  */}
      <div className="p-5">
        <div className="text-xl font-medium ">AYUSH KUMAR</div>
        <div className="text-sm m-1">@Alphonic Pvt. Ltd.</div>
        <div className="text-sm m-1">Jaipur , India</div>
        <div className="text-sm m-1">Alphonic</div>
      </div>
    </Card>
  );
};

export default ProfileCard;
