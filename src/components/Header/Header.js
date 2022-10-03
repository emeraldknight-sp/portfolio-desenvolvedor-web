import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { GrClose } from 'react-icons/gr'
import { GrMenu } from 'react-icons/gr'

import { Button } from '../Button'
import { Container } from '../Container'
import { Menu } from '../Menu'

import Logo from '../../images/png/icons8-esmeralda-48.png'
import './Header.style.css'

export const Header = () => {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [icon, setIcon] = useState(<GrMenu />)

  const handleClick = (page) => {
    navigate(`${page}`)
  }

  const handleOpenMenu = () => {
    setOpen(!open)
    open ? setIcon(<GrMenu />) : setIcon(<GrClose />)
  }

  return (
    <header className="header">
      <Container>
        <div className="header__logo" onClick={() => handleClick('/')}>
          <figure className="header__figure">
            <img className="header__image" src={Logo} alt="logo" />
          </figure>
          <h5 className="header__title">David Almeida</h5>
        </div>

        <Button
          variant={'secondary'}
          size={'small'}
          icon
          onClick={handleOpenMenu}
        >
          {icon}
        </Button>
        <Menu style="vertical" open={open} />
        <Menu style="horizontal" />
      </Container>
    </header>
  )
}
