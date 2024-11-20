import React from "react";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardMisc from "./CardMisc";
import CardTitle from "./CardTitle";

const Card = ({ id, title, url, onDelete }) => {
  return (
    <div className="rounded w-[600px] border border-gray-300 shadow-md p-4 mb-4 bg-white">
      {/* Card Header */}
      <div className="flex justify-between items-center">
        <CardTitle title={title} />
        <CardMisc id={id} onDelete={onDelete} />
      </div>

      {/* Card Body */}
      <div className="mt-2">
        <CardContent src={url} />
      </div>

      {/* Card Footer */}
      <CardFooter />
    </div>
  );
};

export default Card;
