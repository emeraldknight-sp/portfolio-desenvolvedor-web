import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'

import './Contact.style.css'

export const Contact = () => {
  return (
    <div className="large__container">
      <Header />
      <Main>
        <h1>Contact</h1>
      </Main>
      <Footer />
    </div>
  )
}
