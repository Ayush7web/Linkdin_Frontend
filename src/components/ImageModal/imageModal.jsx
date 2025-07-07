import Image from "../../Image/ayush-image.jpg"
import Image3D from "../../Image/3D.jpeg"

const ImageModal = ({ isCircular }) => {

  return (
    <div className="p-5 relative flex items-center flex-col h-full">
      {isCircular ? (
        <img src={Image} alt="" className="rounded-full w-[150px] h-[150px]" />
      ) : (
        <img
          src={Image3D}
          alt=""
          className="rounded-xl w-full h-[180px] object-cover"
        />
      )}

      <label
        htmlFor="btn-submit"
        className="absolute bottom-10 left-0 p-3 bg-blue-900 text-white rounded-2xl cursor-pointer"
      >
        upload
      </label>
      <input type="file" className="hidden" id="btn-submit" />

      <div className="absolute bottom-10 right-0 p-3 bg-blue-900 text-white rounded-2xl cursor-pointer">
        submit
      </div>
    </div>
  );
};

export default ImageModal