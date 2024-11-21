import React from "react";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardMisc from "./CardMisc";
import CardTitle from "./CardTitle";

const Card = ({ id, title, url, categories, onDelete }) => {
  return (
    <div className="rounded w-[600px]">
      <div className="flex">
        <CardTitle title={title} />
        <CardMisc id={id} onDelete={onDelete} />
      </div>

      <div>
        <CardContent src={url} />
        <CardFooter categories={categories} />
      </div>
    </div>
  );
};

export default Card;