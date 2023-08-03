import React, { useState, useContext, useEffect } from "react";

// react query
import { useQuery } from "react-query";

// contexts
import VisibleScrensContext from "../../contexts/VisibleScreens";

// components
import AllRoutes from "../AllRoutes/AllRoutes";

// icons

const Widget = () => {
  const { screen, changeScreen } = useContext(VisibleScrensContext);

  // states
  const [isChatWindowOpen, setIsChatWindowOpen] = useState(false);

  const cloneGptShowRoutes = () => {
    setIsChatWindowOpen(!isChatWindowOpen);
  };

  useEffect(() => {
    if (isChatWindowOpen) {
      changeScreen({
        routes: true,
      });
    }

    if (!isChatWindowOpen) {
      changeScreen({
        routes: false,
      });
    }
  }, [isChatWindowOpen]);

  return (
    <>
      {/* widget never move */}
      <div className="clonegpt-wrapper" onClick={cloneGptShowRoutes}>
        <img src={chrome.runtime.getURL("/assets/logo.png")} alt="logo" />
      </div>

      {/* the routes components will decide which page should show up */}
      {screen.routes && <AllRoutes />}
    </>
  );
};

export default Widget;
