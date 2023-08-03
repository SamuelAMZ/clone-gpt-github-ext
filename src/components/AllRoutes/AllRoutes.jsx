import React, { useContext, useEffect, useState } from "react";

// context
import VisibleScrensContext from "../../contexts/VisibleScreens";

// components
import Footer from "../Globals/Footer";
import HomeHeader from "../Globals/HomeHeader";
import Home from "../Home/Home";
import Login from "../Login/Login";
import AllChatsPage from "../AllChatsPage/AllChatsPage";
import Help from "../Help/Help";
import JoinUs from "../JoinUs/JoinUs";
import SingleChat from "../Features/SingleChat/SingleChat";

const AllRoutes = () => {
  const { screen, changeScreen } = useContext(VisibleScrensContext);

  // user uid
  const [userId, setUserId] = useState(null);

  // check user before loading the screens
  const checkUserAndLoadScreens = async () => {
    chrome.storage.local.get("uid", function (item) {
      if (item && item.uid) {
        setUserId(item.uid);
        changeScreen({
          routes: true,
          home: true,
          login: false,
        });
        return;
      }

      setUserId(null);
      changeScreen({
        routes: true,
        login: true,
        home: false,
      });
    });
  };

  // check for user auth status
  useEffect(() => {
    (async () => {
      await checkUserAndLoadScreens();
    })();
  }, []);

  return (
    <>
      <div className="clonegpt-routes-container">
        {screen.home && <HomeHeader />}
        <div className="clonegpt-routes-body">
          {screen.login && <Login />}
          {screen.home && <Home />}
          {screen.allChats && <AllChatsPage />}
          {screen.help && <Help />}
          {screen.joinUs && <JoinUs />}
          {screen.singleChat && <SingleChat />}
        </div>
        {!screen.singleChat && <Footer />}
      </div>
    </>
  );
};

export default AllRoutes;
