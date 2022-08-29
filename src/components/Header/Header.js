
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { GrInfo } from 'react-icons/gr';
import { BsTelephone } from 'react-icons/bs';

import Logo from '../../images/svg/branding.svg';

const Header = () => {

  const handleClick = () => {
    console.log("Oi")
  }

  return (

          // HEADER CODE

          <header className="header">
          <div className="container">
            <figure className="header__figure">
              <img className="header__image" src={Logo} alt='logo' />
            </figure>
            <ul className="header__menu">
              <li className="menu__option--header" onClick={() => handleClick()}>
                <AiOutlineHome /> 
                <span>Home</span> 
              </li>
              <li className="menu__option--header" onClick={() => handleClick()}>
                <MdOutlineWorkOutline />
                <span>Projetos</span>
              </li>
              <li className="menu__option--header" onClick={() => handleClick()}>
                <GrInfo />
                <span>Habilidades</span>
              </li>
              <li className="menu__option--header" onClick={() => handleClick()}>
                <BsTelephone />
                <span>Contato</span>
              </li>
            </ul>
          </div>
        </header>
  )
}

export default Header;