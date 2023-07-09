import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = (props) => {
  const movie = props.match.params.movie;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/movie/${movie}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="w-screen h-screen bg-black">
      {/* Navbar */}
      <nav className="bg-black opacity-70 text-white fixed w-full z-10 flex flex-row items-center gap-8 p-2">
        <a href="/">
          <AiOutlineArrowLeft className="cursor-pointer" size={30} />
        </a>
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span>
          {data?.title}
        </p>
      </nav>
      {/* Video */}
      <video
        autoPlay
        controls
        className="h-full w-full object-cover"
        src={data?.videoUrl}
      />
    </div>
  );
};

export default Watch;
