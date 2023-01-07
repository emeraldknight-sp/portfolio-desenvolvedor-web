import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GrMenu } from "react-icons/gr";

import { Button } from "../Button";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { Menu } from "../Menu";

import "./Header.style.css";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState(<GrMenu />);

  const handleOpenMenu = () => {
    setOpen(!open);
    open ? setIcon(<GrMenu />) : setIcon(<GrClose />);
  };

  return (
    <header className="header">
      <Container>
        <Logo />

        <Button
          variant={"secondary"}
          size={"small"}
          icon
          onClick={handleOpenMenu}
        >
          {icon}
        </Button>
        <Menu style="vertical" open={open} />
        <Menu style="horizontal" />
      </Container>
    </header>
  );
};
