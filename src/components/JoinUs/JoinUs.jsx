import React from "react";

// comps
import Header from "../Globals/Header";

// icons
import {
  BiLogoTelegram,
  BiLogoDiscordAlt,
  BiLogoTwitter,
} from "react-icons/bi";

const JoinUs = () => {
  return (
    <>
      <Header page={"Join Us"} />

      <div className="clonegpt-join-us-container">
        <div className="clonegpt-join-us-elm">
          <div className="clonegpt-join-us-elm-icon">
            <BiLogoTwitter />
          </div>
          <div className="clonegpt-join-us-elm-text">
            <p>Twitter</p>
            <p>Our Twitter Community</p>
          </div>
        </div>
        <div className="clonegpt-join-us-elm">
          <div className="clonegpt-join-us-elm-icon">
            <BiLogoDiscordAlt />
          </div>
          <div className="clonegpt-join-us-elm-text">
            <p>Discord</p>
            <p>Our Community Discord Channel</p>
          </div>
        </div>
        <div className="clonegpt-join-us-elm">
          <div className="clonegpt-join-us-elm-icon">
            <BiLogoTelegram />
          </div>
          <div className="clonegpt-join-us-elm-text">
            <p>Telegram</p>
            <p>Our Community Telegran Channel</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
