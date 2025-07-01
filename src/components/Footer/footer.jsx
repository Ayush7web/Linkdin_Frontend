import React from 'react'

const Footer = () => {
  return (
    <div className="w-[100%]  bg-gray-200 flex justify-center">
      <div className="md: p-3 w-[100%] flex flex-col items-center py-4">
        <div className="flex gap-2 item-center cursor-pointer">
          <h3 className="text-blue-800 font-bold text-xl">Linked</h3>
          <img
            src={
              "https://img.freepik.com/premium-vector/blue-white-linkedin-icon-blue-background_462839-1656.jpg"
            }
            alt="LindininLogo"
            className="w-7 h-7"
          />
        </div>
        {/* div for copyright */}
        <div className='text-sm'>@copyright 2025</div>
      </div>
    </div>
  );
}

export default Footer