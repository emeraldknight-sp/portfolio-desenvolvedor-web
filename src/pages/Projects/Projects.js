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
        <Container>
          <div className="about__projects">
            <h3 className="projects__title">Projetos</h3>
            <div className="completed">
              <h4 className="projects__sub-title">Concluídos</h4>
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
              <h4 className="projects__sub-title">Em desenvolvimento</h4>
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
              <h4 className="projects__sub-title">Parados</h4>
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
          </div>
        </Container>
      </Main>
      <Footer />
    </div>
  )
}
