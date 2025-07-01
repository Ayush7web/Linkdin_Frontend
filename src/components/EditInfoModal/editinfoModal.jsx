import React from "react";

const EditinfoModal = () => {
  return (
    <div className="mt-8 w-full h-[250px] overflow-auto">
      <div className="w-full mb-4 ">
        <label>Full Name*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md"
          placeholder="Enter full name"
        />
      </div>

      <div className="w-full mb-4">
        <label>HeadLine*</label>
        <br />
        <textarea
          name=""
          id=""
          className="p-2 mt-1 w-full border-1 rounded-md"
          cols={9}
          rows={5}
        ></textarea>
      </div>

      <div className="w-full mb-4">
        <label>Current Company*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md"
          placeholder="Enter Your company name"
        />
      </div>

      <div className="w-full mb-4">
        <label>Current Location*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md"
          placeholder="enter your current location"
        />
      </div>

      <div className="bg-blue-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl">
        save
      </div>
    </div>
  );
};

export default EditinfoModal;
