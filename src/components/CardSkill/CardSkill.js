import './CardSkill.style.css'

export const CardSkill = ({ title, icon, ...rest }) => {
  return (
    <article className="card-skill" {...rest}>
      <figure className="card-skill__figure">
        <img className="card-skill__image" src={icon} alt={title} />
      </figure>
      <h5 className="card-skill__title">{title}</h5>
    </article>
  )
}
