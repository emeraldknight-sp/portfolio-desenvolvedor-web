import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";

import "./Contact.style.css";

import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "@service_gmail_42",
        "@template_42",
        e.target,
        "oEWX7R91YexKhboLw"
      )
      .then(
        () => {
          toast.success("Mensagem enviada com sucesso!");
        },
        (error) => {
          toast.error(error.message);
        }
      );
  };

  return (
    <div className="large__container">
      <Header />
      <Main>
        <section className="section__contact">
          <Container>
            <div>
              <h3 className="section__contact__title">Deixe sua mensagem</h3>
            </div>
            <form onSubmit={(e) => sendEmail(e)} className="form__email">
              <div className="form__email__field">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  className="form__email__input"
                  placeholder="Nome"
                  name="name"
                  required
                />
              </div>
              <div className="form__email__field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form__email__input"
                  placeholder="Seu e-mail"
                  name="email"
                  required
                />
              </div>
              <div className="form__email__field">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  type="text"
                  className="form__email__input"
                  placeholder="Sua mensagem"
                  name="message"
                  rows="4"
                  required
                />
              </div>
              <Button type="submit">Enviar email</Button>
            </form>
          </Container>
        </section>
      </Main>
      <Footer />
    </div>
  );
};
