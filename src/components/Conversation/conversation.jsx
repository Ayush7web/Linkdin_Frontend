import React from 'react'

const Conversation = () => {
  return (
    <div className="flex items-center w-full cursor-pointer border-b-1  border-gray-300 gap-3 p-4 hover:bg-gray-200">
      <div className="shrink-0">
        <img
          src="src/images/ayush-image.jpg"
          alt=""
          className="w-14 h-14 rounded-[100%] cursor-pointer"
        />
      </div>

      {/* -------------------  */}
      <div className="">
        <div className="text-sm">Ayush</div>
        <div className="text-sm text-gray-500">Full Stack Developer</div>
      </div>
    </div>
  );
}

export default Conversation