import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";

const MovieCard = ({ data }) => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[20vw] lg:h-[12vw]">
      {/* Main */}
      <img
        className="sm:group-hover:opacity-0 group-hover:opacity-90 delay-300 w-full h-full cursor-pointer object-cover transition duration shadow-xl rounded-md "
        src={data?.thumbnailUrl}
        alt={data?.thumbnailUrl}
      />
      {/* */}
      {/* Show transition */}
      <div
        className="
        opacity-0 invisible sm:visible scale-0
      group-hover:scale-110 
      group-hover:-translate-y-[6vw] 
      group-hover:translate-x-[2vw]
      group-hover:opacity-100
      absolute top-0 transition duration-200 z-10 delay-300 w-full "
      >
        {/* Image */}
        <img
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-full"
          src={data?.thumbnailUrl}
          alt={data?.thumbnailUrl}
        />
        {/* Details */}
        <div className="absolute z-10 bg-zinc-800 p-2 lg:p-4 w-full transition shadow-md rounded-b-md">
          {/* Icons */}
          <div className="flex flex-row items-center gap-3">
            <a href={`watch/${data?._id}`}>
              <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
                <BsFillPlayFill className="text-black" />
              </div>
            </a>
            <div>
              <FavoriteButton />
            </div>
          </div>
          {/* Text */}
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2023</span>
          </p>
          {/* Time */}
          <div className="mt-4 flex flex-row gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          {/* Genre */}
          <div className="mt-4 flex flex-row gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
