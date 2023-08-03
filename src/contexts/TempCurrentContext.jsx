import { createContext, useState } from "react";

const CuurentIdcontext = createContext();

export const CurrentIdProvider = ({ children }) => {
  const [currentId, setCurrentId] = useState(0);

  const changeCurrentId = (newLogin) => {
    setAndA(newLogin);
  };

  return (
    <CuurentIdcontext.Provider value={{ currentId, changeCurrentId }}>
      {children}
    </CuurentIdcontext.Provider>
  );
};

export default CuurentIdcontext;
