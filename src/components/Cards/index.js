import { useNavigate } from "react-router-dom"


export const CardProjects = () => {

  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link)
  }

  const projects = [
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
        <li className="list__item"> 
          <span> {skill.title} </span>
          <figure>
            <img src={skill.image} alt={skill.title} />
          </figure>
          <div>
            <span>Tecnologias:</span>
            <p>{skill.techs}</p>
          </div>
          <div>
            <span>Status:</span>
            <p>{skill.status}</p>
          </div>
          <div>
            <button onClick={() => handleClick(skill.urlVercel)}>Vercel</button>
            <button onClick={() => handleClick(skill.urlGithub)}>GitHub</button>
          </div>
        </li>
      ))}
    </ul>
  )
}