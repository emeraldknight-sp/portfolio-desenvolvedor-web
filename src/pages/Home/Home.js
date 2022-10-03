import { useNavigate } from 'react-router-dom'

import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'

import { Button } from '../../components/Button'
import { CardSkill } from '../../components/CardSkill'
import { CardProject } from '../../components/CardProject/CardProject'

import { hardSkills, projects, softSkills } from './Home.mock'

import './Home.style.css'

export const Homepage = () => {
  const navigate = useNavigate()

  const handleClick = (page) => {
    page === '/contact'
    navigate(`${page}`)
  }

  return (
    <div className="large__container">
      <Header />
      <Main>
        {/* WELCOME */}
        <section className="section__welcome">
          <Container>
            <h1 className="section__welcome__title">
              Bem-vindo ao meu portfólio!
            </h1>
            <h5 className="section__welcome__subtitle">
              O portfólio de um desenvolvedor em desenvolvimento.
            </h5>
          </Container>
        </section>

        {/* ABOUT */}
        <section className="section__about">
          <Container>
            <h3 className="section__about__title">Sobre</h3>
            <div className="about__text">
              <p className="about__text__paragraph">
                Formado em Ciência da Computação desde 2020, iniciei meus
                estudos na área de TI no ano de 2014 quando fiz o meu primeiro
                curso da área cursando um técnico em informática, minha
                admiração por TI veio muito antes disso por ser uma área onde eu
                poderia atuar desenvolvendo ideias e soluções que poderiam ser
                úteis para as pessoas.
              </p>
            </div>
            <div className="skills__button">
              <Button onClick={() => handleClick('/about')}>Saiba mais</Button>
            </div>
          </Container>
        </section>

        {/* PROJECTS */}
        <section className="section__projects">
          <Container>
            <h3 className="section__projects__title">Projetos</h3>
            <div className="skills__box">
              {projects.map((skill) => (
                <CardProject
                  key={skill.id}
                  title={skill.title}
                  image={skill.image}
                  techs={skill.techs}
                  status={skill.status}
                  urlGitHub={skill.urlGitHub}
                  urlVercel={skill.urlVercel}
                  project
                />
              ))}
            </div>
            <div className="skills__button">
              <Button onClick={() => handleClick('/projects')}>
                Saiba mais
              </Button>
            </div>
          </Container>
        </section>

        {/* HARD SKILLS */}
        <section className="section__hard__skills">
          <Container>
            <h3 className="section__hard__skills__title">Hard Skills</h3>
            <div className="skills__box">
              {hardSkills.map((skill) => (
                <CardSkill
                  key={skill.id}
                  title={skill.title}
                  icon={skill.icon}
                />
              ))}
            </div>
            <div className="skills__button">
              <Button onClick={() => handleClick('/tools')}>Saiba mais</Button>
            </div>
          </Container>
        </section>

        {/* SOFT SKILLS */}
        <section className="section__soft__skills">
          <Container>
            <h3 className="section__soft__skills__title">Soft Skills</h3>
            <div className="skills__box">
              {softSkills.map((skill) => (
                <CardSkill
                  key={skill.id}
                  title={skill.title}
                  icon={skill.icon}
                />
              ))}
            </div>
          </Container>
        </section>
      </Main>
      <Footer />
    </div>
  )
}
