import React from "react";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardMisc from "./CardMisc";
import CardTitle from "./CardTitle";

const Card = ({title, url }) => {
  return (
    <div className="rounded w-[600px]">
      <div className="flex">
        <CardTitle title={title} />
        <CardMisc />
      </div>
      <CardContent src={url} />
      <CardFooter />
    </div>
  );
};

export default Card;
