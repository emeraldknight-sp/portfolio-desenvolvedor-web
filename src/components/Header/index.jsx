import { useNavigate } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { GrInfo } from 'react-icons/gr';
import { BsTelephone } from 'react-icons/bs';

import Logo from '../../assets/img/svg/branding.svg';

const Header = () => {

  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  }

  return(
    <header className="header">
    <div className="container">
      <figure className="header__figure">
        <img className="header__image" src={Logo} alt='logo' />
      </figure>
      <ul className="header__menu">
        <li className="menu__option--header" onClick={() => handleClick("/")}>
          <AiOutlineHome /> 
          <span>Home</span> 
        </li>
        <li className="menu__option--header" onClick={() => handleClick("/projects")}>
          <MdOutlineWorkOutline />
          <span>Projetos</span>
        </li>
        <li className="menu__option--header" onClick={() => handleClick("/skills")}>
          <GrInfo />
          <span>Habilidades</span>
        </li>
        <li className="menu__option--header" onClick={() => handleClick("/contact")}>
          <BsTelephone />
          <span>Contato</span>
        </li>
      </ul>
    </div>
  </header>
  )
}

export default Header;