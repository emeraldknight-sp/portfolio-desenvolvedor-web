import { useNavigate } from 'react-router-dom'

import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { FiTool } from 'react-icons/fi'
import { GrInfo } from 'react-icons/gr'

import './Menu.style.css'

export const Menu = ({ style, open }) => {
  const navigate = useNavigate()

  const handleClick = (page) => {
    navigate(`${page}`)
  }

  return (
    <ul
      className={`header__menu--${style} ${
        open ? 'header__menu--vertical--open' : ''
      }`}
    >
      <li className="menu__option--header" onClick={() => handleClick('/')}>
        <AiOutlineHome />
        <span>Home</span>
      </li>
      <li
        className="menu__option--header"
        onClick={() => handleClick('/projects')}
      >
        <MdOutlineWorkOutline />
        <span>Projetos</span>
      </li>
      <li
        className="menu__option--header"
        onClick={() => handleClick('/tools')}
      >
        <FiTool />
        <span>Ferramentas</span>
      </li>
      <li
        className="menu__option--header"
        onClick={() => handleClick('/about')}
      >
        <GrInfo />
        <span>Sobre</span>
      </li>
      <li
        className="menu__option--header"
        onClick={() => handleClick('/contact')}
      >
        <BsTelephone />
        <span>Contato</span>
      </li>
    </ul>
  )
}
