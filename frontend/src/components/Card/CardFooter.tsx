import { BiSolidUpvote } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";

const CardFooter = () => {
  return (
    <div>
      <div className="flex flex+row justify-between mt-4">
        <button
          className="flex text-2xl  mt-1 justify-center  border-gray-400 text-gray-600
             transition-colors duration-300
             hover:border-blue-500 hover:text-blue-500
             "
        >
          <FaCommentAlt />
        </button>

        <div className="flex flex-col">
          <div className="flex">
            <p className="w-24 text-right mr-2">14k</p>
            <button
  className="border rounded border-gray-400  text-gray-600 text-2xl
             transition-colors duration-300
             hover:border-green-500 hover:text-green-500
             focus:ring focus:ring-green-300
             active:bg-green-100"
>
  <BiSolidUpvote />
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
      <div className="mb-12 mt-3 border-t border-gray-400"></div>
    </div>
  );
};

export default CardFooter;
