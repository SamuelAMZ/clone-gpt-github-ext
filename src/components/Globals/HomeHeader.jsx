import React, { useContext } from "react";

// contexts
import VisibleScrensContext from "../../contexts/VisibleScreens";

// icons
import { IoMdClose } from "react-icons/io";

const HomeHeader = () => {
  const { screen, changeScreen } = useContext(VisibleScrensContext);

  return (
    <div className="clonegpt-header-wrapper">
      <img src={chrome.runtime.getURL("/assets/logo.png")} alt="logo" />
      <h3>Kalami Github</h3>
    </div>
  );
};

export default HomeHeader;
