import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'

import './Tools.style.css'
import {
  back,
  codeVersioning,
  deploy,
  documentation,
  editors,
  formatters,
  frameworksBackEnd,
  frameworksFrontEnd,
  front,
  graphicDesign,
  methodologiesAndManagement,
  packagingSystem,
  stylization,
  systems,
  webDesign,
} from './Tools.mock'
import { CardSkill } from '../../components/CardSkill'

export const Tools = () => {
  return (
    <div className="large__container">
      <Header />
      <Main>
        <section className="section__tools">
          <Container>
            <h3 className="section__tools__title">
              Ferramentas utilizadas para desenvolvimento
            </h3>
            <div className="section__tools__box">
              <h5 className="section__tools__subtitle">Front-end</h5>
              <div className="section__tools__content">
                {front.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools__box">
              <h5 className="section__tools__subtitle">Back-end</h5>
              <div className="section__tools__content">
                {back.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools__box">
              <h5 className="section__tools__subtitle">Estilização</h5>
              <div className="section__tools__content">
                {stylization.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools__box">
              <h5 className="section__tools__subtitle">
                Frameworks no front-end
              </h5>
              <div className="section__tools__content">
                {frameworksFrontEnd.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools__box">
              <h5 className="section__tools__subtitle">
                Frameworks no back-end
              </h5>
              <div className="section__tools__content">
                {frameworksBackEnd.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools__box">
              <h5 className="section__tools__subtitle">Web design</h5>
              <div className="section__tools__content">
                {webDesign.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools__box">
              <h5 className="section__tools__subtitle">Design gráfico</h5>
              <div className="section__tools__content">
                {graphicDesign.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools__box">
              <h5 className="section__tools__subtitle">
                Sistemas operacionais
              </h5>
              <div className="section__tools__content">
                {systems.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools__box">
              <h5 className="section__tools__subtitle">Editores (IDEs)</h5>
              <div className="section__tools__content">
                {editors.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools__box">
              <h5 className="section__tools__subtitle">
                Controle de versionamento de código
              </h5>
              <div className="section__tools__content">
                {codeVersioning.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools__box">
              <h5 className="section__tools__subtitle">
                Gerenciador de pacotes
              </h5>
              <div className="section__tools__content">
                {packagingSystem.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools__box">
              <h5 className="section__tools__subtitle">
                Formatadores de código
              </h5>
              <div className="section__tools__content">
                {formatters.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools__box">
              <h5 className="section__tools__subtitle">
                Documentação de projetos
              </h5>
              <div className="section__tools__content">
                {documentation.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools__box">
              <h5 className="section__tools__subtitle">
                Métodos de desenvolvimento e gerenciamento de projetos
              </h5>
              <div className="section__tools__content">
                {methodologiesAndManagement.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools__box">
              <h5 className="section__tools__subtitle">Deploy de aplicações</h5>
              <div className="section__tools__content">
                {deploy.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
          </Container>
        </section>
      </Main>
      <Footer />
    </div>
  )
}
