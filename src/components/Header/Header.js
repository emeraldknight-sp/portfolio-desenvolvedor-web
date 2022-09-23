import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { FiTool } from 'react-icons/fi'

import { GrClose, GrInfo } from 'react-icons/gr'
import { GrMenu } from 'react-icons/gr'

import Logo from '../../images/png/icons8-esmeralda-48.png'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

import './Header.style.css'
import { Container } from '../Container'

const Header = () => {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [icon, setIcon] = useState(<GrMenu />)

  const handleClick = (page) => {
    navigate(`${page}`)
  }

  // eslint-disable-next-line no-unused-vars
  const handleOpenMenu = () => {
    setOpen(!open)
    open ? setIcon(<GrClose />) : setIcon(<GrMenu />)
  }

  return (
    <header className="header">
      <Container>
        <div className="header__logo">
          <figure className="header__figure">
            <img className="header__image" src={Logo} alt="logo" />
          </figure>
          <h4 className="header__title">David Almeida</h4>
        </div>
        <ul className="header__menu">
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
            onClick={() => handleClick('/tecnologies')}
          >
            <FiTool />
            <span>Ferramentas</span>
          </li>
          <li
            className="menu__option--header"
            onClick={() => handleClick('/about')}
          >
            <GrInfo />
            <span>Habilidades</span>
          </li>
          <li
            className="menu__option--header"
            onClick={() => handleClick('/contact')}
          >
            <BsTelephone />
            <span>Contato</span>
          </li>
        </ul>
      </Container>
    </header>
  )
}

export default Header
