import React, { useContext } from "react";

// comps
import Header from "../Globals/Header";

// contexts
import VisibleScrensContext from "../../contexts/VisibleScreens";

// icons
import { BiSearch, BiSend } from "react-icons/bi";

const AllChatsPage = () => {
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
    <>
      <Header page={"Chats"} />

      <div className="clonegpt-home-all-chats clonegpt-all-chats-page">
        {/* chats elms */}
        <div className="clonegpt-chats-container">
          <div
            className="clonegpt-chats-elmt"
            onClick={() => navigateTo("singleChat")}
          >
            <div className="clonegpt-chats-elmt-texts">
              <p>Lorem ipsum dolor sit amet...</p>
              <p>
                219 files <span>Javascript</span>
              </p>
            </div>
            <BiSend />
          </div>
          <div
            className="clonegpt-chats-elmt"
            onClick={() => navigateTo("singleChat")}
          >
            <div className="clonegpt-chats-elmt-texts">
              <p>Lorem ipsum dolor sit amet...</p>
              <p>
                219 files <span>Javascript</span>
              </p>
            </div>
            <BiSend />
          </div>
          <div
            className="clonegpt-chats-elmt"
            onClick={() => navigateTo("singleChat")}
          >
            <div className="clonegpt-chats-elmt-texts">
              <p>Lorem ipsum dolor sit amet...</p>
              <p>
                219 files <span>Javascript</span>
              </p>
            </div>
            <BiSend />
          </div>
          <div
            className="clonegpt-chats-elmt"
            onClick={() => navigateTo("singleChat")}
          >
            <div className="clonegpt-chats-elmt-texts">
              <p>Lorem ipsum dolor sit amet...</p>
              <p>
                219 files <span>Javascript</span>
              </p>
            </div>
            <BiSend />
          </div>
          <div
            className="clonegpt-chats-elmt"
            onClick={() => navigateTo("singleChat")}
          >
            <div className="clonegpt-chats-elmt-texts">
              <p>Lorem ipsum dolor sit amet...</p>
              <p>
                219 files <span>Javascript</span>
              </p>
            </div>
            <BiSend />
          </div>
        </div>

        {/* add new chat btn */}
        <div
          className="clonegpt-add-new-chat-btn"
          onClick={() => navigateTo("singleChat")}
        >
          <p>Start a new chat</p>
          <BiSend />
        </div>
      </div>
    </>
  );
};

export default AllChatsPage;
