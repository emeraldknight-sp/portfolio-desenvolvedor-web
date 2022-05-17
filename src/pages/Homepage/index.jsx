import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';

import '../../App.css';

const Homepage = () => {

  return (
    <div className="large__container">
      
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <Main>
          
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

      </Main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default Homepage;
