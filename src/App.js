import { useNavigate } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { GrInfo } from 'react-icons/gr';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

import Logo from '../assets/img/svg/branding.svg';
import './App.css';

function App() {

  const handleClick = () => {
    console.log("Oi")
  }

  const navigate = useNavigate();

  return (
    <div className="large__container">
      
      {/* HEADER */}
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

      {/* MAIN */}
      <main className="main">
        <div className="container container--flex-column container--space-around">
          
          {/* ABOUT */}
          <section className="section__about">
            <article className="about__info">
              <h2>Sobre</h2>
            </article>
            <article className="about__details">

            </article>
          </section>
          
          {/* HARD SKILLS */}
          <section className="section__hard__skills">
            <article className="hard__skills__info">
              <h2>Hard Skills</h2>
            </article>
            <article className="hard__skills__details">

            </article>
          </section>

          {/* SOFT SKILLS */}
          <section className="section__soft__skills">
            <article className="soft__skills__info">
              <h2>Soft Skills</h2>
            </article>
            <article className="soft__skills__details">

            </article>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container container--space-around container--flex-column">
          <p>Desenvolvido por David Almeida</p>
          <ul className="footer__menu">
            <li className="menu__option--footer">
              <a href='https://www.linkedin.com/in/davidalmeidadev/' target="_blank" rel="noreferrer">
                <IoLogoLinkedin /> 
                <span>Linkedin</span>
              </a>
            </li>
            <li className="menu__option--footer"> 
              <a href='https://github.com/emeraldknight-sp/' target="_blank" rel="noreferrer">
                <IoLogoGithub /> 
                <span>GitHub</span>
              </a>
            </li>
            <li className="menu__option--footer">
              <a href='mailto:contato.davidalmeida@outlook.com' target="_blank" rel="noreferrer">
                <MdOutlineMailOutline /> 
                <span>Email</span>
              </a>
            </li>
          </ul>
          <span>Copyright&copy; 2022</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
