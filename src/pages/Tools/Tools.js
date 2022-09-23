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
            <div className="section__tools">
              <h5 className="section__tools-title">Estilização</h5>
              <div className="skills__box">
                {front.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools">
              <h5 className="section__tools-title">Estilização</h5>
              <div className="skills__box">
                {back.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools">
              <h5 className="section__tools-title">Estilização</h5>
              <div className="skills__box">
                {stylization.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools">
              <h5 className="section__tools-title">Estilização</h5>
              <div className="skills__box">
                {frameworksFrontEnd.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools">
              <h5 className="section__tools-title">Estilização</h5>
              <div className="skills__box">
                {frameworksBackEnd.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools">
              <h5 className="section__tools-title">Estilização</h5>
              <div className="skills__box">
                {webDesign.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools">
              <h5 className="section__tools-title">Estilização</h5>
              <div className="skills__box">
                {graphicDesign.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools">
              <h5 className="section__tools-title">Estilização</h5>
              <div className="skills__box">
                {systems.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools">
              <h5 className="section__tools-title">Estilização</h5>
              <div className="skills__box">
                {editors.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools">
              <h5 className="section__tools-title">Estilização</h5>
              <div className="skills__box">
                {codeVersioning.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools">
              <h5 className="section__tools-title">Estilização</h5>
              <div className="skills__box">
                {packagingSystem.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools">
              <h5 className="section__tools-title">Estilização</h5>
              <div className="skills__box">
                {formatters.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools">
              <h5 className="section__tools-title">Estilização</h5>
              <div className="skills__box">
                {documentation.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools">
              <h5 className="section__tools-title">Estilização</h5>
              <div className="skills__box">
                {methodologiesAndManagement.map((item) => (
                  <CardSkill
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            <div className="section__tools">
              <h5 className="section__tools-title">Estilização</h5>
              <div className="skills__box">
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
