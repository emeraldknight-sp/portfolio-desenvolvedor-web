
const Container = ({ children, ...rest }) => {

  const {className} = rest

  return (
    <article className={className}>
      {children}
    </article>
  )
}

export default Container;