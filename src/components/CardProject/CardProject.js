import { SiVercel, SiGithub } from "react-icons/si";
import { Button } from "../Button";

import "./CardProject.style.css";

export const CardProject = ({
  title,
  image,
  techs,
  status,
  urlGitHub,
  urlVercel,
}) => {
  return (
    <article className="card-project">
      <div className="card-project__top">
        <h6 className="card-project__top__title"> {title} </h6>
        <figure className="card-project__top__figure">
          <img className="card-project__top__image" src={image} alt={title} />
        </figure>
      </div>
      <div className="card-project__bottom">
        <div className="card-project__bottom__info">
          <div className="card-project__bottom__tecnologies">
            <strong>Tecnologias:</strong>
            <p>{techs}</p>
          </div>
          <div className="card-project__bottom__status">
            <p>
              <strong>Status:</strong> {status}
            </p>
          </div>
        </div>

        <div className="card-project__buttons">
          <a href={urlVercel} target="_blank" rel="noreferrer">
            <Button round>
              <SiVercel />
            </Button>
          </a>
          <a href={urlGitHub} target="_blank" rel="noreferrer">
            <Button round>
              <SiGithub />
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
};
