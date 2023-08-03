import React, { useContext } from "react";

// contexts
import VisibleScrensContext from "../../../contexts/VisibleScreens";

// icons
import { MdArrowBackIos } from "react-icons/md";

const ChatHeader = () => {
  const { screen, changeScreen } = useContext(VisibleScrensContext);

  const navigateTo = (page) => {
    if (page === "chats") {
      changeScreen({
        routes: true,
        allChats: true,
        singleChat: false,
        home: false,
        help: false,
        joinUs: false,
      });
    }
  };

  return (
    <>
      <div className="clonegpt-single-chat-header">
        {/* back */}
        <div
          className="clonegpt-single-chat-header-back"
          onClick={() => navigateTo("chats")}
        >
          <MdArrowBackIos />
        </div>

        {/* title */}
        <div className="clonegpt-single-chat-header-texts">
          <h3>altair-graphql / altair</h3>
          <p>
            2019 files - <span>TypeScript</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
