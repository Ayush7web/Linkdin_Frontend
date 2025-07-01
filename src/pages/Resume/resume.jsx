import React from 'react'
import Advertisement from '../../components/Advertisement/advertisement';

const Resume = () => {
  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100 justify-center ">
      <div className="w-[100%] py-5 sm:w-[55%]  ">
        {/* resume image  */}
        <img
          src="https://resumaker.ai/s3/en-US/resume-examples/Full-Stack-Developer-Resume-Example.png"
          alt=""
          className="w-full h-full rounded-xl"
        />
      </div>

      {/* -----------for advertising image  */}
      <div className="w-[26%] py-5 hidden md:block rounded-xl">
        <div className="sticky top-19">
          <Advertisement />
        </div>
      </div>
    </div>
  );
}

export default Resume