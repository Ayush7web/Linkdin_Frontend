

const MessageModal = () => {
  return (
    <div className="my-5">
      <div className="w-full mb-4">
        <textarea
          name=""
          id=""
          className="p-2 w-full border-1 rounded-md"
          placeholder="Enter a message"
          cols={9}
          rows={8}
        ></textarea>
      </div>

      <div className="bg-blue-950 text-white w-fit py-1 px-3  cursor-pointer rounded-2xl">
        send
      </div>
    </div>
  );
};

export default MessageModal;
  