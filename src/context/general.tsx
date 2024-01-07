import React from "react";

type MenuType = {
  active: string,
  setMenu: (menu: string) => void
}
type GeneralContextType = {
  menu: MenuType;
};

export const General = React.createContext<GeneralContextType>({
  menu: {
    active: "welcome",
    setMenu: (menu = "welcome") => null
  }
});