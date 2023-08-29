import React from "react";
import { FaTwitter } from "react-icons/fa";

export const Twitter = () => {
  return (
    <li className="social_icons rounded-3xl p-1  transition ease delay-150">
      <a href="https://twitter.com/velas3nca">
        <FaTwitter size={25} color={"#FFFFFF"} />
      </a>
    </li>
  );
};
