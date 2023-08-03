import React, { useContext } from "react";

// contexts
import VisibleScrensContext from "../../contexts/VisibleScreens";

// icons
import { IoMdClose } from "react-icons/io";

const Header = ({ page }) => {
  const { screen, changeScreen } = useContext(VisibleScrensContext);

  return (
    <div className="clonegpt-header-all-wrapper">
      <p>{page}</p>
    </div>
  );
};

export default Header;
