

const ExpModal = () => {
  return (
    <div className="mt-8 w-full h-[250px] overflow-auto">
      <div className="w-full mb-4 ">
        <label>Role*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md"
          placeholder="Enter Your position"
        />
      </div>
      <div className="w-full mb-4 ">
        <label>Company*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md"
          placeholder="Enter company name"
        />
      </div>
      <div className="w-full mb-4 ">
        <label>Duration*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md"
          placeholder="duration"
        />
      </div>
      <div className="w-full mb-4 ">
        <label>Place*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md"
          placeholder="Enter current place"
        />
      </div>

      <div className="bg-blue-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl">
        save
      </div>
    </div>
  );
};

export default ExpModal;
