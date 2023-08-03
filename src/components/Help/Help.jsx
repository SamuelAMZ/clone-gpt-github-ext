import React from "react";

// comps
import Header from "../Globals/Header";

// icons
import { BiSearch, BiSend } from "react-icons/bi";

const Help = () => {
  return (
    <>
      <Header page={"Help"} />

      <div className="clonegpt-help-container">
        {/* search bar */}
        <div className="clone-gpt-help-search-bar">
          <p>Search posts</p>
          <BiSearch />
        </div>

        {/* posts */}
        <div className="clonegpt-help-posts">
          <div className="clonegpt-help-post">
            <div className="clonegpt-help-post-texts">
              <h3>Hello world 1</h3>
              <p>lorem ipsum dolor sit amet</p>
            </div>
            <div className="clonegpt-help-post-icon">
              <BiSend />
            </div>
          </div>
          <div className="clonegpt-help-post">
            <div className="clonegpt-help-post-texts">
              <h3>Hello world 1</h3>
              <p>lorem ipsum dolor sit amet</p>
            </div>
            <div className="clonegpt-help-post-icon">
              <BiSend />
            </div>
          </div>
          <div className="clonegpt-help-post">
            <div className="clonegpt-help-post-texts">
              <h3>Hello world 1</h3>
              <p>lorem ipsum dolor sit amet</p>
            </div>
            <div className="clonegpt-help-post-icon">
              <BiSend />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
