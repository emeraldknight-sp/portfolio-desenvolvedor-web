import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import "../../styles/style.css";

const Main = ({ children }) => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="main">
      {children}
      <button
        className="scroll_to_top"
        type="button"
        onClick={() => scrollToTop()}
      >
        <MdOutlineKeyboardArrowUp />
      </button>
    </main>
  );
};

export default Main;
