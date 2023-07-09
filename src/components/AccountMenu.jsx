import React from "react";
import profile from "../images/default-blue.png";
import { getToken, getUser, removeToken } from "../services/authoriz";

const AccountMenu = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex flex-col  border-2 border-gray-800 ">
      <div className="flex flex-col  gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full justify-center">
          <img className="w-8 rounded-md" src={profile} alt="Profile" />
          <p className="text-white text-sm group-hover/item:underline">
            {getUser() ? getUser() : "Username"}
          </p>
        </div>
        <div className="px-3 flex flex-row text-center text-white text-sm hover:underline justify-center">
          <p className="text-white text-sm group-hover/item:underline">About</p>
        </div>
        <div className="px-3 flex flex-row text-center text-white text-sm hover:underline justify-center">
          <p className="text-white text-sm group-hover/item:underline">
            Contect
          </p>
        </div>
        <div className="px-3 flex flex-row text-center text-white text-sm hover:underline justify-center">
          <p className="text-white text-sm group-hover/item:underline">
            setting
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        {getToken() ? (
          <div
            className="px-3 text-center text-white text-sm hover:underline"
            onClick={() => removeToken(() => (window.location.href = "/auth"))}
          >
            Logout
          </div>
        ) : (
          <a href="/auth">
            <div className="px-3 text-center text-white text-sm hover:underline">
              Sign In
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default AccountMenu;
