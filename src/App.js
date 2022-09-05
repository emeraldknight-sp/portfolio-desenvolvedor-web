import Root from "./routes";
import "./styles/style.css";
import "./styles/breakpoints.css";
import GlobalContext from "./contexts";

import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <GlobalContext>
      <Toaster position="bottom-center" reverseOrder={true} />
        <Root />
    </GlobalContext>
  );
};

export default App;
