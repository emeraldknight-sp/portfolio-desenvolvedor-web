import { MdOutlineMailOutline } from 'react-icons/md';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container container--space-around container--flex-column">
      <p>Desenvolvido por David Almeida</p>
      <ul className="footer__menu">
        <li className="menu__option--footer">
          <a href='https://www.linkedin.com/in/davidalmeidadev/' target="_blank" rel="noreferrer">
            <IoLogoLinkedin/> 
            <span>Linkedin</span>
          </a>
        </li>
        <li className="menu__option--footer"> 
          <a href='https://github.com/emeraldknight-sp/' target="_blank" rel="noreferrer">
            <IoLogoGithub/> 
            <span>GitHub</span>
          </a>
        </li>
        <li className="menu__option--footer">
          <a href='mailto:contato.davidalmeida@outlook.com' target="_blank" rel="noreferrer">
            <MdOutlineMailOutline/> 
            <span>Email</span>
          </a>
        </li>
      </ul>
      <span>Copyright&copy; 2022</span>
    </div>
  </footer>
  )
}

export default Footer;