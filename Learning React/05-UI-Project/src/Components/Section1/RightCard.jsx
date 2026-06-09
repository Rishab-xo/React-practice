import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full w-70 overflow-hidden relative rounded-4xl">
      <img
        className="h-full w-full rounded-4xl object-cover"
        src={props.img}
        alt=""
      />
    <RightCardContent id={props.id} tag={props.tag}/>
    </div>
  );
};

export default RightCard;
