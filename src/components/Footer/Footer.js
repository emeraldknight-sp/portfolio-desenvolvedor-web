import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io'

import { Container } from '../Container'
import './Footer.style.css'

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <Container>
        <p>Desenvolvido por David Almeida</p>
        <ul className="footer__menu">
          <li>
            <a
              className="footer__menu__social"
              href="https://www.linkedin.com/in/davidalmeidadev/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoLinkedin className="menu__social__icon" />
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a
              className="footer__menu__social"
              href="https://github.com/emeraldknight-sp/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="menu__social__icon" />
              <span>GitHub</span>
            </a>
          </li>
          {/* <li>
            <a
              className="footer__menu__social"
              href="mailto:contato.davidalmeida@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdOutlineMailOutline className="menu__social__icon" />
              <span>Email</span>
            </a>
          </li> */}
          <li>
            <a
              className="footer__menu__social"
              href="https://www.instagram.com/davidalmeidadev/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoInstagram className="menu__social__icon" />
              <span>Instagram</span>
            </a>
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
  )
}
