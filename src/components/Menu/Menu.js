import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FiTool } from "react-icons/fi";
import { GrInfo } from "react-icons/gr";

import "./Menu.style.css";

export const Menu = ({ style, open }) => {
  return (
    <ul
      className={`header__menu--${style} ${
        open ? "header__menu--vertical--open" : ""
      }`}
    >
      <li className="menu__option--header">
        <Link to="/">
          <AiOutlineHome />
          <span>Home</span>
        </Link>
      </li>
      <li className="menu__option--header">
        <Link to="/projects">
          <MdOutlineWorkOutline />
          <span>Projetos</span>
        </Link>
      </li>
      <li className="menu__option--header">
        <Link to="/tools">
          <FiTool />
          <span>Ferramentas</span>
        </Link>
      </li>
      <li className="menu__option--header">
        <Link to="/about">
          <GrInfo />
          <span>Sobre</span>
        </Link>
      </li>
      <li className="menu__option--header">
        <Link to="/contact">
          <BsTelephone />
          <span>Contato</span>
        </Link>
      </li>
    </ul>
  );
};
