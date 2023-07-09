import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
// import { Link } from "react-router-dom";

const PlayButton = ({ movie }) => {
  return (
    <a
      //   href={`/watch/${movie}`}
      href={`/watch/${movie}`}
      className="bg-black bg-opacity-60 text-white rounded-md px-2 py-2 md:px-4 md:py-4 text-xs lg:text-lg flex flex-row
          items-center gap-x-2 font-semibold hover:bg-opacity-80 transition"
    >
      <BsFillPlayFill size={20} />
      Play
    </a>
  );
};

export default PlayButton;
