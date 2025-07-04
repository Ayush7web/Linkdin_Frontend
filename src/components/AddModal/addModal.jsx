
import ImageIcon from "@mui/icons-material/Image";


const AddModal = () => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <div className="relative">
          <img
            src={"src/images/ayush-image.jpg"}
            alt=""
            className="rounded-full  h-13 w-13  border-white cursor-pointer"
          />
        </div>

        <div className="text-2xl">Ayush Kumar</div>
      </div>
      {/* ------------------------------- */}

      <div>
        <textarea
          cols={48}
          rows={7}
          placeholder="what do you want to talk about"
          className="my-3 outline-0 text-xl p-2"
        ></textarea>
      </div>

      <div>
        <img
          src="https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg"
          alt=""
          className="w-15 h-15 relative bottom-29 rounded-full"
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="relative bottom-15 left-5">
          <label htmlFor="inputFile" className="cursor-pointer">
            {" "}
            <ImageIcon/>{" "}
          </label>
          <input type="file" className="hidden" id="inputFile" />
        </div>

        <div className="bg-blue-950 text-white py-1 px-3 cursor-pointer rounded-2xl relative bottom-16">Post</div>
      </div>
    </div>
  );
};

export default AddModal;
