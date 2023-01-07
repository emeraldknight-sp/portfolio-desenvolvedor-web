import { createContext, useState } from "react";

const DEFAULT_VALUE = false;

const MenuContext = createContext(DEFAULT_VALUE);

const MenuContextProvider = ({ children }) => {
  const [open, setOpen] = useState(DEFAULT_VALUE);

  return (
    <MenuContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
export { MenuContextProvider };
export default MenuContext;
