import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'

import './Contact.style.css'

// import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

export const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault()

    toast.success('Enviando')

    // emailjs
    //   .sendForm('@service_42', '@template_42', e.target, 'yKNxnAgSDRjEdo59n')
    //   .then(
    //     () => {
    //       toast.success('Mensagem enviada com sucesso!')
    //     },
    //     (error) => {
    //       toast.error(error.text)
    //     },
    //   )
  }

  return (
    <div className="large__container">
      <Header />
      <Main>
        <section className="white-box">
          <Container>
            <section className="section__contact">
              <form onSubmit={sendEmail} className="form__email">
                <div className="form__email__field">
                  <label>Nome</label>
                  <input
                    type="text"
                    className="form__email__input"
                    placeholder="Nome"
                    name="name"
                    required
                  />
                </div>
                <div className="form__email__field">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form__email__input"
                    placeholder="Seu e-mail"
                    name="email"
                    required
                  />
                </div>
                <div className="form__email__field">
                  <label>Mensagem</label>
                  <textarea
                    type="text"
                    className="form__email__input"
                    placeholder="Sua mensagem"
                    name="message"
                    required
                  />
                </div>
                <Button type="submit">Enviar email</Button>
              </form>
            </section>
          </Container>
        </section>
      </Main>
      <Footer />
    </div>
  )
}
