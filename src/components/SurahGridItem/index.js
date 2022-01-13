import React from "react";
import { MdFavorite, MdOutlineFavorite,MdFavoriteBorder } from "react-icons/md";
import "./styles.scss";
const SurahGridItem = ({ number, name, translation, favorite }) => {
  return (
    <div className="surahGridItem">
      <div className="numberAndFavorite">
        <div className="number">{number}</div>
        {favorite ? <MdFavorite style={{color:'#3b9b6e',fontSize:20}} /> : <MdFavoriteBorder style={{color:'#b5c2cd',fontSize:20}}  />}
      </div>
      <div className="nameAndTranslation">
        <span>{name}</span>
        <span>{translation}</span>
      </div>
    </div>
  );
};

export default SurahGridItem;
