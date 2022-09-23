import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'

import './Tecnologies.style.css'

export const Tecnologies = () => {
  return (
    <div className="large__container">
      <Header />
      <Main>
        <section className="section__tecnologies">
          <Container></Container>
        </section>
      </Main>
      <Footer />
    </div>
  )
}
