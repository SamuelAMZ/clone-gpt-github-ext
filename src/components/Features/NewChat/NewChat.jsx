import React from "react";

// icons
import { BiSend } from "react-icons/bi";

const NewChat = () => {
  return (
    <div className="clonegpt-new-chat">
      <div className="clone-gpt-new-chat-texts">
        <h3>Start a new chat</h3>
        <p>Add a new repo to your chats</p>
      </div>
      <div className="clone-gpt-new-chat-icon">
        <BiSend />
      </div>
    </div>
  );
};

export default NewChat;
