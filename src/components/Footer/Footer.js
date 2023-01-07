import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { BsDiscord, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

import { Container } from "../Container";
import "./Footer.style.css";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <Container>
        <p>Desenvolvido por David Almeida</p>
        <ul className="footer__menu">
          <li>
            <Link
              className="footer__menu__social"
              to="https://www.linkedin.com/in/davidalmeidadev/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="menu__social__icon" />
              <span>Linkedin</span>
            </Link>
          </li>
          <li>
            <Link
              className="footer__menu__social"
              to="https://github.com/emeraldknight-sp/"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="menu__social__icon" />
              <span>GitHub</span>
            </Link>
          </li>
          <li>
            <Link
              className="footer__menu__social"
              to="https://discord.gg/RUx9WxZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsDiscord className="menu__social__icon" />
              <span>Discord</span>
            </Link>
          </li>
          <li>
            <Link
              className="footer__menu__social"
              to="https://www.instagram.com/davidalmeidadev/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram className="menu__social__icon" />
              <span>Instagram</span>
            </Link>
          </li>
        </ul>
        <p>contato.davidalmeida@outlook.com</p>
      </Container>
      <button
        className="scroll_to_top"
        type="button"
        onClick={() => scrollToTop()}
      >
        <MdOutlineKeyboardArrowUp size={32} />
      </button>
    </footer>
  );
};
