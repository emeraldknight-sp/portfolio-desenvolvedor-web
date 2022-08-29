import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

const Homepage = () => {

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
    <>
      <Header />
      <Main>
      <section className="section__about">
          <article className="about__info">
            <h5>Sobre</h5>
            <div>
              <p>
                Formando em Ciência da Computação desde 2020, iniciei meus
                estudos em 2014 quando fiz o meu primeiro curso da área cursando
                um técnico em informática, minha admiração por TI veio muito
                antes disso por ser uma área onde eu poderia atuar desenvolvendo
                ideias e soluções que poderiam ser úteis para as pessoas.
              </p>
              <p>Depois de aprender sobre as noções da informática, procurei entender
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
    </>
  )
}

export default Homepage;