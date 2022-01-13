import React, { useState } from "react";
import { IoApps } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import "./styles.scss";
import Sort from "../../../../components/Sort";
import { listOfSurahs } from "../../../../utils";
import SurahGridItem from "../../../../components/SurahGridItem";
const MainDisplay = () => {
  const [active, setActive] = useState("Serial");
  return (
    <main>
      <div className="mainHeader">
        <div className="gridToggle">
          <IoApps  style={{fontSize:25,color:'#3d454f',marginRight:'1rem'}} />
          <BsList style={{fontSize:26,color:'#b5c2cd'}}  />
        </div>
        <div className="sorts"> 
          <Sort
            label={"Serial"}
            active={active === "Serial"}
            setActive={setActive}
          />
          <Sort
            label={"Alphabet"}
            active={active === "Alphabet"}
            setActive={setActive}
          />
          <Sort
            label={"Total Ayah"}
            active={active === "Total Ayah"}
            setActive={setActive}
          />
          <Sort
            label={"Parah"}
            active={active === "Parah"}
            setActive={setActive}
          />
        </div>
      </div>

      <div className="mainMainSection">
        {listOfSurahs.map((item, index) => (
          <SurahGridItem {...item} number={index + 1} key={index} />
        ))}
      </div>
    </main>
  );
};

export default MainDisplay;
