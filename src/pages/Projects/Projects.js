import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'

import { completed, inProgress, stopped } from './Projects.mock'
import { CardProject } from '../../components/CardProject'

import './Projects.style.css'

export const Projects = () => {
  return (
    <div className="large__container">
      <Header />
      <Main>
        <section className="section__projects">
          <Container>
            <h3 className="section__projects__title">Projetos</h3>
            <div className="completed">
              <h5 className="section__projects__subtitle">Concluídos</h5>
              <div className="projects-completed">
                {completed.length ? (
                  completed.map((project) => (
                    <CardProject
                      key={project.id}
                      title={project.title}
                      image={project.image}
                      techs={project.techs}
                      status={project.status}
                      urlGitHub={project.urlGitHub}
                      urlVercel={project.urlVercel}
                    />
                  ))
                ) : (
                  <span className="error-not-found">
                    Nenhum trabalho para mostrar
                  </span>
                )}
              </div>
            </div>
            <div className="in-progress">
              <h5 className="section__projects__subtitle">
                Em desenvolvimento
              </h5>
              <div className="projects-in-progress">
                {inProgress.length > 0 ? (
                  inProgress.map((project) => (
                    <CardProject
                      key={project.id}
                      title={project.title}
                      image={project.image}
                      techs={project.techs}
                      status={project.status}
                      urlGitHub={project.urlGitHub}
                      urlVercel={project.urlVercel}
                    />
                  ))
                ) : (
                  <span className="error-not-found">
                    Nenhum trabalho para mostrar
                  </span>
                )}
              </div>
            </div>
            <div className="stopped">
              <h5 className="section__projects__subtitle">Parados</h5>
              <div className="projects-stopped">
                {stopped.length ? (
                  stopped.map((project) => (
                    <CardProject
                      key={project.id}
                      title={project.title}
                      image={project.image}
                      techs={project.techs}
                      status={project.status}
                      urlGitHub={project.urlGitHub}
                      urlVercel={project.urlVercel}
                    />
                  ))
                ) : (
                  <span className="error-not-found">
                    Nenhum trabalho para mostrar
                  </span>
                )}
              </div>
            </div>
          </Container>
        </section>
      </Main>
      <Footer />
    </div>
  )
}
