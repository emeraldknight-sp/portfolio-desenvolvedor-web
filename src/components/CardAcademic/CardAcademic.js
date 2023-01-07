import "./CardAcademic.style.css";

export const CardAcademic = ({ image, name, degree, duration, study }) => {
  return (
    <div className="card-academic">
      <figure className="card-academic__figure">
        <img className="card-academic__image" src={image} alt={name} />
      </figure>
      <div className="card-academic__details">
        <h6 className="card-academic__title">{name}</h6>
        <p>
          {degree}, {study}
        </p>
        <p>Carga horária: {duration}</p>
      </div>
    </div>
  );
};
