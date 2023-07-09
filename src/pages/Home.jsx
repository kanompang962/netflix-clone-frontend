import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Billboard from "../components/Billboard";
import MovieList from "../components/MovieList";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  // fetch movies
  const fetchMovies = () => {
    axios
      .get(`${process.env.REACT_APP_API}/movies`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title={"Trending Now"} data={movies} />
        <MovieList title={"My List"} data={movies} />
      </div>
    </div>
  );
};

export default Home;
