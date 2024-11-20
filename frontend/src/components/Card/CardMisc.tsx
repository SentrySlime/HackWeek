import React from "react";
import dots from "../../assets/dots.png";

const CardMisc = ({ id, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      onDelete();
    }
  };

  return (
    <div className="flex float-right">
      <div className="flex ml-5 mt-3">
        {/* Placeholder Button */}
        <div>
          <button
            aria-label="Star Post"
            className="focus:outline-none"
            title="Star this post"
          >
            <img
              className="w-6 h-6 mr-5"
              src="https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png"
              alt="Star"
            />
          </button>
        </div>

        {/* Delete Button */}
        <div className="mr-2">
          <button
            onClick={handleDelete}
            aria-label="Delete Post"
            className="focus:outline-none"
            title="Delete this post"
          >
            <img className="w-8" src={dots} alt="Delete Options" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMisc;
