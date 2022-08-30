import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/";
import Header from "../../components/Header/";
import Main from "../../components/Main/";

const Homepage = () => {

  const navigate = useNavigate()

  const handleClick = (page) => {
    navigate(`${page}`)
  }

  const hardSkills = [
    "Excalidraw",
    "Photoshop",
    "Linux Ubuntu e Windows 10",
    "HTML5",
    "CSS 3",
    "Javascript ES6",
    "DOM",
    "CSS BEM",
    "CSS Grid Layout",
    "CSS Flexbox",
    "HOF's",
    "Fetch API",
    "Async/Await",
    "API RESTFul",
    "ReactJS",
    "Componentização (ReactJS)",
  ];

  const softSkills = [
    "Comunicação eficaz",
    "Gestão de tempo",
    "Solução de problemas",
    "Trabalho em equipe",
    "Flexiblidade e adaptabilidade",
    "Organização e planejamento",
    "Autoconfiança",
    "Atitude positiva",
    "Escrita",
    "Empatia",
    "Resiliência",
    "Colaboração",
    "Liderança",
    "Visão geral",
  ];


  return (
    <div className="large__container">
      <Header />
      <Main props={"container container--flex-column container--space-around"}>
      <section className="section__about">
          <article className="about__info">
            <h5>Sobre</h5>
            <div>
              <p>
                Formando em Ciência da Computação desde 2020, iniciei meus
                estudos na área de TI no ano de 2014 quando fiz o meu primeiro curso da área cursando
                um técnico em informática, minha admiração por TI veio muito
                antes disso por ser uma área onde eu poderia atuar desenvolvendo
                ideias e soluções que poderiam ser úteis para as pessoas.
              </p>
              <button onClick={() => handleClick("/about")}>Saiba mais</button>
            </div>
          </article>
          <article className="about__details">
            <figure className='about__details__figure'>
              <img className='figure__img' src='../assets/img/png/kenzie-logo.png' alt='kenzie logo' />
            </figure>
          </article>
        </section>

        {/* HARD SKILLS */}
        <section className="section__hard__skills">
          <article className="hard__skills__info">
            <h5>Hard Skills</h5>
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
            <h5 className="soft__skills__title">Soft Skills</h5>
            <div className="skills__box">
              <ul className="skills__box__list">
                {softSkills.map((skill) => (
                  <li className="list__item">{skill}</li>
                ))}
              </ul>
            </div>
          </article>
          <article className="soft__skills__details">
            <span>details</span>
          </article>
        </section>
      </Main>
      <Footer />
    </div>
  )
}

export default Homepage;