import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { FiTool } from 'react-icons/fi';

// eslint-disable-next-line no-unused-vars
import { GrClose, GrInfo } from 'react-icons/gr';
// import { GrMenu } from 'react-icons/gr';

import Logo from '../../images/png/icons8-esmeralda-48.png';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast"

// import { useContext, useState } from 'react';
// import MenuContext from '../../contexts/SwitchOpenCloseMenu';

const Header = () => {

  const navigate = useNavigate();

  // const [ open, setOpen ] = useState(false);
  // const [ icon, setIcon ] = useState(<GrMenu/>);

  // const { setOpen: setGlobalState } = useContext(MenuContext);

  const handleClick = (page) => {
    toast.error("Página em desenvolvimento!");
    return;
    // eslint-disable-next-line no-unreachable
    navigate(`${page}`)
  };

  // const handleOpenMenu = () => {
  //   open ? setOpen(!open) : setOpen(!open);
  //   open ? setIcon(<GrClose/>) : setIcon(<GrMenu/>);
  //   console.log(`Oi, o menu está ${open}`);
  // };

  return (
    <header className="header">
      <div className="container">
        <div className='container__logo'>
          <figure className="header__figure">
            <img className="header__image" src={Logo} alt='logo' />
          </figure>
          <h4>David Almeida</h4>
        </div>
        {/* <button className="button button--menu" onClick={handleOpenMenu}> {icon} </button>
        <div className={`menu menu--${open}`}>
          <p>MENU FLUTUANTE</p>
        </div> */}
        <ul className="header__menu">

          <li className="menu__option--header" onClick={() => handleClick("/me")}>
            <AiOutlineHome /> 
            <span>Home</span> 
          </li>
          <li className="menu__option--header" onClick={() => handleClick("/projects")}>
            <MdOutlineWorkOutline />
            <span>Projetos</span>
          </li>
          <li className="menu__option--header" onClick={() => handleClick("/tecnologies")}>
            <FiTool />
            <span>Ferramentas de Trabalho</span>
          </li>
          <li className="menu__option--header" onClick={() => handleClick("/about")}>
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