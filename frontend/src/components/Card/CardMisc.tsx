import React from "react";
import dots from "../../assets/dots.png";
import { GrTrash } from "react-icons/gr";
import { FaStar, FaTrashCan } from "react-icons/fa6";

const CardMisc = ({ id, onDelete }) => {
  return (
    <div className="flex float-right">
      <div className="flex ml-5 mt-3">
      <div>
  <button
    className="text-gray-600 font-bold text-2xl mr-3 border rounded
               transition-colors duration-300
               hover:border-yellow-500 hover:text-yellow-500"
  >
    <FaStar />
  </button>
</div>

        <div className="mr-2">
  <button
    onClick={onDelete}
    className="text-gray-600 font-bold text-2xl border rounded
               transition-colors duration-300
               hover:border-red-700 hover:text-red-700
               focus:ring focus:ring-red-300
               active:bg-red-200"
  >
    <FaTrashCan />
  </button>
</div>

      </div>
    </div>
  );
};

export default CardMisc;