import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, data }) => {
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8 ">
      <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
        {title}
      </p>
      <div className="text-white grid grid-cols-2 lg:grid-cols-4 gap-2">
        {data &&
          data.map((data, index) => <MovieCard data={data} key={index} />)}
      </div>
    </div>
  );
};

export default MovieList;
