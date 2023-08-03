import React, { useContext } from "react";

// contexts
import VisibleScrensContext from "../../contexts/VisibleScreens";

// icons
import { BiHomeSmile, BiChat, BiHelpCircle, BiGroup } from "react-icons/bi";

const Footer = () => {
  const { screen, changeScreen } = useContext(VisibleScrensContext);

  const navigateTo = (page) => {
    if (page === "home") {
      changeScreen({
        routes: true,
        home: true,
        login: false,
        allChats: false,
        help: false,
        joinUs: false,
      });
    }
    if (page === "allChats") {
      changeScreen({
        routes: true,
        allChats: true,
        home: false,
        login: false,
        help: false,
        joinUs: false,
      });
    }
    if (page === "help") {
      changeScreen({
        routes: true,
        help: true,
        allChats: false,
        home: false,
        login: false,
        joinUs: false,
      });
    }
    if (page === "joinUs") {
      changeScreen({
        routes: true,
        joinUs: true,
        help: false,
        allChats: false,
        home: false,
        login: false,
      });
    }
  };

  return (
    <div className="clonegpt-footer-wrapper">
      <div
        className={
          screen.home ? "clonegpt-footer-elm active" : "clonegpt-footer-elm"
        }
        onClick={() => navigateTo("home")}
      >
        <BiHomeSmile />
        <p>Home</p>
      </div>
      <div
        className={
          screen.allChats ? "clonegpt-footer-elm active" : "clonegpt-footer-elm"
        }
        onClick={() => navigateTo("allChats")}
      >
        <BiChat />
        <p>Chats</p>
      </div>
      <div
        className={
          screen.help ? "clonegpt-footer-elm active" : "clonegpt-footer-elm"
        }
        onClick={() => navigateTo("help")}
      >
        <BiHelpCircle />
        <p>Help</p>
      </div>
      <div
        className={
          screen.joinUs ? "clonegpt-footer-elm active" : "clonegpt-footer-elm"
        }
        onClick={() => navigateTo("joinUs")}
      >
        <BiGroup />
        <p>Join Us</p>
      </div>
    </div>
  );
};

export default Footer;
