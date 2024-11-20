import React from "react";
import dots from "../../assets/dots.png";

const CardMisc = ({ id, onDelete }) => {
  return (
    <div className="flex float-right">
      <div className="flex ml-5 mt-3">
        <div>
          <button>
            <img
              className="w-6 h-6 mr-5"
              src="https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png"
              alt=""
            />
          </button>
        </div>
        <div className="mr-2">
          <button onClick={onDelete}>
            <img className="w-8" src={dots} alt="Delete Post" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMisc;
