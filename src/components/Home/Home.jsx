import React, { useContext } from "react";

// context
import VisibleScrensContext from "../../contexts/VisibleScreens";

// icons

// comps
import NewChat from "../Features/NewChat/NewChat";
import AllChats from "../Features/AllChats/AllChats";

const Home = () => {
  const { screen, changeScreen } = useContext(VisibleScrensContext);

  const redirectToNewShare = () => {
    changeScreen({
      routes: true,
      home: false,
    });
  };

  return (
    <div className="clonegpt-home-wrapper">
      {/* heading */}
      <h2 className="clonegpt-home-heading">
        <span>Hello there!</span>
        <span>How can I help you?</span>
      </h2>

      {/* new chat comp */}
      <NewChat />

      {/* all chats comp */}
      <AllChats />
    </div>
  );
};

export default Home;
