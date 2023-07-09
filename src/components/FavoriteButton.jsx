import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FavoriteButton = () => {
  return (
    <div
      className="
    cursor-pointer
    group/item
    w-6
    h-6
    lg:w-10
    lg:h-10
    border-white
    border-2
    rounded-full
    flex
    justify-center
    items-center
    transition
    text-white
    hover:border-neutral-300"
    >
      <AiOutlinePlus />
    </div>
  );
};

export default FavoriteButton;
