import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";

const Billboard = () => {
  const [movieBillboard, setMovieBillboard] = useState([]);

  useEffect(() => {
    fetchMovie();
  }, []);

  //   fetch movie billboard
  const fetchMovie = () => {
    axios
      .get(`${process.env.REACT_APP_API}/movie-billboard`)
      .then((res) => {
        setMovieBillboard(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="relative h-[56.25vw]">
      {/* Video */}
      <video
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        poster={movieBillboard?.thumbnailUrl}
        src={movieBillboard?.videoUrl}
      ></video>
      {/* Details */}
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl lg:text-6xl h-full w-[90%] font-bold drop-shadow-xl">
          {movieBillboard?.title}
        </p>
        <p className="hidden sm:flex text-white w-[90%] mt-3 md:text-lg md:mt-8 md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {movieBillboard?.description}
        </p>
        {/* Buttons flex flex-row items-center mt-3 md:mt-4 gap-3"*/}
        <div className="flex flex-row items-center gap-3 mt-3 md:mt-4">
          <PlayButton movie={movieBillboard?._id} />
          <button
            className="bg-white bg-opacity-30 text-white rounded-md px-1 py-2 md:px-2 md:py-4 text-xs lg:text-lg flex flex-row
          items-center gap-2 w-auto hover:bg-opacity-20 transition"
          >
            <AiOutlineInfoCircle />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
