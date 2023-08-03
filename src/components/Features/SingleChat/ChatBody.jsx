import React, { useContext } from "react";

// context
import TempContext from "../../../contexts/TempContext";
import CuurentIdcontext from "../../../contexts/TempCurrentContext";

const ChatBody = () => {
  const { qAndA, changeQAndA } = useContext(TempContext);
  const { currentId, changeCurrentId } = useContext(CuurentIdcontext);

  return (
    <div className="clonegpt-single-chat-body">
      <div className="chat chat-start">
        <div className="chat-bubble">
          👋 Hi there! Welcome to Kalami <br />
          You can ask me any question about this repo.
        </div>
      </div>
      {qAndA.map((elm, id) => {
        if (currentId > id) {
          if (elm.q) {
            return (
              <div className="chat chat-end">
                <div className="chat-bubble">{elm.q}</div>
              </div>
            );
          }
          if (elm.a) {
            return (
              <div className="chat chat-start">
                <div className="chat-bubble">{elm.a}</div>
              </div>
            );
          }
        }
      })}
      {/* <div className="chat chat-end">
        <div className="chat-bubble">
          Can you give me a summary
          <br /> of this repo?
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          The repository "altair-graphql/altair" is for the project named
          "Altair GraphQL Client," which is a feature-rich GraphQL Client IDE
          available for various platforms, including MacOS, Windows, Linux,
          Chrome, and Firefox.
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          Key Features: <br />
          Setting headers and variables for GraphQL requests.
          <br /> Creating and managing environments.
          <br /> Viewing response statistics.
          <br /> Viewing schema documentation and performing advanced searches
          on it.
          <br /> Dynamically adding/generating queries and fragments from schema
          documentation.
          <br />
          Support for file uploads via GraphQL.
          <br /> Autocompletion of queries.
        </div>
      </div> */}
    </div>
  );
};

export default ChatBody;
