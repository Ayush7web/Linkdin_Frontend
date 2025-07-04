
import ClearIcon from "@mui/icons-material/Clear";

const Modal = (props) => {
  return (
    <div className="bg-black/50 fixed top-0 left-0 inset-0 z-20 flex justify-center items-center">
      {/* ------------------------ pop up post page create  */}
      <div className="w-[95%] md:w-[50%] h-[400px] bg-white rounded-xl p-10">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <div className="text-2xl">{props.title}</div>
          </div>
          <div
            onClick={() => props.handleOpenPostModal()}
            className="cursor-pointer"
          >
            <ClearIcon />
          </div>
        </div>

        {/* ------------------- create a props where pass a children / ya dynamically------------ */}
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
