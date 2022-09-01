import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";

const Tecnologies = () => {

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
      <Main>
        {/* HARD SKILLS */}
        <section className="section__hard__skills">
          <article className="hard__skills__info">
            <div className="hard__skills__details">
              Outras tecnologias: <ul>
                {hardSkills.map((skill) => (
                  <li className="list__item">{skill}</li>
                ))}
              </ul>
            </div>
          </article>
        </section>
      </Main>
      <Footer />
    </div>
  )
}

export default Tecnologies;