import './App.css';

function App() {

  const handleClick = () => {
    console.log("Oi")
  }

  const navigate = useNavigate();

  return (
    <div className="large__container">
      <header className="header">
        <div className="container">
          <figure className="header__figure">
            <img className="header__image" src='' alt='logo' />
          </figure>
          <ul className="header__menu">
            <li className="menu__itens" onClick={() => handleClick()}> Home </li>
            <li className="menu__itens" onClick={() => handleClick()}> Projetos </li>
            <li className="menu__itens" onClick={() => handleClick()}> Habilidades </li>
            <li className="menu__itens" onClick={() => handleClick()}> Contato </li>
          </ul>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <section className="section__about">
            <article className=""></article>
            <article className=""></article>
          </section>
          <section className="section__hard__skills">
            <article className=""></article>
            <article className=""></article>
          </section>
          <section className="section__soft__skills">
            <article className=""></article>
            <article className=""></article>
          </section>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <ul className="footer__menu">
            <li className="menu__itens--footer" onClick={() => }>Linkedin</li>
            <li className="menu__itens--footer">Github</li>
            <li className="menu__itens--footer">Discord</li>
            <li className="menu__itens--footer">Email</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
