import React from "react";
import Greeting from "../../../../components/Greeting";
import ProfileSubSection from "../../../../components/ProfileSubSection";
import "./styles.scss";
import { BiBook } from "react-icons/bi";
import { IoHeadsetOutline } from "react-icons/io5";
import AyahOfTheDay from "../../../../components/AyahOfTheDay";
const Profile = () => {
  return (
    <aside>
      <div>
      <Greeting name={'Issah'} />
      <ProfileSubSection
        heading={"last read"}
        title={"al-Fatiha"}
        description={"Ayah no.1"}
      >
        <BiBook />
      </ProfileSubSection>
      <ProfileSubSection
        heading={"last listened"}
        title={"al-Ma'idah"}
        description={"Ayah no.3"}
      >
        <IoHeadsetOutline />
      </ProfileSubSection>
      </div>
      <AyahOfTheDay/>
    </aside>
  );
};

export default Profile;
