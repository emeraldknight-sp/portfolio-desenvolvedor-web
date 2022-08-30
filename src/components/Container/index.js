
const Container = ({ children }) => {
  return (
    <div className="container container--flex-column container--space-around">
      {children}
    </div>
  )
}

export default Container;