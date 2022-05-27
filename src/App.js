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
            <div>
              <p>
                Formando em Ciência da Computação desde 2020, iniciei meus
                estudos em 2014 quando fiz o meu primeiro curso da área cursando
                um técnico em informática, minha admiração por TI veio muito
                antes disso por ser uma área onde eu poderia atuar desenvolvendo
                ideias e soluções que poderiam ser úteis para as pessoas. Depois
                de aprender sobre as noções da informática, procurei entender
                conceitos mais técnicos e detalhados durante o período em que
                frequentei a faculdade qual das vertentes me chamavam mais
                atenção para poder continuar os meus estudos, sem sombra de
                dúvidas optei por estudar um pouco sobre edição de imagens e
                layouts, como desenvolver a responsividade dentro de um site e
                continuei a procura de skills que me tornassem pouco a pouco um
                desenvolver como nenhum outro dentro da área do desenvolvimento
                web unindo a minha parte criativa com a lógica para implementar
                interfaces interativas para os seus respectivos usuários.
              </p>
              <p>
                Atualmente estudo o desenvolvimento web como um todo e tenho
                focado nas noções de front-end até o back-end, procurando
                reforçar conceitos do front-end com seus frameworks e entender
                um pouco mais sobre os bastidores de como funcionam as regras de
                negócios do back-end!
              </p>
            </div>
          </article>
          <article className="about__details"></article>
        </section>

        {/* HARD SKILLS */}
        <section className="section__hard__skills">
          <article className="hard__skills__info">
            <h2>Hard Skills</h2>
            <div className="skills__box">
              <ul className="skills__box__list">
                {hardSkills.map((skill) => (
                  <li className="list__item">{skill}</li>
                ))}
              </ul>
            </div>
          </article>
          <article className="hard__skills__details">
            <span>details</span>
          </article>
        </section>

        {/* SOFT SKILLS */}
        <section className="section__soft__skills">
          <article className="soft__skills__info">
            <h2 className="soft__skills__title">Soft Skills</h2>
            <div className="skills__box">
              <ul className="skills_box__list">
                {softSkills.map((skill) => (
                  <li className="list__item">{skill}</li>
                ))}
              </ul>
            </div>
          </article>
          <article className="soft__skills__details">
            <span>deatils</span>
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
