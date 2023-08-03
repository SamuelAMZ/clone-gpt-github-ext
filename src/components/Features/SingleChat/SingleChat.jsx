import React from "react";

// comps
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatBody from "./ChatBody";
import QuickActions from "./QuickActions";

const SingleChat = () => {
  return (
    <>
      <ChatHeader />
      <ChatBody />
      <QuickActions />
      <ChatFooter />
    </>
  );
};

export default SingleChat;
