const CardFooter = () => {
  return (
    <div>
      <div className="flex flex+row justify-between mt-4">
        <button className="flex w-20 h-6 mt-3 justify-center border rounded border-gray-400 ">
          Comment
        </button>
        <div className="flex flex-col">
          <div className="flex">
            <p className="w-24 text-right mr-2">14k</p>
            <button className="border rounded border-gray-400 w-6 h-6 ">
              ▲
            </button>
          </div>
          {/* <div className="flex">
            <p className="w-24 text-right mr-2">765</p>
            <button className="border rounded border-gray-400 w-6 h-6 ">
              ▼
            </button>
          </div> */}
        </div>
      </div>
      <div className="my-9 border-t border-gray-300"></div>
    </div>
  );
};

export default CardFooter;
