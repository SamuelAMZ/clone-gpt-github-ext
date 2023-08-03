import React, { useContext } from "react";

// context
import TempContext from "../../../contexts/TempContext";
import CuurentIdcontext from "../../../contexts/TempCurrentContext";

const QuickActions = () => {
  const { qAndA, changeQAndA } = useContext(TempContext);
  const { currentId, changeCurrentId } = useContext(CuurentIdcontext);

  return (
    <div className="clonegpt-single-chat-quick-actions">
      {qAndA.map((elm, idx) => {
        if (idx < 2) {
          return (
            <p
              onClick={() => {
                console.log(idx);
                changeCurrentId(idx);
              }}
            >
              {elm.q}
            </p>
          );
        }
      })}
    </div>
  );
};

export default QuickActions;
