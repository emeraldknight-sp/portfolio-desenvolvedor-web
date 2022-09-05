import { MenuContextProvider } from "./SwitchOpenCloseMenu"

const GlobalContext = ({ children }) => {
  return <MenuContextProvider>{ children }</MenuContextProvider>
}

export default GlobalContext;