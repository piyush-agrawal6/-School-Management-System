import React from "react";
import { FaUserMd } from "react-icons/fa";
import "./CommonCSS.scss";

const Topbar = ({ onclick }) => {
  return (
    <>
      <div className="MainDiv">
        <div className="Hideshow">
          <h2>HMS</h2>
        </div>
        <div className="SearchDiv">
          <input type="text" placeholder="Search Patient By Health Id...." />
        </div>
        <div className="IconsDiv">
          <FaUserMd className="Icons user" />
        </div>
      </div>
    </>
  );
};

export default Topbar;
