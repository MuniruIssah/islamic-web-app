import React from "react";
import "./styles.scss";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
const Sort = ({ active, setActive, label }) => {
  const handleChangeSort = () => setActive(label);
  return (
    <div
      className={`sort ${active ? "activeSort" : ""}`}
      onClick={handleChangeSort}
    >
      <div className="sortContent">
        <span>Sort by</span>
        <span>{label}</span>
      </div>
      {active ? <FiArrowUp /> : <FiArrowDown />}
    </div>
  );
};

export default Sort;
