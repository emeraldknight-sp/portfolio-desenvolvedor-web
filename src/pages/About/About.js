import { useNavigate } from 'react-router-dom'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'

import './About.style.css'

// import ProfileIcon from '../../images/png/profile-icon.png'

export const About = () => {
  const navigate = useNavigate()

  const handleClick = (page) => {
    navigate(`${page}`)
  }

  return (
    <div className="large__container">
      <Header />
      <Main>
        <section className="section__about--page">
          <Container>
            <div className="about__text">
              <h5 className="about__title">Sobre</h5>
              <p>
                Formando em Ciência da Computação desde 2020, iniciei meus
                estudos em 2014 quando fiz o meu primeiro curso da área cursando
                um técnico em informática, minha admiração por TI veio muito
                antes disso por ser uma área onde eu poderia atuar desenvolvendo
                ideias e soluções que poderiam ser úteis para as pessoas.
              </p>
              <p>
                Depois de aprender sobre as noções da informática, procurei
                entender conceitos mais técnicos e detalhados durante o período
                em que frequentei a faculdade qual das vertentes me chamavam
                mais atenção para poder continuar os meus estudos, sem sombra de
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
              <Button onClick={() => handleClick('/')}>
                Voltar à página inicial
              </Button>
            </div>
            <div className="about__picture">
              <figure className="about__figure">
                <img
                  className="about__image"
                  // src={ProfileIcon}
                  src="https://www.petlove.com.br/images/breeds/193446/profile/original/pinscher-p.jpg?1532539343"
                  alt="Foto de perfil"
                />
                <figcaption>
                  David Almeida, desenvolvedor web (2022).
                </figcaption>
              </figure>
            </div>
          </Container>
        </section>
      </Main>
      <Footer />
    </div>
  )
}
