import React from "react";
import IconCircle from "../../components/IconCircle";
import Logo from "../../components/Logo";
import Search from "../../components/Search";
import { RiHeadphoneLine } from "react-icons/ri";
import { BiBell } from "react-icons/bi";

import "./styles.scss";
const Header = () => {
  return (
    <header>
      <Logo />
      <div className="mid-section">
        <div>
          <span className={`msSpan`}>Quran</span>
          <span className={`msSpan greyMsSpan`}>Hadith</span>
        </div>
        <div className="searchAndIconButtons">
          <Search />
          <IconCircle>
            <RiHeadphoneLine />
          </IconCircle>
          <IconCircle>
            <BiBell />
          </IconCircle>
        </div>
      </div>
      <button className="supportButton">Support</button>
    </header>
  );
};

export default Header;
