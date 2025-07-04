

const AboutModal = () => {
  return (
    <div className="my-6]">
      <div className="w-full">
        <label>About*</label>
        <br />
        <textarea
          name=""
          id=""
          className="p-2  w-full border-1 rounded-md"
          cols={9}
          rows={3}
        ></textarea>
      </div>

      <div className="w-full mb-4">
        <label>Skills*(Add by seperating comma)</label>
        <br />
        <textarea
          name=""
          id=""
          className="p-2 w-full border-1 rounded-md"
          cols={9}
          rows={3}
        ></textarea>
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="resumeupload"
          className=" p-2 bg-blue-900 text-white rounded-2xl cursor-pointer"
        >
          Resume upload
        </label>
        <input type="file" className="hidden" id="resumeupload" />
      </div>

      <div className="bg-blue-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl">
        save
      </div>
    </div>
  );
}

export default AboutModal  