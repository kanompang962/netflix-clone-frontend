import React, { useCallback, useEffect, useState } from "react";
import hero from "../images/hero.jpg";
import logo from "../images/logo.png";
import InputText from "../components/InputText";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import { authenticate, getToken } from "../services/authoriz";

const Auth = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [variant, setVariant] = useState("signin");

  useEffect(() => {
    getToken() && history.push("/");
    // eslint-disable-next-line
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/login`, { email, password })
      .then((response) => {
        authenticate(response, () => (window.location.href = "/"));
        // alert("Login Success");
        // window.location.href = "/";
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/register`, { name, email, password })
      .then((response) => {
        alert("Register Success");
        setVariant("signin");
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  };

  const toggleVariant = useCallback(() => {
    setVariant((current) => (current === "signin" ? "signup" : "signin"));
  }, []);

  return (
    <div
      className="relative h-screen w-full bg-no-repeat bg-center bg-fixed bg-cover"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Background Color */}
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        {/* Navbar */}
        <nav className=" px-12 py-5">
          <a href="/">
            <img className="h-8 lg:h-12" src={logo} alt="logo" />
          </a>
        </nav>
        {/* Card */}
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 max-w-md  lg:max-w-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "signin" ? "Sign In" : "Sign Up"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "signup" && (
                <InputText
                  id="name"
                  type="text"
                  label="name"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                />
              )}
              <InputText
                id="email"
                type="email"
                label="Email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <InputText
                id="password"
                type="password"
                label="Password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </div>
            {/* Button */}
            <button
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
              onClick={variant === "signin" ? handleLogin : handleRegister}
            >
              {variant === "signin" ? "Sign In" : "Sign Up"}
            </button>
            {/* Icons */}
            <div className="flex flex-row justify-center items-center gap-4 mt-8">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition cursor-pointer">
                <FcGoogle size={30} />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition cursor-pointer">
                <FaGithub size={30} />
              </div>
            </div>
            {/* Text */}
            <div className="text-neutral-500 mt-5 flex flex-col sm:flex-row gap-2">
              <p className="">
                {variant === "signin"
                  ? "Already registered? Please"
                  : "New to Netflix?"}
              </p>
              <p
                className="text-white hover:underline cursor-pointer"
                onClick={toggleVariant}
              >
                {variant === "signin" ? "Sign up now." : "Sign In"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
