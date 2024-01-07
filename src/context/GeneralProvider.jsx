import React from "react";
import { General } from "./general";

export const GenarlContextProvider = ({ children }) => {
  const [active, setActive] = React.useState("welcome");

  const setMenu = (menu = "welcome") => {
    setActive(menu);
  }

  React.useEffect(() => {}, [active]);


  return <General.Provider value={{
    active: active,
    setMenu: setMenu 
  }}>
    {children}
  </General.Provider>

}