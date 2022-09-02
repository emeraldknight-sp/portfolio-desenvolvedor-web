import { useNavigate } from "react-router-dom";
import { SiVercel, SiGithub } from 'react-icons/si';

export const CardProjects = () => {

  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  const projects = [
    {
      urlVercel: "",
      urlGitHub: "",
      title: "Projeto 1",
      techs: "HTML5, CSS3, JS",
      status: "Concluído",
      image: "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    },
    {
      urlVercel: "",
      urlGitHub: "",
      title: "Projeto 1",
      techs: "",
      status: "",
      image: "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    },
    {
      urlVercel: "",
      urlGitHub: "",
      title: "Projeto 1",
      techs: "",
      status: "",
      image: "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    },
    {
      urlVercel: "",
      urlGitHub: "",
      title: "Projeto 1",
      techs: "",
      status: "",
      image: "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    },
    {
      urlVercel: "",
      urlGitHub: "",
      title: "Projeto 1",
      techs: "",
      status: "",
      image: "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    },
    {
      urlVercel: "",
      urlGitHub: "",
      title: "Projeto 1",
      techs: "",
      status: "",
      image: "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    },
    {
      urlVercel: "",
      urlGitHub: "",
      title: "Projeto 1",
      techs: "",
      status: "",
      image: "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    },
    {
      urlVercel: "",
      urlGitHub: "",
      title: "Projeto 1",
      techs: "",
      status: "",
      image: "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    },
    {
      urlVercel: "",
      urlGitHub: "",
      title: "Projeto 1",
      techs: "",
      status: "",
      image: "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    },
  ]

  return (
    <ul className="skills__box__list">
      {projects.map((skill) => (
        <li className="list__item item--project"> 

          {/* TITLE */}
          <h6> {skill.title} </h6>

          {/* FIGURE */}
          <figure>
            <img src={skill.image} alt={skill.title} />
          </figure>

          {/* TECNOLOGIES */}
          <div>
            <span>Tecnologias:</span>
            <p>{skill.techs}</p>
          </div>

          {/* STATUS */}
          <div>
            <span>Status:</span>
            <p>{skill.status}</p>
          </div>

          {/* BUTTON GROUP */}
          <div className="button__group">
            <button className="button button--medium button--primary button--icon" onClick={() => handleClick(skill.urlVercel)}>
              <SiVercel />
              <span>Vercel</span>
            </button>
            <button className="button button--medium button--primary button--icon" onClick={() => handleClick(skill.urlGithub)}>
              <SiGithub />
              <span>GitHub</span>
            </button>

          </div>
        </li>
      ))}
    </ul>
  )
}