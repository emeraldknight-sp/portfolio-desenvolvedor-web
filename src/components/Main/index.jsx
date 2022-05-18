

const Main = ({ children }) => {
  
  return(
    <main className="main">
      <div className="container container--flex-column container--space-around">
        { children }
      </div>
    </main>
  )
}

export default Main;