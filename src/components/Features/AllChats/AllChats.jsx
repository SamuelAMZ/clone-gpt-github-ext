import React, { useContext } from "react";

// contexts
import VisibleScrensContext from "../../../contexts/VisibleScreens";

// icons
import { BiSearch, BiSend } from "react-icons/bi";

const AllChats = () => {
  const { screen, changeScreen } = useContext(VisibleScrensContext);

  const navigateTo = (page) => {
    if (page === "singleChat") {
      changeScreen({
        routes: true,
        singleChat: true,
        home: false,
        allChats: false,
        help: false,
        joinUs: false,
      });
    }
  };
  return (
    <div className="clonegpt-home-all-chats">
      {/* search bar */}
      <div className="clone-gpt-chats-search-bar">
        <p>Search chats</p>
        <BiSearch />
      </div>
      {/* chats elms */}
      <div className="clonegpt-chats-container">
        <div
          className="clonegpt-chats-elmt"
          onClick={() => navigateTo("singleChat")}
        >
          <p>Lorem ipsum dolor sit</p>
          <BiSend />
        </div>
        <div
          className="clonegpt-chats-elmt"
          onClick={() => navigateTo("singleChat")}
        >
          <p>Lorem ipsum dolor sit</p>
          <BiSend />
        </div>
        <div
          className="clonegpt-chats-elmt"
          onClick={() => navigateTo("singleChat")}
        >
          <p>Lorem ipsum dolor sit</p>
          <BiSend />
        </div>
        <div
          className="clonegpt-chats-elmt"
          onClick={() => navigateTo("singleChat")}
        >
          <p>Lorem ipsum dolor sit</p>
          <BiSend />
        </div>
      </div>
    </div>
  );
};

export default AllChats;
