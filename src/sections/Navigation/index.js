import React from "react";
import { NavLink } from "react-router-dom";
import { RiBookOpenLine } from "react-icons/ri";
import { MdOutlineFavorite,MdFavoriteBorder } from "react-icons/md";
import { FiDollarSign, FiLogOut, FiSend, FiSettings } from "react-icons/fi";
import "./styles.scss";

const Navigation = () => {
  return (
    <nav>
      <div className="navSection">
        <NavLink
          className={({ isActive }) => (isActive ? "activeIWAlink" : "")}
          to="/"
        >
          <RiBookOpenLine />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeIWAlink" : "")}
          to="/favorite"
        >
          <MdFavoriteBorder />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeIWAlink" : "")}
          to="/message"
        >
          <FiSend />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeIWAlink" : "")}
          to="/donate"
        >
          <FiDollarSign />
        </NavLink>
      </div>

      <div className="navSection">
        <NavLink
          className={({ isActive }) => (isActive ? "activeIWAlink" : "")}
          to="/settings"
        >
          <FiSettings />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeIWAlink" : "")}
          to="/logout"
        >
          <FiLogOut />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
