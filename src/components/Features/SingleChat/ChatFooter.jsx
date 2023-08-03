import React from "react";

// icons
import { BiSend } from "react-icons/bi";

const ChatFooter = () => {
  return (
    <>
      <form className="clonegpt-single-chat-footer">
        {/* textarea */}
        <textarea rows="1" placeholder="Send a message"></textarea>

        {/* send btn */}
        <div className="clonegpt-single-chat-send-btn">
          <BiSend />
        </div>
      </form>
    </>
  );
};

export default ChatFooter;
