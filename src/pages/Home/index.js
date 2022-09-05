import { useNavigate } from "react-router-dom";
import { CardProjects } from "../../components/Cards";
import Footer from "../../components/Footer/";
import Container from "../../components/Container/";
import Header from "../../components/Header/";
import { ListHardSkills, ListSoftSkills } from "../../components/Lists";
import Main from "../../components/Main/";

// import toast from "react-hot-toast";

const Homepage = () => {

  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate(`${page}`);
  };

  // const hardSkills = [
  //   "Excalidraw",
  //   "DOM",
  //   "CSS BEM",
  //   "CSS Grid Layout",
  //   "CSS Flexbox",
  //   "HOF's",
  //   "Fetch API",
  //   "Async/Await",
  //   "API RESTFul",
  // ];

  return (
    <div className="large__container">
      <Header />
      <Main>

        <section className="section__welcome">
          <Container className="container">
            <h1>
              Bem-vindo ao meu portfólio!
            </h1>
            <h3>O portfólio de um desenvolvedor em desenvolvimento.</h3>
          </Container>
        </section>

        {/* ABOUT */}
        <section className="section__about">
          <Container className="container">
            <h5>Sobre</h5>
            <div>
              <p>
                Formado em Ciência da Computação desde 2020, iniciei meus
                estudos na área de TI no ano de 2014 quando fiz o meu primeiro curso da área cursando
                um técnico em informática, minha admiração por TI veio muito
                antes disso por ser uma área onde eu poderia atuar desenvolvendo
                ideias e soluções que poderiam ser úteis para as pessoas.
              </p>
            </div>
            <div className="div__button">
              <button className="button button--primary button--read-more" onClick={() => handleClick("/about")}>Saiba mais</button>
            </div>
          </Container>
        </section>

        {/* PROJECTS */}
        <section className="section__projects">
          <Container className="container">
            <h5>Projetos</h5>
            <div className="skills__box">
              <CardProjects />
            </div>
            <div className="div__button">
              <button className="button button--primary button--read-more" onClick={() => handleClick("/projects")}>Saiba mais</button>
            </div>
          </Container>
        </section>

        {/* HARD SKILLS */}
        <section className="section__hard__skills">
          <Container className="container">
            <h5>Hard Skills</h5>
            <div className="skills__box">
              <ListHardSkills />
            </div>
            <div className="div__button">
              <button className="button button--primary button--read-more" onClick={() => handleClick("/tecnologies")}>Saiba mais</button>
            </div>
          </Container>
        </section>

        {/* SOFT SKILLS */}
        <section className="section__soft__skills">
          <Container className="container">
            <h5>Soft Skills</h5>
            <div className="skills__box">
              <ListSoftSkills />
            </div>
          </Container>
        </section>

      </Main>
      <Footer />
    </div>
  )
};

export default Homepage;