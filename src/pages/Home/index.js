import { useNavigate } from "react-router-dom";
import { CardProjects } from "../../components/Cards";
import Footer from "../../components/Footer/";
import Header from "../../components/Header/";
import { ListHardSkills, ListSoftSkills } from "../../components/Lists";
import Main from "../../components/Main/";

const Homepage = () => {

  const navigate = useNavigate()

  const handleClick = (page) => {
    navigate(`${page}`)
  }

  const hardSkills = [
    "Excalidraw",
    "DOM",
    "CSS BEM",
    "CSS Grid Layout",
    "CSS Flexbox",
    "HOF's",
    "Fetch API",
    "Async/Await",
    "API RESTFul",
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
              <button className="button" onClick={() => handleClick("/about")}>Saiba mais</button>
            </div>
          </article>
        </section>

        {/* PROJECTS */}
        <section className="section__projects">
          <article className="projects__info">
            <h5>Projetos</h5>
            <div className="skills__box">
              <CardProjects />
            </div>
            <button className="button" onClick={() => handleClick("/projects")}>Saiba mais</button>
          </article>
        </section>

        {/* HARD SKILLS */}
        <section className="section__hard__skills">
          <article className="hard__skills__info">
            <h5>Hard Skills</h5>
            <div className="skills__box">
              <ListHardSkills />
            </div>
            <button className="button" onClick={() => handleClick("/tecnologies")}>Saiba mais</button>
          </article>
        </section>

        {/* SOFT SKILLS */}
        <section className="section__soft__skills">
          <article className="soft__skills__info">
            <h5>Soft Skills</h5>
            <div className="skills__box">
              <ListSoftSkills />
            </div>
          </article>
        </section>
      </Main>
      <Footer />
    </div>
  )
}

export default Homepage;